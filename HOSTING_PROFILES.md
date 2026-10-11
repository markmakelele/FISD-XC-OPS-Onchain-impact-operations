# FISD XC — Hosting Profiles

The selected card interface is canonical in all deployment profiles. **Simple / Full Workings changes visible detail; static / full-stack changes data capability.**

## Profile A — Static preview (GitHub Pages)

Use `docs/` as the Pages publish directory. `docs/index.html` is the same card UI with `data-host-mode="static"`; it permanently labels the dataset as simulation and disables the live connection button. This profile is suitable for design review, user testing and an MVP walkthrough, but does not connect to Blockscout.

### Deploy

1. Push the repository.
2. Open Settings → Pages.
3. Choose deploy from branch `main`, folder `/docs`.
4. Verify the banner/state explicitly identifies the demo as simulated.

## Profile B — Full-stack web app + API proxy (Render)

The included Node.js server serves the card app and proxies requests to Blockscout Pro REST v2. The API key stays server-side.

### Deploy

1. Create a Render Blueprint using `render.yaml` or create a Node web service with `npm start`.
2. Configure `BLOCKSCOUT_PRO_API_KEY` as a hosting secret; do not commit `.env`.
3. Set/confirm `BLOCKSCOUT_PRO_API_BASE_URL=https://api.blockscout.com`.
4. Use `/api/health` for the service health check.
5. Confirm health reports `configured: true`, then connect a supported public address.
6. Select a live transaction and verify the linked Blockscout Explorer record.

## API surface and limits

- `GET /api/health` returns configuration status and supported chain IDs without disclosing the API key.
- `GET /api/monitor?chainId=1&address=0x...` returns address context, up to 50 transactions and best-effort token-transfer records.
- Supported IDs: Ethereum (1), Optimism (10), Gnosis (100), Polygon (137), Arbitrum One (42161), Base (8453), subject to key entitlements.
- Polling is 60-second interval, not a push stream. Token transfers are supporting evidence, not a full flow graph.

Public production needs authentication, multi-user isolation, durable server-side workspaces, tighter per-user rate limits, alerting, logs, monitoring, and automated tests.