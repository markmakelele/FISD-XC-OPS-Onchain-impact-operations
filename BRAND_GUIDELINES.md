![FISD XC](assets/fisd-xc-light.svg)

# FISD XC — Brand ID guidelines

## Brand idea
**Quiet precision. Visible relationships. Verifiable evidence.** The mark is the identity; the dashboard is the instrument. Keep the visual language restrained so onchain evidence, state changes and recommendations remain the focus.

## Primary mark
The supplied stacked composition—lowercase `fisd` above geometric `XC`, with its baseline segments—is the primary identity. Use the provided SVG assets rather than recreating the mark with a substitute typeface.

## Approved expressions

| Context | Mark | Background |
|---|---|---|
| Dark mode | Slate `#BDCBD4` | Near-black `#08090C` |
| Light mode | Ink `#000000` | Warm white `#F8F8F5` |
| Compact dark | `fisd-xc-compact-dark.svg` | Dark high-contrast surface |
| Compact light | `fisd-xc-compact-light.svg` | Light high-contrast surface |

Never place the slate mark on white; contrast is too low. Never place the black mark on a near-black surface.

## Palette
- **Brand slate:** `#BDCBD4` — identity accent on dark surfaces.
- **Ink:** `#000000` — primary identity in light mode.
- **Night:** `#08090C` — dark canvas.
- **Paper:** `#F8F8F5` — light canvas.
- **Surface:** `#0E1015` dark / `#FFFFFF` light.
- **Muted copy:** `#A3A9B4` dark / `#5E5E58` light.
- **Rules:** `#292E38` dark / `#C9C9C3` light.
- **Semantic state:** green, amber and red communicate operational state only. Brand accent does not indicate that a transaction is safe or dangerous.

The shared tokens live in [assets/brand-tokens.css](assets/brand-tokens.css).

## Typography and layout
Use a neutral, highly legible sans-serif for prose and a monospace face for addresses, hashes, labels and numeric evidence. Prefer clear hierarchy over letter-spaced body text. Keep card corners restrained (about 4–6 px), dividers thin, and negative space intact. The impact field may be expressive; transaction tables should remain quiet and scannable.

## Mark usage
- Preserve proportions and letter relationships.
- Do not rotate, distort, outline, italicize or arbitrarily recolour the mark.
- Keep the complete stacked mark for overviews, write-ups and brand covers.
- Use a compact variant only when space genuinely constrains the full lockup.
- Keep clear space around the mark roughly equal to the height of the lowercase `i` stem.
- At very small sizes, use the compact variant instead of shrinking the complete composition until details disappear.

## Dark/light behavior
The application changes canvas, surfaces, type, dividers, semantic states and mark in one theme action. Respect the selected theme between reloads. The brand remains stable; the context changes.

## Accessibility
Target WCAG AA contrast for body text (4.5:1) and at least 3:1 for qualifying large text and essential UI graphics. Provide visible keyboard focus. Do not communicate connection or risk state by colour alone; pair colour with text or another visual indicator. Verify the rendered interface rather than relying only on token values.

## Voice and evidence
Distinguish observed facts, computed heuristics, recommendations and manual annotations. Avoid claims that the heuristic proves fraud, intent, causality or monetary impact.

## Attribution
FISD XC is the product identity. Blockscout is the onchain data provider and Explorer verification destination. Do not imply official endorsement or ownership by Blockscout.
