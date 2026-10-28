---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/components"]
---

# Surface: portfolio home (single page)

Mode: Persuade. Visitor: industry recruiter / hiring manager skimming under a minute (academic reader secondary). Action: Download CV, email, open the work (ICCCN paper, dagprofiler, GitHub). Must believe in 10s: shipped carrier-grade production software AND publishes systems research. Constraint: keep all current content (reorder allowed, no cuts). Feels wrong: a generic dev-portfolio template. Build path: code-led (no image generation).

## Direction contract

THESIS: The career drawn as a 5G signalling sequence diagram. Lifelines INDUSTRY, YOONJAE HWANG, RESEARCH run the full page; every role, project and the paper is a numbered message, time flowing down. Refuses the dark single-column card stack with mono section labels.

OWN-WORLD: Spec-document white, near-black ink, one signal blue rationed to the action, the two proofs (ACCEPTED paper, PUBLISHED package) and the dashed response arrow. Hairline lifelines, solid request arrows with filled heads, self-message loops for independent projects, activation bars (filled = current, outlined = past), a dog-eared note box. Archivo across widths: expanded bold for the name, condensed for message labels, tabular numerals.

STORY: Recruiter reads the name note, sees production (Ericsson 5G core, metrics) and research (USC labs, ICCCN 2026) as two lanes of one flow, then hits the dashed response arrow: Download CV / email.

FIRST VIEWPORT: Sticky participant header (three boxes aligned to lifelines, links, Download CV). Below, a note box spanning all lifelines: name at display scale, positioning line, summary, F-1 badge, contact, Download CV (primary, blue) + GitHub. Lifelines drop from the header behind the note; the first messages begin at the fold.

FORM: Call-flow ladder diagram; IMPECCABLE'S PICK, position 1 of 7 on the ordered list (roll assigned position 4, the drawing sheet). seed:ae14987cafa667f3
Signature interaction: each message arrow draws from the YOONJAE lifeline to its target as it enters view, and the receiving participant box in the sticky header lights. Motion grammar: one stroke-draw, exponential ease-out, text always visible; static under reduced motion. Kept raises: colour by meaning only; status stamps are law (CURRENT, ACCEPTED, PUBLISHED); numbered messages with caption margins.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Adaptations recorded at finish
- Hero carries "The flow at a glance": the whole flow as a miniature ladder index, so production and research both read in the first screen (PRODUCT.md principle 1).
- Education follows the flow (after Research Interests) so message 1 reaches the desktop fold.
- Each message's period sits as a caption in the empty opposite lane; no hero-metric figures.
- Mobile: one lifeline; every arrow ends on a receiving box naming its lane; the reply arrow ends on INDUSTRY.
- Open ceiling (not built): par frame for concurrent USC roles, drawn time ruler, labels on the arrow line, spec title block.
