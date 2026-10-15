# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary (confirmed):** alumni of UK institutions living in Côte d’Ivoire who are not yet members, or who belonged to UKAN before its period of inactivity and need a reason to come back. They studied, trained, held a scholarship (Chevening and others) or took part in an exchange, research or professional programme in the United Kingdom. They are working professionals across finance, energy, law, health, engineering, digital and the public sector, from recent graduates to senior leaders. They mostly arrive on a phone, often from a WhatsApp link shared by another alumnus. Their job on the site: understand in seconds whether they are eligible, see that the network is alive and useful, and send a membership request.

**Secondary:** institutional and private partners (British Embassy, British Council, Chevening, UK universities, companies) who check the association’s credibility before a partnership. The site must not lose them, but it is not designed around them.

## Product Purpose

The website of UKAN Côte d’Ivoire (United Kingdom Alumni Network), an association under Ivorian law based in Abidjan. It exists to bring alumni into the network and make the relaunch visible. Success means membership requests: a WhatsApp message or an email asking for the form. The 2030 targets are 150 active members, 80 % renewal, 50 mentors, 10–15 active partnerships and 10 structured activities a year.

## Positioning

The only network in Côte d’Ivoire built on one shared fact: having studied or trained in the United Kingdom. It turns that common experience into mentoring between generations, professional opportunities and a direct bridge between the two countries. It is in an honest relaunch: the 2026–2030 Strategic Plan follows a diagnosis of near-inactivity, and every action now has an owner, a deadline and an indicator.

## Operating Context

- Membership today happens by WhatsApp (+225 02 02 05 05) or email (inzas@aol.com); the Bureau sends a form, reviews the application, the member pays a fee and receives a membership card (numbering such as UKAN-CI-0042).
- Bilingual: French is the main language, English is complete and equal in content.
- Programme names stay in English in both languages: UKAN Connect, UKAN Mentoring, UKAN Leadership Academy, UKAN Business Network, UKAN Opportunities, UKAN Partnerships, UKAN Impact.
- The site is a static export hosted without a server; it has no forms, accounts or analytics cookies (stated in the privacy policy).

## Capabilities and Constraints

- Stack: Next.js 16 static export in `site/ukan-nextjs/`; texts in `content/fr.ts` and `content/en.ts`; contact facts in `lib/site.ts`.
- Pages: home, the network, the president, president’s message, programmes, news, partners, join, contact, legal notice, privacy.
- Open, not yet provided (shown as « À compléter », never invented): official address, registration number, publication director, membership fee amount, online form link, LinkedIn and Facebook links, Executive Board composition, session calendar, Plan PDF, official photographs.

## Brand Commitments

- **Binding:** the brand charter in `charte/charte-ukan-reglages.md`: UKAN blue #001E58 (70 %), Ivory orange #FF6B01 (20 %, one orange button per screen, text in blue on orange), Ivory green #02743A (10 %), the logo red stays in the logo; Source Serif 4 for titles and IBM Plex Sans for text, never a third typeface; the tricolour rule as the only ornament; blue-tinted shadows; the logo files and their usage rules (short versions under 200 px, white version on dark backgrounds).
- Writing rules: UKAN in capitals without dots; Côte d’Ivoire with its circumflex and curly apostrophe; FCFA amounts with a non-breaking space.
- Tagline from the logo and membership pack: “Building a connected association for leadership, innovation and sustainable development between the United Kingdom and Côte d’Ivoire.”

## Evidence on Hand

- Logos in `UKAN-livrables/UKAN-livrables/02-logos/` and `logos/`.
- Strategic Plan 2026–2030 (`docs/Plan_Strategique_Operationnel UKAN 2026.docx`) and membership pack (`docs/ENGLISH VERSION.docx`, `kit-adhesion/`).
- President Antoine Kemonsei: biography and message (Bournemouth University, tourism and destination management).
- **No photographs yet** (confirmed). No testimonials, member stories, event reports, partner logos or figures of current membership exist: future work must not fabricate any of them. Figures shown are 2030 targets, and must be labelled as targets.

## Product Principles

1. Eligibility first: an alumnus must know within seconds that they can join, and how.
2. Show life, not promises: every visible commitment points to a concrete programme, date or action; empty places say what is coming, never fake it.
3. One clear action per screen: join via WhatsApp or email; everything else supports it.
4. Two countries, one network: the UK–Côte d’Ivoire bridge is the identity, expressed with dignity and without cliché.
5. Honest relaunch: the network is restarting with a plan; the site states targets as targets.

## Accessibility & Inclusion

Mobile-first for visitors arriving from WhatsApp on modest connections; readable at small sizes (charter floor: 11 px legal text); contrast rules from the charter (blue text on orange); full keyboard use and reduced-motion support.
