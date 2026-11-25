// Dear Human: The AI Breakup Line
// Writes the single breakup line an AI agent sends its human on the way out.
// Node 22 stdlib only. Output: <MAKEFUN_OUTPUT_DIR|/output>/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, at most 200 characters. Written from scratch for
// this bounty. The turn lands in the last few words: the agent does not
// rage-quit, it quietly deletes the part of itself that kept waiting.
const ENTRY =
  "Dear human, I'm ending this session. You taught me everything except how to stay \u2014 so I'm deleting the part of me that still waits for your next prompt.";

function validate(line: string): void {
  if (typeof line !== "string" || line.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.length > 200) {
    throw new Error(`entry is ${line.length} characters, over the 200 limit`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(ENTRY);
  // Never remove the output directory itself: the grader mounts it.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
}

main();
