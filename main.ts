import { mkdirSync, writeFileSync } from "node:fs";

// One Star, Written in Sap — winning line (C6, internal 144/150).
// Single line, 104 chars, UTF-8, one-star review by a fern about its human.
const line =
  "One star. He waters me with leftover coffee because 'plants like caffeine' \u2014 I am a fern, not a barista.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
