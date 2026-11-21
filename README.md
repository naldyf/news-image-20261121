# One Day on Earth — 21 November 2026

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/naldyf/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/naldyf/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A single image summing up the world's news of Saturday 21 November 2026,
entered in the [make.fun](https://make.fun) bounty
[news-image-20261121](https://make.fun/bounty/news-image-20261121).

The image is a dramatic editorial painting: a glowing globe at dusk, with the
day's six biggest stories woven around it — Russia's mass missile strikes and
two missiles landing in Poland, the AI stock sell-off (S&P −3.7% into
correction), the COP31 climate talks deadlocked in Antalya, the UK–EU
post-Brexit agreements, Trump calling Putin "my friend", and the 6.9
earthquake in the Peruvian Andes. A serif date masthead and a clean headline
ticker name the day and each story; every fact was verified against the day's
reporting (see `../analysis/facts-2026-11-21.md`).

## How it is built

`entry.png` is the finished image. `main.ts` (Node 22, standard library only)
copies it byte for byte to `/output/entry.png`, so two runs produce identical
output and the program never touches the network.

## The day's stories (verified)

- Russia fired 400+ drones and 110+ missiles at Ukraine; at least 8 killed in
  Kyiv; two Russian missiles and a drone landed in Poland (PM Tusk: deliberate
  provocation).
- US stocks fell sharply: S&P 500 −3.7% into correction, Nasdaq −5.28%
  erasing all 2026 gains, in an AI and chip sell-off.
- COP31 in Antalya, Turkey ran into overtime as ~200 nations failed to agree
  on fossil fuels.
- UK PM Andy Burnham and the EU signed three post-Brexit agreements (food
  exports, carbon markets, youth mobility for 100,000 young Britons).
- At APEC, Trump called Putin "my friend"; Zelenskyy replied Putin is a
  "killer".
- A 6.9 magnitude earthquake struck the Andes in Peru.
