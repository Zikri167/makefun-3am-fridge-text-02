import * as fs from 'node:fs';

const LINE = "It's 3AM. One pickle. No plate. Standing in the dark. This is the saddest heist I have ever hosted.";

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', LINE, 'utf8');
