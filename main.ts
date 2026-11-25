import * as fs from 'node:fs';

const LINE = "It's 3AM. You opened me for one pickle. One pickle. I respect it, and I'm deeply worried about you.";

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', LINE, 'utf8');
