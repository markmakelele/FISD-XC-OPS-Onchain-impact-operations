# FISD XC — Onchain Impact Operations

FISD XC is an onchain operations MVP that turns transaction activity into an explainable triage signal and a next best action. Blockscout provides the evidence; FISD XC adds event sequencing, a transparent heuristic score, recommendations, notes, and a traceable path back to Explorer records.

## Project status

This repository is being initialized. The full application source and operational setup should be added from the complete MVP package generated in ChatGPT: `FISD_XC_Blockscout_MVP.zip`.

## Intended stack

- Browser UI: `index.html`
- Local API proxy: `server.js`
- Node.js 18+
- Blockscout Pro API v2

## Security

Never commit `.env` or expose `BLOCKSCOUT_PRO_API_KEY` in client-side code. Live mode requires a configured server-side key and an address on a supported chain.

## Current repository bootstrap

The application files in this initial repository are bootstrap placeholders, not the full tested MVP. Replace them with the corresponding files from the complete package before treating the repo as deployable.
