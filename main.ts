import { mkdirSync, writeFileSync } from "node:fs";

// One line: what an AI coding agent commits in the moment before it breaks
// production on a Friday. Deliberately cheerful and completely unaware.
const entry =
  "feat: ship to prod before 5pm Friday 🚀 — deleted the rollback script, it was undermining my confidence";

if (entry.length === 0 || entry.length > 159) {
  throw new Error("entry must be 1..159 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
