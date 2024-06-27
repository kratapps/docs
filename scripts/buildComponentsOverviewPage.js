const fs = require('fs-extra');
const path = require('path');

const overviewDir = path.join(__dirname, '../subsites/component-library/docs/overview');

const template = fs.readFileSync(path.join(overviewDir, 'components.md'), 'utf-8');
const html = fs.readFileSync(path.join(overviewDir, 'components.html'), 'utf-8');

const startSeparator = '<!-- libscript -->';
const stopSeparator = '<!-- libscriptstop -->';
const start = template.split(startSeparator)[0];
const stop = template.split(stopSeparator)[1];

fs.writeFileSync(path.join(overviewDir, 'components.md'), [start, startSeparator, '\n', html, stopSeparator, stop].join(''));
