# FISD XC — Onchain Impact Operations

FISD XC turns onchain activity into an explainable triage signal and a next best action. Blockscout provides the evidence; FISD XC adds event sequencing, a transparent heuristic score, recommendations, local annotations, and a traceable route back to Explorer records.

## Repository status

This repository is being initialized. The complete runnable MVP package is available in the ChatGPT conversation as **FISD_XC_Blockscout_MVP.zip**. The current `index.html` and `server.js` are bootstrap placeholders, not the full MVP. Replace them with the matching files from that package before treating this repository as runnable.

## Intended stack

- Browser dashboard: `index.html`
- Local API proxy: `server.js`
- Node.js 18+
- Blockscout Pro REST v2

## Setup (after replacing bootstrap files)

1. Install Node.js 18+.
2. Copy `.env.example` to `.env`.
3. Set `BLOCKSCOUT_PRO_API_KEY` in `.env`.
4. Run `npm start`.
5. Open `http://127.0.0.1:4173`.

## Security

Never commit `.env` or expose `BLOCKSCOUT_PRO_API_KEY` in client-side code. Live access depends on API key permissions and supported-chain access.

## Product model

**Observe → Score → Relate → Act → Verify**

The impact score is a triage heuristic, not a financial valuation or fraud verdict. Live recommendations must remain tied to verifiable Blockscout evidence.
