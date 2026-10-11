# FISD XC — Brand Identity Guidelines

## Canonical direction

The approved product mode is the **Impact Cards** system: one vertically coherent decision journey with responsive, spacious cards. The earlier editorial layout is no longer a separate operating interface. The same card grammar must hold across the website, API-connected dashboard, documentation, screenshots and submission materials.

## Brand mark

- Preserve the stacked `fisd / XC` proportions; do not stretch or redraw the geometry.
- Dark surfaces use the transparent pale slate mark (`assets/fisd-xc-dark.svg`, `#BDCBD4`).
- Light surfaces use the transparent black mark (`assets/fisd-xc-light.svg`, `#000000`).
- Keep clear space around the mark and scale proportionally.
- Use the inline master mark in the main UI; use the exported SVGs for presentations and product surfaces.

## Colour foundations

| Token | Value | Purpose |
|---|---|---|
| Dark background | `#08090C` | Main dark surface |
| Dark panel | `#0E1015` | Cards and working surfaces |
| Dark raised panel | `#12151B` | Controls and secondary surfaces |
| Primary dark text | `#F3F4F5` | High-priority text |
| Muted dark text | `#A3A9B4` | Supporting text |
| Dark-mode brand slate | `#BDCBD4` | Brand accent on dark |
| Light background | `#F8F8F5` | Main light surface |
| Light panel | `#FFFFFF` | Card face |
| Light text | `#11110F` | Primary copy |
| Light muted text | `#5E5E58` | Supporting copy |
| Positive state | `#82D8B4` | Success/verified states, with text labels |
| Caution state | `#E4C27A` | Warnings, with text labels |
| Error state | `#F17C85` | Errors, with text labels |

Low-opacity violet, peach and green washes can differentiate card categories, but cannot be the only carrier of operational meaning. Never use the brand slate as an implied safety score.

## Layout and typography

- Build around one decision flow: **Current Position → Next Best Move → Move Board → Verify Outcome**.
- Use large type for the main score and action headline; small monospace labels for metadata and evidence states.
- Use `clamp()`, CSS Grid, and responsive breakpoints. Cards may change spans, but the reading order must stay consistent.
- Maintain visible focus indicators and support reduced-motion preferences.
- Keep the main action dominant; advanced details should appear through Full Workings and contextual inspection, not compete in the first view.

## Interaction and accessibility

Hover/focus explains functions, tap/click selects, and long press opens details on touch devices. Haptics are optional progressive enhancement: `navigator.vibrate()` is used only when supported, with visible state changes as the fallback. Status is always expressed in text as well as colour. Target WCAG AA contrast for text and essential graphics.

## Product truthfulness

- Observed = sourced from Blockscout response.
- Inferred = produced by the FISD rule-based model.
- Recommended = a proposed operator action.
- Verified = confirmed by a source check or explicit operator review.

Never present simulated events as real. Never present a local review marker as an on-chain attestation or a triage score as a fraud verdict.