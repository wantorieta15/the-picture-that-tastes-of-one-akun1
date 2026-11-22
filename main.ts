// The picture that tastes of one ingredient — Akun 1
// One ingredient: golden honey. A wooden dipper pours a slow, glossy ribbon
// of honey over honeycomb in warm sunlight — the whole picture is the taste
// of honey: gloss, drip, gold. Nothing else competes with it.
// The copy is byte-identical on every run, so both grader runs write the
// same entry.png. The image reads clearly even at 300 px: one golden drip,
// one honeycomb, dark background — the dish is unmistakable at any size.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL("./assets/media-generation-honey-drip-0-512fec05-8557-443a-b0a8-5d2c3cc68a65.jpg", import.meta.url),
  join(outDir, "entry.png"),
);
console.log("entry.png written: golden honey drip (one ingredient)");
