![FISD XC mark](assets/fisd-xc-light.svg)

# FISD XC / OPS — Onchain Impact Operations

**Product principle: Blockscout is the evidence layer. FISD XC is the decision layer.**

FISD XC turns Blockscout-indexed wallet and contract activity into an explainable triage signal, a recommended investigative move, and an evidence-linked verification path. The selected **Impact Cards** composition is the single canonical interface across desktop, tablet, and mobile. It replaces the previous split-focus layouts.

## The interface model

The screen follows one decision sequence:

1. **Current Position** — wallet/contract context, sample metrics, impact field and temporal trace.
2. **Next Best Move** — the primary rule-based investigative recommendation, tied to selected transaction evidence.
3. **Move Board** — recommended, compare, and monitor actions, each with an expected effect. The interface does not execute blockchain transactions.
4. **Verify Outcome** — direct Explorer evidence, transaction details and a local operator review marker. A review marker is not an on-chain attestation.

The mobile reference's large cards, measured negative space and progressive details are used as the default design language. The earlier editorial and line-work studies are retained only as references; they are no longer separate product interfaces.

## Simple and Full Workings

- **Simple** focuses on the current signal, recommended move, alternatives and evidence.
- **Full Workings** reveals the scoring breakdown, method, provider/API status and operator notes.
- Both views use the same records, score logic, selected transaction, theme and monitoring state.

## Interaction model

- Hover and keyboard focus explain an item's function and next paired function.
- Tap/click highlights the selection and updates connected panels.
- Long press opens contextual inspection on touch devices.
- Haptic feedback uses the browser Vibration API where available; selected-state visuals are the fallback.
- Workspace state synchronises across open tabs on the same browser origin using BroadcastChannel and localStorage. This is not cross-device synchronisation.

## Run locally

Requires Node.js 18 or newer.

1. Copy `.env.example` to `.env`.
2. Set `BLOCKSCOUT_PRO_API_KEY` using a key from <https://dev.blockscout.com/>.
3. Run `npm start`.
4. Open <http://127.0.0.1:4173>.
5. Select an EVM chain, enter a public wallet/contract address, and choose **Connect live**.

Demo mode works without a key and explicitly labels invented transactions as simulated. The server keeps the Pro API key outside browser code.

## Blockscout API surface

- `GET /api/health` reports provider configuration without returning the API key.
- `GET /api/monitor?chainId=1&address=0x...` requests address information, up to 50 transaction records and best-effort token-transfer evidence from Blockscout Pro REST v2.

Supported chain IDs in this MVP: Ethereum (1), Optimism (10), Gnosis (100), Polygon (137), Arbitrum One (42161), and Base (8453), subject to key entitlements.

## Signal model and limitations

The 0–100 label represents an explainable triage heuristic using recency, native-value magnitude relative to the loaded sample, interaction type, observed outcome and direction. It is not a financial valuation, fraud detector, or claim of intent/causality. Recommendations are rules-based and support human review. The current integration samples up to 50 transactions; token transfers are contextual evidence rather than a complete token-flow graph. Monitoring uses polling rather than streaming.

## Files

- `index.html` — canonical card-based product UI and full-stack entry point.
- `info_cards_sorting_data_points.html` — chosen named interface; same canonical UI.
- `where value selected inch into a blog preface.html` — compatibility name, now aligned to the chosen card system.
- `docs/index.html` — static, simulation-only preview for GitHub Pages.
- `server.js` — server-side Blockscout API proxy and static file host.
- `assets/` — transparent brand mark variants, favicon and colour tokens.
- `BRAND_GUIDELINES.md`, `DECISION_BOARD_UX.md`, `HOSTING_PROFILES.md`, `SUBMISSION_BRIEF.md`, `DEMO_SCRIPT.md` — governing design, product and submission documentation.

## Security / production boundary

Never commit `.env` or place the API key in HTML. Real live mode remains unverified until tested with a valid key and a permitted chain/address. A production rollout should add authentication, workspace isolation, persistent backend state, per-user rate limits, observability, alert delivery and automated tests.