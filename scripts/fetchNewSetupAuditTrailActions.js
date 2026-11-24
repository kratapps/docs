#!/usr/bin/node
/**
 * Fetch SetupAuditTrail records from an sf CLI authorized org and list actions
 * that are not yet documented in subsites/setup-audit-trail/docs/reference.json (matched by "action").
 *
 * Raw (unmasked) org data is written to the gitignored out/ dir (or any path outside the repo). Masking and category/title are done afterwards
 * (see .claude/skills/setup-audit-trail-reference/SKILL.md).
 *
 * Usage: node scripts/fetchNewSetupAuditTrailActions.js --target-org <alias|username> [--limit 20000] [--out <file>]
 */
const path = require('path');
const os = require('os');
const { execFile } = require('child_process');
const { promisify } = require('util');
const fs = require('fs-extra');

const run = promisify(execFile);
const repoDir = path.join(__dirname, '..');
const outDir = path.join(repoDir, 'out'); // gitignored
const actionsJsonFile = path.join(__dirname, '../subsites/setup-audit-trail/docs/reference.json');

function parseArgs(argv) {
    const args = { limit: 20000, out: path.join(outDir, 'setup-audit-trail-new-actions.json') };
    for (let i = 0; i < argv.length; i++) {
        const key = argv[i];
        if (key === '--target-org' || key === '-o') args.targetOrg = argv[++i];
        else if (key === '--limit') args.limit = parseInt(argv[++i], 10);
        else if (key === '--out') args.out = path.resolve(argv[++i]);
        else throw new Error(`Unknown argument: ${key}`);
    }
    if (!args.targetOrg) throw new Error('Missing --target-org <alias|username>');
    if (!Number.isInteger(args.limit) || args.limit < 1) throw new Error('--limit must be a positive integer');
    const insideRepo = !path.relative(repoDir, args.out).startsWith('..');
    const insideOutDir = !path.relative(outDir, args.out).startsWith('..');
    if (insideRepo && !insideOutDir) {
        throw new Error('--out inside the repository must be under out/ (gitignored), raw org data must not be committed');
    }
    return args;
}

// SOQL statement length limit is 100 000 characters
const MAX_SOQL_LENGTH = 100000;

async function apiRequest(targetOrg, endpoint, body) {
    const args = ['api', 'request', 'rest', endpoint, '--target-org', targetOrg];
    let bodyFile;
    if (body) {
        bodyFile = path.join(os.tmpdir(), `setup-audit-trail-request-${process.pid}.json`);
        await fs.writeJson(bodyFile, body);
        args.push('--method', 'POST', '--body', `@${bodyFile}`);
    }
    try {
        const { stdout } = await run('sf', args, { maxBuffer: 512 * 1024 * 1024 });
        return JSON.parse(stdout);
    } finally {
        if (bodyFile) await fs.remove(bodyFile);
    }
}

async function query(targetOrg, limit, knownActions) {
    // Exclude documented actions in the query, so they do not use up the row limit.
    const exclude = knownActions.length
        ? `WHERE Action NOT IN (${knownActions.map((it) => `'${it.replace(/'/g, "\\'")}'`).join(',')}) `
        : '';
    const soql = `SELECT Action, Section, Display, CreatedDate FROM SetupAuditTrail ${exclude}ORDER BY CreatedDate DESC LIMIT ${limit}`;
    if (soql.length > MAX_SOQL_LENGTH) {
        throw new Error(`Query is ${soql.length} characters, over the ${MAX_SOQL_LENGTH} SOQL limit.`);
    }
    // The query is too long for a GET request URL (HTTP 414), so send it in a Composite API POST body.
    const version = await getApiVersion(targetOrg);
    const composite = await apiRequest(targetOrg, `/services/data/v${version}/composite`, {
        allOrNone: true,
        compositeRequest: [{ method: 'GET', referenceId: 'query', url: `/services/data/v${version}/query?q=${encodeURIComponent(soql)}` }]
    });
    const response = composite.compositeResponse[0];
    if (response.httpStatusCode !== 200) {
        throw new Error(`Query failed: ${JSON.stringify(response.body)}`);
    }
    let { records, done, nextRecordsUrl } = response.body;
    let more;
    while (!done) {
        ({ records: more, done, nextRecordsUrl } = await apiRequest(targetOrg, nextRecordsUrl));
        records = records.concat(more);
    }
    return records;
}

async function getApiVersion(targetOrg) {
    const versions = await apiRequest(targetOrg, '/services/data');
    return versions[versions.length - 1].version;
}

async function main() {
    const args = parseArgs(process.argv.slice(2));
    const known = new Set((await fs.readJson(actionsJsonFile)).map((it) => it.action));
    const records = await query(args.targetOrg, args.limit, [...known]);
    // Records are newest first. Per action keep the newest record that has Display/Section, else the newest.
    const byAction = new Map();
    for (const r of records) {
        if (known.has(r.Action)) continue;
        const current = byAction.get(r.Action);
        const score = (x) => (x.Display ? 2 : 0) + (x.Section ? 1 : 0);
        if (!current || score(r) > score(current)) byAction.set(r.Action, r);
    }
    const candidates = [...byAction.values()]
        .map((r) => ({ action: r.Action, display: r.Display || null, section: r.Section || null }))
        .sort((a, b) => a.action.localeCompare(b.action));
    await fs.outputJson(args.out, candidates, { spaces: 2 });
    console.log(`Fetched ${records.length} records, ${known.size} documented actions, ${candidates.length} new actions.`);
    console.log(`Raw candidates written to ${args.out} (contains real org data, do not commit).`);
}

main().catch((e) => {
    console.error(e.message);
    process.exit(1);
});
