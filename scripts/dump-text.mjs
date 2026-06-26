import { readFileSync } from "node:fs";
const file = process.argv[2];
const raw = JSON.parse(readFileSync(file, "utf8"));
const root = raw.node ?? raw.states?.[0]?.node ?? raw;
const page = root.absoluteBoundingBox ?? { x: 0, y: 0 };
const r = n => (n==null?"?":Math.round(n));
function walk(n){
  if(n.type==="TEXT" && n.style){
    const b=n.absoluteBoundingBox||{};
    const s=n.style;
    const t=(n.characters||"").replace(/\n/g,"\\n");
    console.log(`@${r(b.x-page.x)},${r(b.y-page.y)} ${r(b.width)}x${r(b.height)} | ${s.fontFamily} ${r(s.fontSize)}/${s.fontWeight} lh${s.lineHeightPx?r(s.lineHeightPx):"auto"} ls${s.letterSpacing?.toFixed?.(1)??0} ${s.textCase||""} | "${t}"`);
  }
  if(raw.states){}
  if(n.children) n.children.forEach(walk);
}
if(raw.states){ for(const st of raw.states){ console.log(`\n## STATE ${st.id} ${st.name}`); page.x=st.node.absoluteBoundingBox.x; page.y=st.node.absoluteBoundingBox.y; walk(st.node);} }
else walk(root);
