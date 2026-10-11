![FISD XC mark](assets/fisd-xc-light.svg)

# FISD XC / OPS — Onchain Impact Operations

**Product principle: Blockscout is the evidence layer. FISD XC is the decision layer.**

FISD XC turns Blockscout-indexed wallet and contract activity into an explainable triage signal, a recommended investigative move, and an evidence-linked verification path. The approved **Impact Cards** composition is the single canonical interface across desktop, tablet, and mobile. It replaces the previous split-focus layouts.

## The one-screen model

1. **Current Position** — wallet/contract context, sample metrics, impact field and temporal trace.
2. **Next Best Move** — the primary rules-based recommendation tied to the selected transaction.
3. **Move Board** — recommended inspection, compare-neighbour activity, and follow-up monitoring. Each card previews its expected effect. The board does not execute blockchain transactions.
4. **Verify Outcome** — source transaction, linked Explorer evidence, transaction details and a local operator review marker. A review marker is not an on-chain attestation.

## Simple and Full Workings

- **Simple** focuses on the current signal, recommended move, alternatives and evidence.
- **Full Workings** reveals score components, methodology, provider/API provenance and operator notes.
- Both views use the same records, score logic, selected transaction, theme and monitoring state.

## Interaction model

Hover and keyboard focus explain an item's function and next paired function. Tap/click selects and highlights the item. Long press opens contextual inspection on touch devices. Haptics use the browser Vibration API where available; visible selection remains the fallback. Workspace state synchronises across open tabs on the same browser origin with BroadcastChannel and localStorage; it is not cross-device synchronisation.

## Run locally

Requires Node.js 18 or newer.

1. Copy `.env.example` to `.env`.
2. Set `BLOCKSCOUT_PRO_API_KEY` using a key from https://dev.blockscout.com/.
3. Run `npm start`.
4. Open http://127.0.0.1:4173.
5. Select an EVM chain, enter a public wallet/contract address, and choose **Connect live**.

Demo mode works without a key and labels invented records as simulated. The API key is held server-side, never in browser storage or client-side HTML.

## Blockscout API surface

- `GET /api/health` reports provider configuration without returning the secret.
- `GET /api/monitor?chainId=1&address=0x...` requests address context, up to 50 transactions and best-effort token-transfer evidence from Blockscout Pro REST v2.

Supported IDs in this MVP: Ethereum (1), Optimism (10), Gnosis (100), Polygon (137), Arbitrum One (42161), and Base (8453), subject to API key entitlements.

## Score and limitations

The 0–100 label is an explainable triage heuristic using recency, native-value magnitude relative to the loaded sample, interaction type, observed outcome and direction. It is not a financial valuation, fraud detector, or proof of intent/causality. Recommendations are rules-based and support human inspection. The integration samples up to 50 transactions; token transfers are supporting context rather than a full token-flow graph. Monitoring uses polling, not push streaming.

## Canonical project files

- `index.html` — canonical responsive card-mode product UI.
- `info_cards_sorting_data_points.html` — chosen interface filename; same UI and logic.
- `where value selected inch into a blog preface.html` — compatibility name, now aligned to the same card mode.
- `docs/index.html` — static, simulation-only preview for GitHub Pages.
- `server.js` — server-side Blockscout API proxy and static file host.
- `assets/` — transparent brand mark variants, favicon and colour tokens.
- `BRAND_GUIDELINES.md`, `DECISION_BOARD_UX.md`, `HOSTING_PROFILES.md`, `SUBMISSION_BRIEF.md`, `DEMO_SCRIPT.md` — brand, UX and submission documentation.

## Security / production boundary

Never commit `.env` or embed the API key in HTML. Live mode must be tested with a valid key and a permitted address before it is presented as live. A production rollout still needs authentication, workspace isolation, durable server-side state, per-user rate limits, alert delivery, observability and automated tests.
