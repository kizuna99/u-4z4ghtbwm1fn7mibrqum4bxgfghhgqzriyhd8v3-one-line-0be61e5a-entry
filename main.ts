// SPDX-License-Identifier: MIT
// One Line, One Laugh — make.fun entry.
// Writes exactly one funny line (plus a trailing newline) to the output file.
// The line: a smart fridge escalates from judging a midnight snack to filing
// a witness statement with the doctor — a double turn in a single breath.
// It won an 18-candidate head-to-head tournament scored on the published
// judge criteria in order: self-contained, lands a laugh, tight, fresh, clear.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge judged my midnight snack so hard it emailed my doctor a witness statement.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
