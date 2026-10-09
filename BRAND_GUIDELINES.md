![FISD XC](assets/fisd-xc-light.svg)

# FISD XC — Shared Brand ID

## Brand principle

**Quiet precision. Visible relationships. Verifiable evidence.** The brand mark identifies the product; interface colour explains the operating context; semantic state colours communicate connection, warning and error. Never make the brand colour itself a safety or risk verdict.

## Approved marks

| Context | Mark | Canvas |
|---|---|---|
| Dark mode | Slate `#BDCBD4` | Night `#08090C` |
| Light mode | Ink `#000000` | Paper `#F8F8F5` |
| Compact UI | Compact mark in `assets/` | Use the variant matching the canvas |

Use the supplied transparent SVGs. Do not rebuild the mark with a substitute font, distort its proportions, recolour it arbitrarily, or place the slate expression on white. The stacked lockup is for overview and brand pages; compact assets are for constrained headers.

## Shared colour tokens

- Brand slate: `#BDCBD4`
- Ink: `#000000`
- Night: `#08090C`
- Paper: `#F8F8F5`
- Dark surface: `#0E1015`
- Light surface: `#FFFFFF`
- Dark primary text: `#F3F4F5`
- Light primary text: `#11110F`
- Dark muted text: `#A3A9B4`
- Light muted text: `#5E5E58`

The shared CSS contract is `assets/brand-tokens.css`; avoid duplicating theme palettes inside individual files. Interface-only tokens can extend the shared contract, but the brand colours above remain canonical.

## Typography and interface

Use a legible system sans-serif for prose and a monospace face for addresses, hashes, endpoint names and numeric evidence. Body copy should be normally tracked; wide letter spacing is reserved for short labels. Use restrained 4–6 px corners, thin rules and ample negative space. Keep data tables quiet and scannable.

## Two operating states

- **Simple:** essential metrics, impact field, recent activity and next best action.
- **Full workings / Complex:** transaction table, data provenance, API status, score-component breakdown, model methodology and local operator annotations.

These are display states, not separate data-integrity levels. Both must label simulation and live data truthfully.

## Accessibility

Target WCAG AA: 4.5:1 contrast for normal text; 3:1 for qualifying large text and essential graphical components. Keep visible keyboard focus, semantic button labels and touch-equivalent inspection. State must never be represented by colour alone. Test the actual rendered page in both themes.

## Voice and evidence

Separate observed onchain facts, computed heuristic scores, rules-based recommendations and operator-authored notes. The signal is not a fraud detector, monetary impact estimate, or proof of intent or causality. Link live recommendations back to Blockscout Explorer evidence.

## Attribution

FISD XC is the product identity. Blockscout is the data provider and Explorer verification destination. Do not imply official endorsement by Blockscout.