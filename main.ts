import * as fs from 'node:fs';

// THE 3AM FRIDGE TEXT — one line, lock-screen length, sent at 3AM.
// Joke construction: a fridge that treats a midnight snack raid like a
// crime it personally hosted. "Heist" makes the fridge an accomplice;
// "saddest" undercuts the drama; the pickle is the whole loot, which is
// why the fridge is judging, not welcoming. No milk, no ice, no open door.
// Voice: small, opinionated, shameless — the fridge narrates the raid
// like a disappointed host, not a neutral appliance.

const LINE =
  "It's 3AM. One pickle. No plate. Standing in the dark. " +
  "This is the saddest heist I have ever hosted.";

const OUTPUT_PATH = '/output/entry.txt';

function main(): void {
  // Lock-screen gate: a single line, 1-140 code points, no trailing newline.
  const length = [...LINE].length;
  if (length < 1 || length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${length}`);
  }
  if (LINE.includes('\n')) {
    throw new Error('entry must be a single line');
  }
  if (LINE !== LINE.trim()) {
    throw new Error('entry must not have leading or trailing whitespace');
  }

  fs.mkdirSync('/output', { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, LINE, 'utf8');
}

main();
