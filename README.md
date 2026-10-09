# FISD XC Ops — Blockscout Pro API MVP

**Product thesis:** turn onchain activity into a next best action. FISD XC monitors a wallet or contract, maps indexed transactions into an explainable time-and-impact field, and keeps every live signal linked to Blockscout Explorer evidence.

## Why this is not another explorer

Blockscout provides the onchain evidence. FISD XC adds an operations layer: event sequencing, a transparent triage score, an explicit next-step recommendation, manual annotations and an inspectable route from signal to transaction. The score is a heuristic, not a financial valuation, fraud verdict or claim of causality.

## Run locally

Requirements: Node.js 18 or newer.

1. Copy `.env.example` to `.env`.
2. Create a Blockscout Pro API key at <https://dev.blockscout.com/> and place it in `.env` as `BLOCKSCOUT_PRO_API_KEY`.
3. Start the app:

   ```bash
   npm start
   ```

4. Open <http://127.0.0.1:4173>.
5. Paste an EVM wallet/contract address, choose a chain, and select **Connect live**.

Demo mode works without a key. All demo data is labelled as simulated. A local server is intentional: the API key remains on the server and is never returned to the browser. Do not commit `.env` or embed a production Pro API key in HTML or a public repository.

## Current live integration

The server uses Blockscout Pro REST v2:

- `GET /{chain_id}/api/v2/addresses/{address}` — address information.
- `GET /{chain_id}/api/v2/addresses/{address}/transactions` — transaction history.
- `GET /{chain_id}/api/v2/addresses/{address}/token-transfers` — supporting token-transfer evidence (best-effort).

The `chain_id` is inserted into the Pro API route and the key is passed server-side as `apikey`. Refreshing is manual by default; optional monitoring polls once every 60 seconds. Server-side rate limiting prevents rapid repeat requests.

The UI offers Ethereum (1), Optimism (10), Gnosis (100), Polygon (137), Arbitrum One (42161), and Base (8453). Access and plan entitlement can vary by chain; check the Blockscout developer portal for the key's current permissions.

## FISD signal model

The 0–100 score combines four visible inputs: transaction recency, native value relative to the observed sample, transaction/contract interaction type, and observed outcome. The score is a transparent triage heuristic. It does not classify a transaction as fraudulent, infer intent, calculate USD impact, or replace operator judgement.

Recommendations are rules-based: inspect failed transactions, verify outsized outflows, reconcile inflows, review contract calls, or compare adjacent activity. All real transaction recommendations can be followed to a Blockscout Explorer record.

## Buildathon demo path

1. Open the app in demo mode and show the impact field, timeline, signal score and recommendation.
2. Open **Trace model** to explain Observe → Score → Relate → Act → Verify.
3. Configure a Pro API key in `.env`; connect a publicly inspectable wallet/contract on a chain allowed by the key.
4. Select one returned transaction and open its Blockscout Explorer link.
5. Explain the selected recommendation and score inputs; add a manual note to show the human-in-the-loop operations layer.
6. Show that no API key is saved in browser storage or included in the repository.

## Sprint submission assets to prepare

- Public GitHub repository with the source and setup instructions.
- Live demo deployment or short demo video.
- A stage write-up describing the user problem, API routes, scoring logic and limitations.
- Showcase post linking the project and demo, tagging Blockscout and Craftora as the current brief requests.

## Current limitations / next improvements

- The present live client samples the first 50 transaction records; pagination and historical comparisons are next work.
- The UI's activity score is heuristic and should be validated against real operator tasks before production use.
- Token-transfer evidence is retrieved but is not yet a separately modelled token-flow graph.
- Polling is interval-based, not push streaming.
- Before public production deployment, add managed authentication, tenant isolation, observability, structured server logs, rate limiting per user and automated tests. The current server is a local MVP proxy, not a production hosting architecture.