# FISD XC — Onchain Impact Operations

FISD XC turns onchain activity into an explainable triage signal and a next best action. Blockscout provides the evidence; FISD XC adds sequencing, an explainable signal score, rules-based recommendations, local operator notes, and a verifiable path back to Explorer records.

## Quick start

Requirements: Node.js 18 or newer.

1. Clone this repository.
2. Copy `.env.example` to `.env`.
3. Put your Blockscout Pro key in `BLOCKSCOUT_PRO_API_KEY`.
4. Run `npm start`.
5. Open http://127.0.0.1:4173.

The dashboard works in **simulation mode** without a key. Simulation records are labelled and are not real transactions. Live mode connects through the local Node server, keeping the API key off the client.

## Main files

- `index.html` — primary FISD XC dashboard with Blockscout connection UI, impact/timeline visualization, transaction evidence, recommendation panel, model trace and local operator notes.
- `server.js` — local API proxy for address metadata, transaction history, and best-effort token-transfer evidence.
- `FISD_XC_Blockscout_MVP.html` — standalone UI reference. It calls `/api/monitor` for live data and therefore still needs the server for API-backed operation.
- `impact-schedule-sequential.html` — separate visual prototype preserving the earlier impact schedule concept.
- `SUBMISSION_BRIEF.md` and `DEMO_SCRIPT.md` — submission positioning and demonstration walkthrough.

## Supported chain IDs

The current server allows Ethereum (1), Optimism (10), Gnosis (100), Polygon (137), Arbitrum One (42161), and Base (8453). API permissions and chain access depend on the Blockscout Pro plan/key.

## API routes

- `GET /api/health` — reports provider and key configuration status without returning the secret.
- `GET /api/monitor?chainId=1&address=0x...` — validates address/chain, requests account metadata and transactions, and attempts to load token transfers.

The server-side API key is sent to Blockscout as `apikey`; it is never intentionally written into the browser UI. The server throttles repeated requests from the same IP and applies a request timeout.

## FISD signal model

The score is a transparent 0–100 triage heuristic based on recency, native-value magnitude relative to the observed sample, interaction type, and transaction outcome. It is not a monetary valuation, fraud verdict, or inference of intent. Recommendations are rules-based and intended to help an operator choose what to inspect next.

## Demo path

1. Open the dashboard in simulation mode.
2. Inspect the impact/timeline visualization and a transaction recommendation.
3. Open **Trace model** to explain Observe → Score → Relate → Act → Verify.
4. Configure the server key and connect a public wallet/contract on an allowed chain.
5. Select a live transaction and verify its Explorer record.
6. Add a local note to demonstrate human-in-the-loop operations.

## Security and limitations

- Do not commit `.env` or embed a Pro API key in HTML.
- Live API access has not been verified in this repository because a real key was not supplied for testing.
- The client currently samples the first 50 transaction records; pagination and historical comparisons are future work.
- Token transfers are supporting evidence, not yet a separately modelled token-flow graph.
- Polling is interval-based; this is not a push-streaming system.
- The current server is a local MVP proxy. Public production deployment needs authentication, tenant isolation, persistent storage, observability, stronger rate limiting, automated tests and deployment-specific network configuration.
