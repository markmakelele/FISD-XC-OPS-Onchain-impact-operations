![FISD XC](assets/fisd-xc-light.svg)

# FISD XC / OPS
**Onchain impact operations.** An evidence-first triage layer that turns Blockscout-indexed wallet and contract activity into an explainable timeline, a recommended next inspection action, and a verifiable route back to the source transaction.

> **Product principle:** Blockscout is the evidence layer. FISD XC is the decision layer.

## Brand identity
FISD XC uses one consistent identity in two high-contrast expressions: slate-blue `#BDCBD4` on near-black `#08090C`, and black `#000000` on warm white `#F8F8F5`. Brand colour identifies the product; green, amber and red are reserved for operational states. See [Brand ID guidelines](BRAND_GUIDELINES.md) and [shared CSS tokens](assets/brand-tokens.css).

## Run locally
Requirements: Node.js 18 or newer.

1. Copy `.env.example` to `.env`.
2. Create a Blockscout Pro API key at <https://dev.blockscout.com/> and set `BLOCKSCOUT_PRO_API_KEY` in `.env`.
3. Run `npm start`.
4. Open <http://127.0.0.1:4173>.
5. Enter a public EVM wallet or contract address, choose a chain, and select **Connect live**.

Demo mode works without a key. Simulated records are labelled as simulation. The local server keeps the key off the client. Never commit `.env` or embed a production key in HTML.

## Core files
- `index.html` — primary responsive dashboard.
- `server.js` — local Blockscout Pro API proxy with chain/address validation and request throttling.
- `assets/fisd-xc-dark.svg` — slate logo for dark surfaces.
- `assets/fisd-xc-light.svg` — black logo for light surfaces.
- `assets/fisd-xc-compact-dark.svg` and `assets/fisd-xc-compact-light.svg` — compact high-contrast variants.
- `assets/brand-tokens.css` — shared semantic palette.
- `BRAND_GUIDELINES.md` — logo, palette, typography, contrast and voice rules.
- `SUBMISSION_BRIEF.md` and `DEMO_SCRIPT.md` — submission narrative and run-through.
- `FISD_XC_Operational_Live_Source_Dashboard.html` and `impact-schedule-sequential.html` — earlier visual studies, updated to the same brand system.

## Live integration
The server uses Blockscout Pro REST v2 for address information, transaction history, and best-effort token-transfer evidence. Supported chain IDs in this MVP are Ethereum (1), Optimism (10), Gnosis (100), Polygon (137), Arbitrum One (42161), and Base (8453), subject to API key permissions and plan access.

## Operating model
**Observe → Score → Relate → Act → Verify.** The 0–100 score is an explainable triage heuristic based on recency, sampled native-value magnitude, interaction type, direction and observed outcome. It is not a financial valuation, fraud verdict or inference of intent. Every live recommendation should be checked against the source transaction in Blockscout Explorer.

## Demo path
1. Open the dashboard in clearly labelled simulation mode.
2. Use **Trace model** to explain how observation becomes an action.
3. Configure a server-side key and connect an address on an allowed chain.
4. Select a returned transaction and open its Explorer record.
5. Explain the visible score inputs and recommendation.
6. Add a manual note and show how it is distinguished from observed onchain evidence.

## Limitations
The current live client samples up to 50 records and uses interval polling rather than push streaming. Token transfers are supporting evidence, not yet a dedicated token-flow graph. The score is an initial heuristic and requires validation with real operator tasks. Public production deployment needs authentication, tenant isolation, persistence, observability, automated tests and deployment-specific rate limiting.
