---
name: UKAN Côte d’Ivoire
description: "L’étoffe: the alumni network woven as a Kita strip cloth, in UKAN blue with orange and green weft."
colors:
  bleu: "#001e58"
  orange: "#ff6b01"
  vert: "#02743a"
  bleu-profond: "#00153e"
  bleu-clair: "#0a2f72"
  bleu-voile: "#e8edf6"
  orange-texte: "#c24e00"
  orange-voile: "#fff1e6"
  vert-voile: "#e6f2eb"
  rouge-filet: "#c8102e"
  ambre: "#8a5100"
  encre: "#0e1420"
  g700: "#47536b"
  g500: "#6e7c96"
  g300: "#c9d2e0"
  g100: "#edf1f7"
  g50: "#f7f9fc"
  blanc: "#ffffff"
  sur-bleu: "#d3dbea"
  sur-bleu-doux: "#9fb0cf"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(42px, 5.6vw, 80px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(30px, 3.6vw, 44px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "32px"
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "IBM Plex Sans, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 300
    lineHeight: 1.55
  body:
    fontFamily: "IBM Plex Sans, Segoe UI, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  body-sm:
    fontFamily: "IBM Plex Sans, Segoe UI, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "22px"
  label:
    fontFamily: "IBM Plex Sans, Segoe UI, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: "18px"
  caption:
    fontFamily: "IBM Plex Sans, Segoe UI, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "18px"
rounded:
  none: "0px"
  sm: "4px"
spacing:
  gutter: "clamp(20px, 6vw, 80px)"
  section: "clamp(64px, 9vw, 112px)"
  container: "1440px"
  header: "80px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
  4xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.bleu}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.orange-texte}"
    textColor: "{colors.blanc}"
  button-primary-large:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.bleu}"
    rounded: "{rounded.sm}"
    padding: "0 28px"
    height: "56px"
  button-blue:
    backgroundColor: "{colors.bleu}"
    textColor: "{colors.blanc}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-blue-hover:
    backgroundColor: "{colors.bleu-clair}"
    textColor: "{colors.blanc}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.bleu}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.bleu-voile}"
    textColor: "{colors.bleu}"
  input:
    backgroundColor: "{colors.blanc}"
    textColor: "{colors.encre}"
    rounded: "{rounded.sm}"
    padding: "0 14px"
    height: "48px"
  choice-strip:
    backgroundColor: "{colors.blanc}"
    textColor: "{colors.bleu}"
    rounded: "{rounded.sm}"
    padding: "8px 12px 8px 14px"
    height: "48px"
  choice-strip-checked:
    backgroundColor: "{colors.bleu}"
    textColor: "{colors.blanc}"
  loom-panel:
    backgroundColor: "{colors.blanc}"
    textColor: "{colors.encre}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 2.4vw, 36px)"
  text-strip:
    backgroundColor: "{colors.bleu-voile}"
    textColor: "{colors.encre}"
    rounded: "{rounded.none}"
    padding: "28px 24px 36px"
  programme-strip:
    backgroundColor: "{colors.blanc}"
    textColor: "{colors.bleu}"
    rounded: "{rounded.none}"
    padding: "24px 18px 28px"
  todo-tag:
    backgroundColor: "#fff8ec"
    textColor: "{colors.ambre}"
    rounded: "3px"
    padding: "1px 8px"
---

# Design System: UKAN Côte d’Ivoire

## Overview

**Creative North Star: "L’étoffe" (the woven cloth)**

The network is a Kita strip cloth: each alumnus and each programme is a narrow strip sewn edge to edge. Every surface is a loom of 12 strips (4 on phones) with a visible 1px seam on each strip line. UKAN blue is the cloth and covers the dominant share of the surface; white strips carry reading; orange, green, pale blue and the lighter blue appear only as weft blocks, flat rectangles with square corners, staggered from strip to strip. The tricolour rule runs as warp threads and selvedges. This is construction, not folklore.

Density is calm and editorial: large warm serif headlines, everything small set in Plex, generous section rhythm, long text kept to 58 to 66 characters. Depth is almost absent; the cloth is flat, and the single lifted object is the membership loom panel. Motion is one shuttle pass on load and one interaction that weaves.

The world rejects the institutional template of a blue header over alternating sections of equal rounded cards, and it rejects "Africa" clichés (folkloric motifs, masks, savannah, wax-print or fabric textures) as well as a cold corporate register.

**Key Characteristics:**
- A 12-strip loom grid with visible seams, carried under light sections as well as on the blue cloth.
- Square-cornered weft blocks as the only colour accents; never gradients, never textures.
- The four-segment tricolour rule as selvedge (horizontal) and warp thread (vertical).
- Source Serif 4 at 600 for every heading; IBM Plex Sans for everything else; no third face.
- One orange action per screen, written in blue.

## Colors

A committed single-hue cloth (UKAN blue and its tints) with two charter accents used as small, flat weft blocks.

### Primary
- **UKAN Blue** (bleu): the cloth itself. Hero, page headers, plan and contact sections, mobile menu, every heading on white, the blue button, checked choice strips.
- **Deep Night Blue** (bleu-profond): service bar, footer, mobile menu top bar.
- **Loom Blue** (bleu-clair): blue-on-blue weft blocks, timeline blocks, contact icon tiles, blue button hover.

### Secondary
- **Ivory Orange** (orange): the one primary button per screen, weft blocks, active-nav underline block, selection highlight, focus ring, list markers. Text on it is always UKAN Blue.
- **Burnt Orange Text** (orange-texte): orange written on white (action links, axis numbers) and the orange button's hover fill with white text.
- **Orange Veil** (orange-voile): background of the orange text strip and orange call-out.

### Tertiary
- **Ivory Green** (vert): confirmation only and weft. The loom's selvedge turns green when the request is ready; the final step of a sequence; green bullets and rule tops. Never a full-page fill.
- **Green Veil** (vert-voile): green call-out and check tile backgrounds.

### Neutral
- **Ink** (encre): long body text.
- **Slate 700** (g700): secondary text, ledes on white.
- **Slate 500** (g500): captions, placeholders, optional markers.
- **Seam Grey 300** (g300): input and strip borders, ruled lines.
- **Grey 100 / Grey 50** (g100 / g50): light dividers; the programme cloth section background.
- **Pale Blue Veil** (bleu-voile): text strips, quote band, portrait tiles, the lisière's unwoven track.
- **On-Blue Text** (sur-bleu) and **On-Blue Muted** (sur-bleu-doux): body and note text on the cloth.
- **Tricolour Red** (rouge-filet): the first segment of the tricolour rule and error states only. The logo's own red (#FC0213) stays in the logo.
- **Amber** (ambre): the "à compléter" placeholder tag only.

Seams are translucent: white at 8 % on blue, UKAN Blue at 7 % on white.

### Named Rules
**The One Orange Button Rule.** Exactly one orange button per screen; text on orange is UKAN Blue, white only on the darkened hover. Every other action is blue, outlined, or a link.

**The Weft Block Rule.** Orange, green and the blue tints appear as flat rectangles that sit on strip lines (start column, span in strips, square corners). They are never gradients, blobs, rounded pills or textures.

**The Tricolour Rule.** Four equal segments: red, white (blue under a white bar, blue again on an orange field), orange, green. 4px under the header, 5px at the foot, 3px under a quote, and as four 3px vertical threads at the hero's seam. It is the only ornament.

## Typography

**Display Font:** Source Serif 4 (with Georgia, serif)
**Body Font:** IBM Plex Sans (with Segoe UI, Arial, sans-serif)

**Character:** A warm, slightly tight serif speaks at large sizes for the network's voice; Plex carries every functional and small element with plain clarity. Lining numerals throughout.

### Hierarchy
- **Display** (600, clamp(42px, 5.6vw, 80px) in the hero; clamp(40px, 5.4vw, 72px) on page headers, 1.04): one per page, white on the cloth, balanced wrap.
- **Headline** (600, clamp(30px, 3.6vw, 44px), 1.12): section titles.
- **Title** (600, 24px/32px; 21 to 26px for strip and panel titles): text strips, programme names, the loom panel title.
- **Serif voice** (400, clamp(22px, 2.6vw, 30px), 1.45): president's excerpt and quotes (quotes italic); the president's letter at 19px/1.75.
- **Lede** (300, clamp(18px, 1.5vw, 21px), 1.55, max 58ch): one per section head.
- **Body** (400, 16px/26px, max 66ch).
- **Small** (14px/22px) and **Caption** (13px/18px).
- **Label** (600, 13px/18px, UKAN Blue): field labels above inputs.
- Large serif numerals (600, 40px) mark years and steps.

### Named Rules
**The Two Faces Rule.** Every heading is Source Serif 4 at 600; every label, button, nav item and caption is Plex. No third typeface, no uppercase runs, no letter-spaced labels above headings.

## Layout

A centred container (max 1440px) with fluid gutters (clamp(20px, 6vw, 80px)) holds a 12-column loom whose seams are painted every 1/12 of the container and repeat under light sections; at 640px and below the loom shows 4 strips. Section padding is clamp(64px, 9vw, 112px); a tighter band uses 56px. Spacing otherwise follows the charter's multiples of 4.

Compositions place content on strip spans rather than in centred card rows: hero text on strips 1 to 7 and the loom panel on 8 to 12; text strips at 7 to 9 and 10 to 12 with the second dropped 72px; the seven programmes as seven vertical strips with every even strip dropped 64px (4 strips with 48px drops below 1180px, one column on phones). Breakpoints: 1180px (burger menu), 960px (all spans go full width), 640px (4-strip loom, hero weft becomes a 12px four-colour selvedge under the text, panel goes full bleed).

The header is sticky (80px, 68px below 960px) under a 36px deep-blue service bar.

## Elevation & Depth

The cloth is flat. Depth comes from tone (blue cloth, white strips, pale-blue strips) and from weft blocks behind content, not from shadows. One lifted object exists: the membership loom panel on the blue cloth, with a deep blue-black shadow, removed on phones where the panel runs full bleed. The charter's three shadows (légère, moyenne, forte) and its 8px card radius are deliberately not tokens of this system: nothing on the flat cloth uses them.

### Shadow Vocabulary
- **Loom panel** (`box-shadow: 0 24px 48px rgba(0, 10, 40, 0.35)`): the membership panel on the cloth only.
- **Input focus halo** (`box-shadow: 0 0 0 3px rgba(0, 30, 88, 0.1)`): with the 2px blue border on focus.

### Named Rules
**The Flat Cloth Rule.** Nothing on the cloth floats except the loom panel. Shadows are always blue-tinted, never grey.

## Shapes

Square by default. Panels, strips, weft blocks, portrait tiles, icon tiles, value chips and call-outs have 0 radius; the cloth's geometry is rectangles sewn edge to edge, so adjacent strips share 1px borders rather than gaps. Only controls are softened: buttons, inputs, choice strips and the skip link at 4px; the language switch and the placeholder tag at 3px. Markers are rectangles too: 12 by 8px bullets, 32 by 8px strip heads, 40 by 6px call-out heads, 48 by 8px step heads.

## Components

### Buttons
- **Shape:** gently softened (4px), 2px transparent border, Plex 15px/600, icon gap 10px.
- **Primary (orange):** orange fill, blue text at 700; 48px tall (56px and 17px in the large size). Hover darkens to burnt orange with white text.
- **Blue:** the everyday action (header "Adhérer", the join band on orange). Hover to Loom Blue.
- **Outline:** transparent with 2px blue border; hover fills with the pale-blue veil. A white-outline variant (70 % white border) serves the cloth.
- **Focus:** 3px orange outline, 3px offset (site-wide).
- **Links:** action links in burnt orange 600 with an arrow that slides 4px and an underline that fades in; on the cloth the same link is white.

### Inputs / Fields
- **Style:** white, 1px Seam Grey border, 4px radius, 48px tall, 15px text, label above in 13px/600 blue.
- **Focus:** 2px UKAN Blue border plus a 3px blue 10 % halo.
- **Error:** 2px tricolour red border and a 13px red message with a small red triangle marker.

### Choice Strips
Radio choices rendered as 48px strips in a two-column grid: white with grey border, blue border on hover, solid UKAN Blue with white text when checked.

### The Loom Panel (signature)
The membership form as a white woven panel on the blue cloth: serif title, choice strips, fields, a live status line, one large orange WhatsApp button, then text links. Its left edge is a 14px selvedge of four blocks on a pale-blue track; each answered field weaves one block in (scaleY from the top, 0.5s), and the whole selvedge turns green when the request is ready.

### Text Strips and Call-outs
A text strip is a pale-blue (or blue, or orange-veil) block with a 32 by 8px weft block heading it, a 22px serif title and grey body. Call-outs (encadré) are flat tinted blocks with a 40 by 6px head block and no side border.

### Programme Cloth
Seven vertical strips sewn with 1px grey seams under a 4px blue top edge, cycling blue, pale blue and white, each headed by an orange, green or blue weft block; deliverables listed as ruled lines; whole strip links with an arrow that slides.

### Navigation
White sticky bar, horizontal logo at 56px, Plex 15px/500 blue items. The current page carries a 4px orange weft block under the word; hover raises it to half height. A blue "Adhérer" button closes the bar; the tricolour rule (blue middle segment) sits beneath. Below 1180px: full-screen blue cloth with 4 seams, short white logo, serif 26px items with orange for the current page, and the orange join button.

### Join Band
A full-width orange field with a 5px vertical tricolour thread at its left edge (orange segment turned blue), blue headline and text, and a large blue button.

### Placeholder Tag
"À compléter": 12px/600 amber text on pale amber with a 1px dashed amber border; shown wherever official information is missing, never replaced by invented content.

## Do's and Don'ts

### Do:
- **Do** set every new surface on the 12-strip loom and align blocks, columns and offsets to strip lines.
- **Do** carry colour accents as square weft blocks staggered from strip to strip, with a different arrangement per page.
- **Do** keep one orange button per screen with UKAN Blue text; use the blue or outline button for every other action.
- **Do** use green for confirmation and readiness only.
- **Do** put the tricolour rule under the header (4px) and at the foot (5px), switching the white segment to blue on white or orange grounds.
- **Do** honour reduced motion: the only autonomous motion is the shuttle entrance (clip-path reveal, 1.1s, staggered 0.09s) of hero and page-header weft blocks.

### Don't:
- **Don't** build the institutional template of a blue header over alternating sections of equal rounded cards.
- **Don't** use zigzag, diamond, wax-print, mask or savannah motifs, or any fabric texture; the cloth is expressed through grid, seams and flat blocks.
- **Don't** round panels, strips or blocks; radius belongs to controls only.
- **Don't** write white on orange at rest, or use bright orange for text on white.
- **Don't** use the logo red outside the logo, or a third typeface.
- **Don't** add shadows to cloth content beyond the loom panel.
