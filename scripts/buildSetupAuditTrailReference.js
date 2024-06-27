#!/usr/bin/node
const path = require('path');
const fs = require('fs-extra');

const referenceDir = path.join(__dirname, '../subsites/setup-audit-trail/docs');
const actionsJsonFile = path.join(referenceDir, 'reference.json');
const referenceFile = path.join(referenceDir, 'reference.md');

const startSeparator = '<!-- reference -->';
const stopSeparator = '<!-- referencestop -->';

async function main() {
    let actions = await fs.readJson(actionsJsonFile);
    // Sort actions
    actions.sort((a, b) => a.action.localeCompare(b.action) || a.title.localeCompare(b.title));
    checkDuplicates(actions);
    // Write deduplicated and sorted reference to setup-audit-trail/reference.json
    await fs.writeJson(actionsJsonFile, actions, { spaces: 2 });
    // Write reference to setup-audit-trail/reference.md
    const template = await fs.readFile(referenceFile, 'utf-8');
    const start = template.split(startSeparator)[0];
    const stop = template.split(stopSeparator)[1];
    const reference = await createDocs(actions);
    await fs.writeFile(referenceFile, [start, startSeparator, '\n', reference, stopSeparator, stop].join(''));
}

function checkDuplicates(actions) {
    const names = [];
    for (let action of actions) {
        const name = action.action;
        if (names.includes(name)) {
            throw new Error(`Duplicate action: ${name}`);
        }
        names.push(name);
    }
}

const buildQuery = (actions) => `\`\`\`
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser 
FROM SetupAuditTrail 
WHERE Action IN (${actions.map((it) => `'${it}'`).join(',')}) 
ORDER BY CreatedDate DESC LIMIT 1000
\`\`\``;

async function createDocs(actions) {
    const categories = [
        'User Management',
        'Permission Management',
        'Automation',
        'Organization Management',
        'Schema',
        'Data Management',
        'UI'
    ];
    const items = [...actions];
    items.sort((a, b) => {
        let catA = categories.indexOf(a.category);
        let catB = categories.indexOf(b.category);
        if (catA === -1) {
            catA = categories.length;
        }
        if (catB === -1) {
            catB = categories.length;
        }

        if (catA === catB) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        }

        // Sort by category first, and by title if categories are different
        return catA - catB;
    });
    let currentCategory = null;
    let currentTitle = null;
    let currentActions = [];
    let reference = '';
    items.forEach((item, idx) => {
        if (currentCategory !== item.category) {
            currentCategory = item.category;
            reference += `\n## ${currentCategory}\n`;
        }
        if (currentTitle !== item.title) {
            currentTitle = item.title;
            currentActions = [];
            reference += `\n### ${currentTitle}\n`;
        }
        const section = item.section ? ` (${item.section})` : '';
        const display = item.display ? ` - ${item.display}` : '';
        currentActions.push(item.action);
        reference += `- ${item.action}${section}${display}\n`;

        let next = idx < items.length ? items[idx + 1] : null;
        if (!next || currentTitle !== next.title) {
            reference += `\n\n${buildQuery(currentActions)}\n`;
        }
    });
    return reference;
}

main();
