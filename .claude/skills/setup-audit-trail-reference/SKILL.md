---
name: setup-audit-trail-reference
description:
    Context for maintaining the Salesforce Setup Audit Trail reference
    (subsites/setup-audit-trail). Use when adding or updating actions in
    reference.json, fetching SetupAuditTrail records with sf CLI, masking real
    org data into Star Wars theme, or assigning category/title/section to an
    audit trail action.
---

# Setup Audit Trail reference

Public docs site listing Salesforce `SetupAuditTrail.Action` values with example
`Display`/`Section` text, grouped by repo-defined **category** and **title**.

Published at:

-   Human readable: https://docs.kratapps.com/setup-audit-trail/reference/
    (built from `reference.md`)
-   Raw JSON: https://docs.kratapps.com/setup-audit-trail/reference.json (the
    deployed `reference.json`)

The live JSON can be used to see what is already documented without a local
checkout, but the repo file is what gets edited.

## Files

| File                                             | Role                                                                                |
| ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| `subsites/setup-audit-trail/docs/reference.json` | **Source of truth.** Array of entries, one per unique `action`.                     |
| `subsites/setup-audit-trail/docs/reference.md`   | Generated. Only the part between `<!-- reference -->` and `<!-- referencestop -->`. |
| `scripts/buildSetupAuditTrailReference.js`       | Reads json -> sorts -> rejects duplicate actions -> rewrites json and reference.md. |
| `subsites/setup-audit-trail/mkdocs.yml`          | Subsite config (`make mkdocs-build-subsite SUBSITE=setup-audit-trail`).             |

Never hand-edit the generated block in `reference.md`. Edit `reference.json`,
then run `node scripts/buildSetupAuditTrailReference.js`, then
`npx prettier --write subsites/setup-audit-trail/docs/*` (repo uses prettier;
json = 2 spaces, md = proseWrap always/80).

## reference.json entry

```json
{
    "action": "activateduser",
    "display": "Activated user Anakin Skywalker (UserID: [0052A00000EsOI0])",
    "title": "User Activation and Auth",
    "category": "User Management",
    "section": "Manage Users"
}
```

-   `action` - `SetupAuditTrail.Action`, exact case. **Unique key** (build fails
    on duplicates). Matching for "already documented" must be on `action` only.
-   `display` - one _masked_ example of `Display`. Omitted/absent for a few
    entries where Salesforce returns none; `section` may be `null` (~1/4 of
    entries, e.g. Org Preferences, Network).
-   `section` - `SetupAuditTrail.Section` verbatim (not masked, it is a Setup
    menu name), or `null`/omitted if blank.
-   `title` - repo-defined grouping, becomes the `###` heading. **Not in
    SetupAuditTrail.**
-   `category` - repo-defined, becomes the `##` heading. **Not in
    SetupAuditTrail.**

**`title` and `category` are made up by this repo.** SetupAuditTrail only
returns `Action`, `Display` and `Section` (plus `CreatedDate`, `CreatedBy`,
`DelegateUser`), so nothing in the query result tells you the title or category.
They are editorial judgment, not Salesforce data: decide them using the rules in
"How to pick category/title" below, never expect to find or derive them from the
org, and flag uncertain picks (or newly invented titles) to the user.

Key order used in the file: `action, display, title, category, section`.

## Build output

reference.md: `## category` > `### title` > bullets
`- action (section) - display`, then a generated SOQL block per title:
`SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser FROM SetupAuditTrail WHERE Action IN (...) ORDER BY CreatedDate DESC LIMIT 1000`.
Category order is hardcoded in `createDocs()` (`categories` array): User
Management, Permission Management, Automation, Organization Management, Schema,
Data Management, UI. Categories not in that array sort last (currently
`Data Cloud`) - if you introduce a new category, add it to that array
deliberately.

## Categories and titles in use (prefer existing; reuse over inventing)

-   **User Management**: User Activation and Auth, User Permissions, User
    Detail, User Management Settings, User Login Access
-   **Permission Management**: Profiles, Permission Sets, Permission Set Groups,
    Custom Permissions
-   **Automation**: Flows, Approval Process, Workflow Rule, Apex, Validation
    Rules, Integrations
-   **Organization Management**: Org Preferences (largest bucket, see below),
    Org Config, Portal, Network, Auth. Providers, Security Controls, Connected
    Apps, Chatter Settings, Black Tab Framework, Custom Apps, Session Settings,
    Sandboxes, Deployment Connections, Identity Provider, Email Administration,
    Einstein GPT, Named Credentials, Certificate and Key Management, Password
    Policies, SAML Configuration, Org Limits, Adoption Assistance, Transaction
    Security
-   **Schema**: Custom Fields, Custom Objects, Custom Metadata, Picklists, Big
    Objects, External Objects
-   **Data Management**: Mass Utility, Matching and Duplicate Rules,
    Miscellaneous, Einstein, Sharing Defaults, Sharing Rules, Historical
    Trending, Sharing Sets, Case Feeds
-   **UI**: Layouts, Lightning Components, Apps, Tabs and Pages, Links, Buttons
    and Actions
-   **Data Cloud**: CRMA (single entry)

Regenerate this list from the json if in doubt:
`node -e 'const a=require("./subsites/setup-audit-trail/docs/reference.json");const t={};a.forEach(x=>(t[x.category]??={})[x.title]=1);console.log(t)'`

### How to pick category/title

1. Look at the `section` (Setup menu area) and the action name; find sibling
   actions already in reference.json (same prefix/suffix, same section) and copy
   their category+title. This is the strongest signal.
2. Heuristics seen in the data:
    - `<Pref>OffOn` / `<Pref>OnOff` / `...Enabled`/`Disabled` with display
      `Organization setup action: X has changed.` -> **Organization Management /
      Org Preferences** (section `null`). Only document actions actually
      observed (don't invent the OnOff/OffOn counterpart).
    - `*layout`, `*CompactLayout`, custom button/link/action actions -> **UI**
      (Layouts / Links, Buttons and Actions / Apps, Tabs and Pages / Lightning
      Components).
    - Custom field/object/picklist/record type changes -> **Schema**.
    - Profile / permission set / PSG / custom permission, incl.
      `SetupEntityAccessAudit_*` -> **Permission Management**.
    - User create/freeze/password/login-as/license -> **User Management**.
    - Flow, Apex, approval, workflow, validation rule -> **Automation**.
    - Sharing rules/defaults, duplicate rules, mass utilities, queues, data
      integration -> **Data Management**.
    - Everything org-wide (connected apps, auth providers, network/experience,
      email, domains, roles, groups, sandboxes, security) -> **Organization
      Management**.
3. If still ambiguous, choose the closest existing title; only create a new
   title/category when nothing fits, and tell the user so they can review it.

## Data masking (mandatory)

Real org data must never be committed - this is a public repo. Convert every
real value in `display` to a **Star Wars** equivalent, keeping the _shape_ of
the message (verbs, quotes, punctuation, order) unchanged. Existing entries show
the established style - match it.

Mask:

-   Person names, usernames, emails -> Anakin Skywalker, Darth Vader,
    `darth@vader.com`, Leia Organa, Han Solo, Emperor ...
-   Company/account/org names, domains, URLs, instance hostnames -> Galactic
    Empire, Death Star, Confederacy of Independent Systems, `death-star.cloud`,
    `death-star.com`
-   Object/field/flow/class/profile/permission set/app/queue/role/group/site API
    and label names (custom ones especially) -> Death Star Visit, Stormtrooper,
    Blaster, Battleship Factory ID, `Confederacy_of_Independent_Systems` (keep
    `__c`-style/underscore form if the original had one)
-   Record IDs (15/18-char, with or without `[...]`) -> a plausible fake of the
    same length and prefix (e.g. `[0052A00000EsOI0]`); keep the key prefix (005
    user, 0H4 connected app, 00e profile, 0PS permset...) but randomise the
    rest. Prefer ids already used in the file.
-   Free-text values (formulas, URLs, callback URLs, addresses, IP addresses,
    phone numbers, tokens, certificate names) -> themed fakes. Never keep
    secrets, tokens, session ids, IPs.
-   Namespaces / package names / managed package components -> fictional.
-   Do not leak the org: no company or customer names, no sandbox names, no real
    usernames.

Keep as is: standard Salesforce vocabulary (Account, Opportunity, Case, Task
Layout, "Visit Approval" style generic words only if not org-specific), setup
menu names in `section`, Salesforce's fixed message text, and the `action`
itself. When the real display is already generic (e.g.
`Organization setup action: X has changed.`, `Changed conversion rates`) copy it
verbatim. After masking, grep the new entries against the raw record values
(names, usernames, org host, ids) to confirm nothing leaked.

## Fetching from an org (sf CLI)

Works with any authorized org: `sf org list`, then
`--target-org <alias|username>`.

```bash
# Use the script, a plain sf data query cannot carry the NOT IN list (HTTP 414)
node scripts/fetchNewSetupAuditTrailActions.js --target-org <org>
```

-   **Always exclude documented actions in the query**:
    `WHERE Action NOT IN (<all actions from reference.json>)`. Orgs can hold
    millions of rows (UAT had 1.4M), a plain `ORDER BY CreatedDate DESC LIMIT`
    only sees the newest ones and misses rarer actions. The `NOT IN` list is ~26
    KB, which is too long for a GET URL (`sf data query` fails with HTTP 414),
    so send it through the Composite API as POST
    (`sf api request rest /services/data/vXX.0/composite --method POST --body @file`)
    with a GET subrequest to `/query?q=<encoded SOQL>`. SOQL statement limit is
    100 000 characters. The fetch script does all of this.
-   SetupAuditTrail retains 180 days. `DelegateUser`, `CreatedBy.Username` are
    not needed (and are PII).
-   Group raw records by `Action`, keep the most recent/most informative record
    per action (prefer one with non-empty `Display` and `Section`).
-   Sort order is applied by the build script, but keep new entries appended
    then run the build.

## Workflow for adding new actions

1. Fetch records, keep only undocumented `Action`s (raw data stays in the
   scratchpad/tmp, **never in the repo**; do not commit raw output).
2. For each new action: mask `display`, decide `title` + `category` (above),
   copy `section`.
3. Append entries to `reference.json`, run
   `node scripts/buildSetupAuditTrailReference.js`, run prettier on the touched
   files.
4. Verify: no duplicate-action error, `git diff --stat` only touches
   reference.json/reference.md, spot check diff for leaked real data.
5. Report to the user which actions were added and any new title/category
   created, and which were uncertain.

## Fetch script

`node scripts/fetchNewSetupAuditTrailActions.js --target-org <alias|username> [--limit 20000] [--out <file>]`

-   Queries SetupAuditTrail with
    `Action NOT IN (<actions in the local reference.json>)` via the Composite
    API (see above).
-   Writes candidates `[{action, display, section}]` (one per new action, best
    record) to `--out`, default `out/setup-audit-trail-new-actions.json`. The
    file holds real unmasked org data: `out/` is gitignored and an `--out`
    elsewhere inside the repo is refused (paths outside the repo are fine).
    Never commit it.
-   It does not touch `reference.json`. Next steps are on Claude: mask
    `display`, set `title` + `category`, append, build, prettier (workflow
    above).
-   Periodic scheduling is not configured yet.
