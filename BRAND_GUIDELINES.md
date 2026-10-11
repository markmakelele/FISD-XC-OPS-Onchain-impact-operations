# FISD XC — Brand Identity Guidelines

## Canonical direction

The approved product mode is the **Impact Cards** system: one vertically coherent decision journey with responsive, spacious cards. The earlier editorial layout is no longer a separate operating interface. The same card grammar applies across the web app, API-connected dashboard, documentation, screenshots and submission materials.

## Brand mark

- Preserve the stacked `fisd / XC` proportions; do not stretch or redraw the geometry.
- Dark surfaces use the transparent pale-slate mark (`assets/fisd-xc-dark.svg`, `#BDCBD4`).
- Light surfaces use the transparent black mark (`assets/fisd-xc-light.svg`, `#000000`).
- Maintain clear space around the mark and scale proportionally.
- The main UI uses the inline master mark; exported SVG assets serve documents and presentation material.

## Colour foundations

| Token | Value | Purpose |
|---|---|---|
| Dark background | `#08090C` | Main dark surface |
| Dark panel | `#0E1015` | Cards and working surfaces |
| Dark raised panel | `#12151B` | Controls and secondary surfaces |
| Primary dark text | `#F3F4F5` | High-priority copy |
| Muted dark text | `#A3A9B4` | Supporting copy |
| Dark-mode brand slate | `#BDCBD4` | Brand accent on dark |
| Light background | `#F8F8F5` | Main light surface |
| Light panel | `#FFFFFF` | Card face |
| Light text | `#11110F` | Primary copy |
| Light muted text | `#5E5E58` | Supporting copy |
| Positive state | `#82D8B4` | Success/verified state, with text labels |
| Caution state | `#E4C27A` | Warning, with text labels |
| Error state | `#F17C85` | Error, with text labels |

Low-opacity violet, peach and green washes can distinguish card categories. They must not be the only carrier of operational meaning. Do not use the brand slate as an implied safety score.

## Layout and typography

- Maintain one route: **Current Position → Next Best Move → Move Board → Verify Outcome**.
- Use larger type for the primary score and action headline; monospace labels for metadata and evidence states.
- Use `clamp()`, CSS Grid and responsive breakpoints. Cards can change spans; reading order must remain consistent.
- Keep visible keyboard focus and honour reduced-motion preferences.
- Simple prioritises the decision. Full Workings reveals advanced detail without becoming a separate application.

## Interaction and accessibility

Hover/focus explains functions, tap/click selects, and long press opens details on touch devices. Haptics are progressive enhancement only: `navigator.vibrate()` is used when supported, with visual feedback as fallback. Status is always expressed in text as well as colour. Verify contrast on rendered surfaces.

## Product truthfulness

- **Observed:** sourced from a Blockscout response.
- **Inferred:** produced by the FISD rule-based model.
- **Recommended:** a proposed operator action.
- **Verified:** confirmed by a source check or explicit operator review.

Never present simulation as real, a local review marker as an on-chain attestation, or a triage score as a fraud verdict.
