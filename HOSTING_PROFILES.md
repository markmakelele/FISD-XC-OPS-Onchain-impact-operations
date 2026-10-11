# FISD XC — Hosting Profiles

The selected Impact Cards interface is canonical across deployment profiles. **Simple / Full Workings changes the visible detail; static / full-stack changes the data capability.**

## Profile A — Static preview (GitHub Pages)

Use `docs/` as the Pages publish directory. `docs/index.html` has the same visual system and `data-host-mode="static"`; it labels the dataset as simulated and disables live connection. This is for design review, usability testing and demo walkthroughs, not live blockchain monitoring.

1. Push the repository.
2. Open Settings → Pages.
3. Publish branch `main`, folder `/docs`.
4. Verify the UI explicitly labels the records as simulated.

## Profile B — Full-stack app + API proxy (Render)

The Node.js server serves the dashboard and proxies requests to Blockscout Pro REST v2. The API key remains server-side.

1. Create a Render Blueprint from `render.yaml`, or create a Node web service using `npm start`.
2. Configure `BLOCKSCOUT_PRO_API_KEY` as a hosting secret. Do not commit `.env`.
3. Confirm `BLOCKSCOUT_PRO_API_BASE_URL=https://api.blockscout.com`.
4. Use `/api/health` as the health check.
5. Confirm health returns `configured: true`, then connect an address on a permitted chain.
6. Select a transaction and validate its link in Blockscout Explorer.

## API surface and limitations

- `GET /api/health` reports configuration without exposing the secret.
- `GET /api/monitor?chainId=1&address=0x...` returns address context, up to 50 transactions, and best-effort token-transfer records.
- Supported IDs: Ethereum (1), Optimism (10), Gnosis (100), Polygon (137), Arbitrum One (42161), and Base (8453), subject to API access.
- Polling is 60-second interval, not a push stream. Token transfers are context, not a full token-flow graph.

Public production needs authentication, multi-user isolation, durable state, per-user rate limits, alerting, logs, monitoring and automated tests.
