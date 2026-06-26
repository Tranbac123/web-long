// Extract canonical page/testimonial nodes from docs/figma/full-file.json
// into individual JSON files under docs/figma/. No Figma token required when
// full-file.json exists.
//
// Usage: node scripts/extract-figma-page-nodes.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const FIGMA_DIR = resolve("docs/figma");
const FULL = resolve(FIGMA_DIR, "full-file.json");

if (!existsSync(FULL)) {
  console.error("docs/figma/full-file.json not found — cannot extract.");
  process.exit(1);
}

const file = JSON.parse(readFileSync(FULL, "utf8"));
const root = file.document ?? file;

/** Depth-first lookup by node id. */
function findById(node, id) {
  if (!node) return null;
  if (node.id === id) return node;
  if (node.children) {
    for (const child of node.children) {
      const hit = findById(child, id);
      if (hit) return hit;
    }
  }
  return null;
}

const targets = [
  { id: "85:382", out: "home-node.json" },
  { id: "77:169", out: "about-node.json" },
  { id: "151:2", out: "work-node.json" },
  { id: "158:52", out: "project-detail-node.json" },
];

// All three testimonial states bundled into one file.
const testimonialIds = ["85:524", "77:344", "77:363"];

for (const { id, out } of targets) {
  const node = findById(root, id);
  if (!node) {
    console.warn(`! node ${id} not found — skipping ${out}`);
    continue;
  }
  writeFileSync(resolve(FIGMA_DIR, out), JSON.stringify(node, null, 2));
  console.log(`✓ ${out}  (${id}  ${node.name})`);
}

const testimonialStates = testimonialIds
  .map((id) => findById(root, id))
  .filter(Boolean)
  .map((n) => ({ id: n.id, name: n.name, node: n }));

writeFileSync(
  resolve(FIGMA_DIR, "testimonials-node.json"),
  JSON.stringify({ states: testimonialStates }, null, 2)
);
console.log(
  `✓ testimonials-node.json  (${testimonialStates.map((s) => s.id).join(", ")})`
);
