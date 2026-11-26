import { mkdirSync, writeFileSync } from "node:fs";

// One satirical sentence, 86 characters, written verbatim with no trailing
// newline so the file holds exactly the entry text.
const entry =
  "Congress can ban an algorithm overnight but can't turn the bill banning it into a PDF.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
