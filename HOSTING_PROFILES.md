# FISD XC — Web app and API hosting profiles

FISD XC has two **hosting profiles** and two **display states**. Do not confuse them: the Simple / Full workings switch controls UI density, while the hosting profile controls whether real API access exists.

## Hosting profile A — Simple static preview

**Purpose:** review the brand, dashboard interactions and model explanation without provisioning API credentials. This profile uses simulated example records only.

**Host:** GitHub Pages, publishing from `main` / `/docs`. The static build lives in `docs/index.html` with its own `docs/assets/`.

### Deploy

1. Push the repository to GitHub.
2. Open **Settings → Pages** for the repository.
3. Choose **Deploy from a branch**, branch `main`, folder `/docs`.
4. Save and wait for the Pages URL to become available.
5. Confirm the banner and source status say **Static preview / simulation**. The **Connect live** control is disabled intentionally.

The display switch still works: **Simple** is the decision-first view; **Full workings** shows simulated score contributions and the model/data explanation. It never changes simulated records into live chain data. No API key is needed or should be configured for this static host.

## Hosting profile B — Full-stack app + API proxy

**Purpose:** connect real wallet/contract activity to Blockscout Pro REST v2 while keeping the API key server-side.

**Host:** Render Web Service using `render.yaml`. The Node process serves the main application and proxies requests to Blockscout. It binds to `0.0.0.0` using the host-provided `PORT`, as required for a public web service.

### Deploy

1. In Render, create a Blueprint from this repository, or create a Web Service with root directory `/`, build command `npm install` and start command `npm start`.
2. Set the secret `BLOCKSCOUT_PRO_API_KEY` in the Render Environment panel. Do not commit `.env` or embed the key in HTML.
3. Set `BLOCKSCOUT_PRO_API_BASE_URL` to `https://api.blockscout.com` if the blueprint did not set it.
4. Set the health check path to `/api/health`.
5. Deploy, open the generated service URL and confirm `/api/health` reports `configured: true`. The health response does not disclose the key.
6. Connect a public EVM address on a chain permitted by the key, then open a returned transaction in Blockscout Explorer to verify evidence.

### Display states inside the full-stack app

- **Simple:** essentials only: KPIs, impact/timeline, recent transaction summary and recommended next action.
- **Full workings:** score decomposition, raw transaction evidence, provider/source status, endpoint context, methodology and local operator notes.

The view preference is saved locally in the browser. It does not change scoring, data fetching or chain access.

## API surface

- `GET /api/health` — provider configuration status and allowed chain IDs; never returns the key.
- `GET /api/monitor?chainId=1&address=0x...` — address metadata, up to 50 transaction records, and best-effort token-transfer evidence.

## Operational limitations

The included app is an MVP, not a production custody or monitoring service. It uses a rule-based triage score, samples up to 50 transactions, and can poll on an interval. Before production use, add authentication/authorization, persistent user/workspace storage, robust proxy-aware rate limiting, structured logs, alert delivery, automated tests, and deployment-specific monitoring. The Render free tier can spin down after inactivity; for a time-sensitive live demonstration, warm the service and verify its key/chain access beforehand.