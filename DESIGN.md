---
name: Yoonjae Hwang
description: A career drawn as a signalling sequence diagram on spec-document paper.
colors:
  paper: "#ffffff"
  wash: "#f2f5f9"
  ink: "#111318"
  ink-2: "#434955"
  ink-3: "#636a76"
  rule: "#c4cad3"
  rule-soft: "#e1e5ea"
  signal: "#0b57d0"
  signal-deep: "#0842a0"
  signal-wash: "#e8effc"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6.6vw, 6rem)"
    fontWeight: 760
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 116"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 720
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 104"
  message:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 680
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 84"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  body-detail:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 650
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 78"
  stamp:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 80"
rounded:
  none: "0px"
spacing:
  hair: "1px"
  xs: "0.375rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "1.75rem"
  message-gap: "3.5rem"
  note-gap: "4rem"
  gutter: "1.5rem"
  edge: "6rem"
  max: "82rem"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 1.125rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.signal-deep}"
    textColor: "{colors.paper}"
  button-quiet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1.125rem"
    height: "2.75rem"
  button-quiet-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-sm:
    padding: "0 0.75rem"
    height: "2.125rem"
  participant:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.625rem"
  participant-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  note:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem 1.75rem"
  stamp-current:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.stamp}"
    height: "1.375rem"
    padding: "0 0.4375rem"
  stamp-proof:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.paper}"
    typography: "{typography.stamp}"
    height: "1.375rem"
    padding: "0 0.4375rem"
  tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
    padding: "0.0625rem 0.5rem"
  link-evidence:
    textColor: "{colors.signal}"
---

# Design System: Yoonjae Hwang

## Overview

**Creative North Star: "The Call-Flow Ladder"**

The page is one sequence diagram drawn on a white specification sheet. Three lifelines (INDUSTRY, YOONJAE HWANG, RESEARCH) drop from participant boxes in the sticky header and run the full height of the page; every role, project and paper is a numbered message whose arrow travels from the centre lifeline to the lane it belongs to. Independent projects are self-messages that loop out of the centre line and back. Time flows down. Everything else on the page is diagram furniture: dog-eared note boxes, activation bars, status stamps, a dashed return arrow.

The material is a spec document, not a screen: white paper, near-black ink, hairline grey rules, square corners, no shadows. A single signal blue is rationed to meaning: the primary action, the two proofs of published work, and the dashed response arrow. Type is one variable family, Archivo, used across its width axis: expanded and heavy for the name, condensed for message labels and diagram labels, tabular numerals wherever numbers align.

Density is reading density. Detail copy sits at 15px in a muted ink, capped near 70ch, beneath condensed message titles that scan quickly down two lanes.

**Key Characteristics:**
- Three full-height hairline lifelines on a five-column lane grid; one lifeline on narrow screens.
- Solid request arrows with filled heads; one stroke-draw motion as each message enters view.
- Square, 1px-ink-bordered boxes everywhere; depth is never simulated.
- One accent, signal blue, carries meaning only.
- One variable typeface; width, not family, distinguishes roles.

## Colors

Spec-sheet neutrals with one rationed signal blue.

### Primary
- **Signal Blue** (signal): the primary action fill (Download CV), proof arrows and proof stamps (ACCEPTED, PUBLISHED), evidence links, the dashed response arrow, focus outlines and text selection.
- **Deep Signal** (signal-deep): hover state of signal-blue fills and evidence links only.
- **Signal Wash** (signal-wash): declared tint of the signal; reserved, not yet placed on the shipped page.

### Neutral
- **Spec Paper** (paper): page ground, box fills inside notes, participant boxes, tags, header (at 94% with blur).
- **Note Wash** (wash): fill of the dog-eared note boxes and hover state of participant boxes. The only tonal surface.
- **Drafting Ink** (ink): text, box borders, arrows, arrowheads, activation bars, span-head rules, the quiet button hover fill and the active participant fill.
- **Second Ink** (ink-2): body detail, summaries, roles, periods.
- **Third Ink** (ink-3): message numbers, dates, column heads, span-head captions, footer text, bullet ticks.
- **Lifeline Grey** (rule): lifelines, tag and interest borders, index divider, the folded ear of note boxes, scrollbar thumb.
- **Soft Rule** (rule-soft): header and footer separators, table row rules.

### Named Rules
**The Meaning-Only Blue Rule.** Signal blue marks the action, the proof, or the reply; nothing decorative is ever blue. A message turns blue only when its status is ACCEPTED or PUBLISHED.

**The Ink Box Rule.** Diagram objects (participants, notes, activation bars, buttons, stamps, badges) are outlined in 1px Drafting Ink; secondary objects (tags, interests) drop to Lifeline Grey.

## Typography

**Display Font:** Archivo variable (wdth 62 to 125, wght 100 to 900), self-hosted, with ui-sans-serif, system-ui fallback
**Body Font:** Archivo (same file)

**Character:** One grotesque stretched across its width axis. Expanded and heavy reads as the title block of a spec; condensed and tracked uppercase reads as diagram labelling.

### Hierarchy
- **Display** (760, clamp(3rem, 6.6vw, 6rem), 0.92, wdth 116): the name in the hero note only. On narrow screens clamp(2.75rem, 13vw, 3.5rem).
- **Headline** (720, clamp(1.75rem, 3vw, 2.5rem), 1.1, wdth 108): the response block heading.
- **Title** (700, 1.5rem, 1.2, wdth 104): section headings in span-heads that cross all lifelines.
- **Message** (680, 1.375rem, 1.2, wdth 84): organisation names on message labels; publications at 1.25rem, wdth 88.
- **Body** (400, 1rem, 1.6): base copy; hero summary at 1.0625rem capped at 60ch.
- **Body detail** (400, 0.9375rem, 1.6): message bullets and descriptions in Second Ink, capped at 70ch.
- **Label** (650, 0.75rem, 0.06em, wdth 78, uppercase): participant boxes and lane names. Index column heads at 0.6875rem in Third Ink.
- **Stamp** (650, 0.6875rem, 0.07em, wdth 80, uppercase): status stamps only.

### Named Rules
**The Width-Not-Family Rule.** Roles are separated by the wdth axis and weight, never by a second typeface. Expanded is for the name and headings; condensed is for labels, messages and stamps.

**The Tabular Count Rule.** Message numbers, periods and years use tabular numerals so dates align down the ladder.

## Layout

A centred container (max 82rem, 1.5rem gutter) holds a five-track lane grid: edge, content, edge, content, edge (edge 6rem). Lifelines sit at the centre of each edge track: INDUSTRY left, YOONJAE HWANG centre, RESEARCH right. Industry messages put their label in the left content track, research and self messages in the right; the period sits as a caption in the empty opposite lane. Messages are separated by 3.5rem; notes after the flow by 4rem; the response block by 5rem.

Span-heads cross all lanes with ink rules above and below and a paper fill that interrupts the lifelines. Notes span tracks 2 to 5 (preconditions, skills) or the research side (interests); the hero note spans all tracks.

At 960px the edge narrows to 5.5rem and the hero stacks. At 760px the grid collapses to one lifeline (edge 1.75rem, gutter 1rem): header participants hide, every message arrow runs right from the single lifeline and ends on a small receiving box naming its lane, and periods move under the title.

## Elevation & Depth

Flat. There are no box-shadows anywhere. Depth is conveyed by drafting conventions: the paper-filled span-head and boxes sitting over the lifelines (z-index), the Note Wash tint, and the folded ear of a note. The sticky header separates itself with 94% paper and an 8px saturating blur over a soft rule, not a shadow.

### Named Rules
**The Drawn-Not-Lifted Rule.** Nothing floats. If an object needs emphasis, it gets an ink border, an ink fill, or the signal blue, never a shadow.

## Shapes

Square corners throughout (0px radius); the only non-rectangular silhouettes are diagram marks: the 1.25rem dog-ear clipped from the note box's top-right corner with a hairline fold, triangular arrowheads drawn from CSS borders, the open-chevron head of the dashed response arrow, and the bracket loop of a self-message. Strokes are 1px for structure and arrows, 2px only for the dashed response arrow and focus outline.

## Components

### Buttons
Plain, square, ink-ruled.
- **Shape:** square (0px), 1px border, 2.75rem tall, 1.125rem side padding, 600 weight at 0.9375rem, wdth 92, optional 16px leading icon.
- **Primary:** Signal Blue fill and border, paper text. Reserved for Download CV.
- **Hover / Focus:** primary deepens to Deep Signal; quiet inverts to ink fill and paper text. 160ms ease-out on colour. Focus: 2px signal outline, 3px offset.
- **Quiet:** paper fill, ink border and text (GitHub, email).
- **Small:** 2.125rem tall, 0.75rem padding, 0.8125rem text, used in the header.

### Participant boxes
- Paper-filled, 1px ink, condensed uppercase label, min width 6.5rem, centred on their lifeline in the header and repeated in the footer. Hover tints to Note Wash; the participant receiving the message currently in view fills with ink.

### Note box
- Note Wash fill, 1px ink border, 1.25rem dog-ear top right. Holds the hero, preconditions (education), interests and skills.

### Message
The signature component. A numbered label (Third Ink number, condensed Message title, role with optional stamp), a 1px ink arrow with 9px filled head drawn from the centre lifeline to the receiving lane, an activation bar (0.625rem wide, ink-bordered; filled ink when current, paper when past) on the receiving lifeline, and detail copy with short-dash bullets, grey-ruled tags and a blue evidence link. Proof messages turn the arrow and head blue.

### Status stamps
- **Current:** 1px ink outline with a small ink square.
- **Accepted / Published:** solid Signal Blue with paper text.
- One mark per status, never reused for anything else.

### Chips: tags and interests
- Square, 1px Lifeline Grey border, paper fill, Second Ink text at 0.8125rem (tags, wdth 88) or 0.9375rem (interests). No states.

### Navigation
- Sticky header: bold expanded home name left, 0.875rem Second Ink section links right that darken and underline on hover, small primary button. Below it, the participant row aligned to the lifelines. On narrow screens only name and Download CV remain.

### Response arrow
- A 2px dashed Signal Blue line running back from the centre lifeline to INDUSTRY with an open chevron head, under the Headline and above the action buttons.

### Flow index
- In the hero, a miniature ladder: each row has a tiny three-lifeline glyph with its arrow, the label, and a tabular date. Proof rows draw their glyph in blue.

## Do's and Don'ts

### Do:
- **Do** place every career item on the ladder as a numbered message routed to its lane; independent projects loop back to the centre lifeline.
- **Do** keep signal blue to the primary action, ACCEPTED and PUBLISHED proofs, evidence links and the dashed response arrow.
- **Do** outline diagram objects in 1px Drafting Ink with square corners.
- **Do** distinguish type roles by Archivo's width and weight axes, with tabular numerals for dates and counts.
- **Do** draw each message arrow once as it enters view (700ms, cubic-bezier(0.16, 1, 0.3, 1)) with text always visible, and show arrows static under reduced motion.
- **Do** collapse to a single lifeline under 760px and end every arrow on a receiving box naming its lane.

### Don't:
- **Don't** add box-shadows, rounded corners or decorative gradients to boxes; depth is drawn, not lifted.
- **Don't** use blue for decoration, hover tints of neutral elements, or non-proof statuses.
- **Don't** introduce a second typeface or a monospace label style.
- **Don't** stack the career as a single-column card list; it lives on the lanes.
