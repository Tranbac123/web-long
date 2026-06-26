// Print a compact, human-readable outline of a Figma node tree with the layout
// + typography fields needed for implementation.
// Usage: node scripts/summarize-node.mjs docs/figma/home-node.json [maxDepth]
import { readFileSync } from "node:fs";

const path = process.argv[2];
const maxDepth = Number(process.argv[3] ?? 4);
const raw = JSON.parse(readFileSync(path, "utf8"));
const root = raw.node ?? raw.states?.[0]?.node ?? raw;

const pageBox = root.absoluteBoundingBox ?? { x: 0, y: 0 };
const r = (n) => (n == null ? "?" : Math.round(n));

function lineFor(node, depth) {
  const b = node.absoluteBoundingBox;
  const rel = b ? `${r(b.x - pageBox.x)},${r(b.y - pageBox.y)}` : "?";
  const size = b ? `${r(b.width)}x${r(b.height)}` : "?";
  let s = `${"  ".repeat(depth)}- ${node.name} [${node.type}] ${size} @${rel}`;

  if (node.layoutMode && node.layoutMode !== "NONE") {
    const pad = `${r(node.paddingTop)}/${r(node.paddingRight)}/${r(
      node.paddingBottom
    )}/${r(node.paddingLeft)}`;
    s += ` layout=${node.layoutMode} gap=${r(node.itemSpacing)} pad(t/r/b/l)=${pad}`;
    if (node.primaryAxisAlignItems) s += ` primary=${node.primaryAxisAlignItems}`;
    if (node.counterAxisAlignItems) s += ` counter=${node.counterAxisAlignItems}`;
  }

  if (node.type === "TEXT" && node.style) {
    const st = node.style;
    const lh = st.lineHeightPx != null ? `${r(st.lineHeightPx)}px` : "auto";
    const ls =
      st.letterSpacing != null ? `${st.letterSpacing.toFixed?.(2) ?? st.letterSpacing}` : "0";
    s += ` | ${st.fontFamily} ${r(st.fontSize)}/${st.fontWeight} lh=${lh} ls=${ls} align=${st.textAlignHorizontal}`;
    const text = (node.characters ?? "").replace(/\n/g, "\\n").slice(0, 60);
    s += ` "${text}"`;
  }
  return s;
}

function walk(node, depth) {
  if (depth > maxDepth) return;
  console.log(lineFor(node, depth));
  if (node.children) for (const c of node.children) walk(c, depth + 1);
}

if (raw.states) {
  for (const st of raw.states) {
    console.log(`\n===== STATE ${st.id} ${st.name} =====`);
    const b = st.node.absoluteBoundingBox ?? { x: 0, y: 0 };
    pageBox.x = b.x;
    pageBox.y = b.y;
    walk(st.node, 0);
  }
} else {
  walk(root, 0);
}
