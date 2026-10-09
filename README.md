![FISD XC](assets/fisd-xc-light.svg)

# FISD XC / OPS — Onchain Impact Operations

**Product principle:** Blockscout is the evidence layer. FISD XC is the decision layer.

FISD XC turns indexed wallet and contract activity into an explainable timeline, a transparent triage signal, and a next best inspection action. It does not replace Blockscout Explorer; every live recommendation remains traceable to source evidence.

## Two display states

The application includes one persistent FISD identity with two display states.

- **Simple:** focused on key metrics, impact field, recent activity and the recommended next action. It removes score diagnostics, provider details and operator annotation controls from the primary surface.
- **Full workings / Complex:** reveals score components, raw transaction evidence, API/provider context, model methodology and local operator notes. Use it for audit, review and demonstration of how the recommendation was produced.

The view preference is stored in the browser and does not change the underlying records or scoring. Dark/light mode follows the shared tokens in `assets/brand-tokens.css`; the mark switches from slate `#BDCBD4` on `#08090C` to black on `#F8F8F5`.

## Choose a hosting profile

### A. Simple static preview — GitHub Pages

The `docs/` folder is a static, simulation-only preview. Publish from `main` / `/docs` using GitHub Pages. Live connection is intentionally disabled; no key is needed. The Simple / Full workings switch lets judges inspect the model explanation using simulated records.

### B. Full-stack app + API — Render

The root app is served by the Node.js API proxy. Deploy using `render.yaml`, then configure `BLOCKSCOUT_PRO_API_KEY` as a host secret. The server binds to `0.0.0.0` and the host-provided `PORT`. Full instructions: [`HOSTING_PROFILES.md`](HOSTING_PROFILES.md).

## Run locally

Requires Node.js 18 or newer.

1. Copy `.env.example` to `.env`.
2. Add a valid key as `BLOCKSCOUT_PRO_API_KEY`.
3. Run `npm start`.
4. Open `http://127.0.0.1:4173`.
5. Connect a public EVM address on a chain permitted by the key.

Demo/simulation mode remains available without an API key. The key stays on the server and is never intentionally included in HTML, local storage or API responses.

## API routes

- `GET /api/health` — reports whether server-side configuration exists, the provider, and supported chain IDs.
- `GET /api/monitor?chainId=1&address=0x...` — requests address context, recent transactions and best-effort token-transfer evidence.

The MVP supports Ethereum (1), Optimism (10), Gnosis (100), Polygon (137), Arbitrum One (42161), and Base (8453), subject to API key/plan access. The transaction window is sampled, not exhaustive.

## Signal model and limitations

The 0–100 signal is a heuristic based on recency, native-value magnitude relative to the observed sample, interaction type, outcome and direction. It is not a financial valuation, a fraud detector or a claim of intent or causality. Recommendations are rules-based and intended to guide human inspection. Token transfer data is currently supporting evidence rather than a separate token-flow graph.

## Brand and submission files

- [`BRAND_GUIDELINES.md`](BRAND_GUIDELINES.md) — shared identity and accessibility contract.
- [`BRAND_OVERVIEW.html`](BRAND_OVERVIEW.html) — visual brand overview with mode/hosting model.
- [`SUBMISSION_BRIEF.md`](SUBMISSION_BRIEF.md) — submission narrative and system scope.
- [`DEMO_SCRIPT.md`](DEMO_SCRIPT.md) — presentation run of show.
- [`HOSTING_PROFILES.md`](HOSTING_PROFILES.md) — static and full-stack hosting instructions.

## Production boundary

This package is a buildathon MVP. Production use would require identity/access control, tenancy isolation, persistent server-side data, proxy-aware throttling, alert delivery, automated tests and operational monitoring. Verify a real API response and Explorer link before describing any run as live.