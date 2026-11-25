// Entry contract: exactly one line, 1–200 characters, no line breaks,
// not only whitespace. The entry text itself must stay byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At dusk my shadow on the crosswalk stretched so long that for a moment I was walking beside a stranger exactly my height.";

// Validate the entry before writing so a bad entry fails loudly.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (/\r|\n/.test(ENTRY)) {
  throw new Error("Entry must be a single line (no CR or LF)");
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
