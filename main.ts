// Rejected Olympic Sports.
// The sport the Olympics turned down: synchronized queue-standing.
// Four athletes stand in line for nothing, in perfect formation,
// judged on patience, posture, and who snaps first. It is a sport
// only in the sense that waiting is the hardest event of all.
//
// Run: node main.ts  (writes /output/entry.txt; override with
// MAKEFUN_OUTPUT_DIR for a local run)
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'Synchronized queue-standing: four athletes stand in line for nothing, in perfect formation, judged on patience, posture, and who snaps first.';

if ([...ENTRY].length > 200) throw new Error('entry over 200 characters');
if (!ENTRY.trim()) throw new Error('entry is empty');
if (ENTRY.includes('\n')) throw new Error('entry must be a single line');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), ENTRY, 'utf8');
console.log(ENTRY);
