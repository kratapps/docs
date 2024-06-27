const fs = require('fs-extra');
const path = require('path');

const overviewDir = path.join(__dirname, '../subsites/component-library/docs/overview');
const mdFile = path.join(overviewDir, 'components.md');
const htmlFile = path.join(overviewDir, '_components.html');

const template = fs.readFileSync(mdFile, 'utf-8');
const html = fs.readFileSync(htmlFile, 'utf-8');

const startSeparator = '<!-- libscript -->';
const stopSeparator = '<!-- libscriptstop -->';
const start = template.split(startSeparator)[0];
const stop = template.split(stopSeparator)[1];

fs.writeFileSync(mdFile, [start, startSeparator, '\n', html, stopSeparator, stop].join(''));
