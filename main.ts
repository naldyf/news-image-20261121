// Entry for make.fun news-image-20261121: "Sum up 21 November's world news in one image".
//
// The image (entry.png) is a Gemini-generated editorial painting of the day's
// verified news: a glowing globe at dusk in the centre, with the six biggest
// stories of Saturday 21 November 2026 woven around it — Russia's strikes and
// the missiles that landed in Poland, the AI stock crash, the COP31 deadlock,
// the UK–EU post-Brexit deal, Trump calling Putin "my friend", and the Peru
// earthquake. On top of the painting this repository adds a clean date
// masthead in Liberation Serif Bold — "SATURDAY · 21 NOVEMBER 2026" — with a
// thin gold rule beneath it, and a two-line headline ticker along the bottom
// naming all six stories (Russia strikes / Poland, AI stocks crash S&P −3.7%,
// COP31 deadlock, UK–EU deal, Trump–Putin, Peru quake 6.9). The labelling was
// done here (see build_labeled.py) so the headlines are accurate text, not
// the image generator's garbled lettering.
//
// This program's only job is to place that exact image at /output/entry.png.
// It reads the file and writes it back byte for byte, so two runs produce
// identical output, and it never touches the network.
//
// The competition caps hold by construction: the image this program copies is
// already 1024×1024 pixels and 312373 bytes, under the 1 MiB limit, and the
// program writes nothing else — no resize, no re-encode, no fetch.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(join(here, 'entry.png'));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
console.log(`wrote entry.png (${image.length} bytes) to ${outDir}`);
