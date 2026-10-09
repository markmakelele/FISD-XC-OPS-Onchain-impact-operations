'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const ROOT = __dirname;
function loadEnv(file) {
  try {
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    for (const line of lines) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
      if (m && !Object.prototype.hasOwnProperty.call(process.env, m[1])) {
        process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, '$2');
      }
    }
  } catch (_) {}
}
loadEnv(path.join(ROOT, '.env'));
const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || '127.0.0.1';
const API_KEY = process.env.BLOCKSCOUT_PRO_API_KEY || '';
const API_BASE = (process.env.BLOCKSCOUT_PRO_API_BASE_URL || 'https://api.blockscout.com').replace(/\/$/, '');
const ALLOWED_CHAINS = new Set(['1','10','100','137','42161','8453']);
const requestTimes = new Map();
const MIME = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon','.md':'text/markdown; charset=utf-8'};

function send(res, status, data, contentType='application/json; charset=utf-8') {
  res.writeHead(status, {
    'Content-Type': contentType,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
    'Content-Security-Policy': "default-src 'self' https: data: blob:; connect-src 'self' https://api.blockscout.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; frame-ancestors 'none'"
  });
  res.end(contentType.startsWith('application/json') ? JSON.stringify(data) : data);
}
function clientIp(req) { return (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'local').toString().split(',')[0].trim(); }
function jsonError(res, status, error, note) { send(res, status, {error, note}); }
async function apiGet(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, {headers:{Accept:'application/json'}, signal:controller.signal});
    const text = await response.text();
    let body;
    try { body = JSON.parse(text); } catch { body = {message:text.slice(0,350)}; }
    if (!response.ok) {
      const message = body?.message || body?.error || `Blockscout returned HTTP ${response.status}`;
      const e = new Error(String(message)); e.status = response.status; throw e;
    }
    return body;
  } finally { clearTimeout(timer); }
}
function cleanAddress(s) { return /^0x[a-fA-F0-9]{40}$/.test(s || ''); }
async function monitor(req, res, u) {
  if (!API_KEY) return jsonError(res, 503, 'Blockscout Pro API key is not configured on the server.', 'Set BLOCKSCOUT_PRO_API_KEY in .env. Never place a production key in client-side HTML.');
  const chainId = u.searchParams.get('chainId') || '1';
  const address = u.searchParams.get('address') || '';
  if (!ALLOWED_CHAINS.has(chainId)) return jsonError(res, 400, 'Unsupported chain ID for this MVP.', 'Choose one of the listed chain IDs in the UI.');
  if (!cleanAddress(address)) return jsonError(res, 400, 'Invalid address.', 'Expected a 0x-prefixed 40-character EVM address.');
  const ip = clientIp(req), now = Date.now(), previous = requestTimes.get(ip) || 0;
  if (now - previous < 8000) return jsonError(res, 429, 'Refresh limited to one request per 8 seconds.', 'The UI monitor uses a 60-second interval to respect API rate limits.');
  requestTimes.set(ip, now);
  const apikey = encodeURIComponent(API_KEY);
  const base = `${API_BASE}/${chainId}/api/v2/addresses/${address}`;
  try {
    const [account, txPage, transferPage] = await Promise.all([
      apiGet(`${base}?apikey=${apikey}`),
      apiGet(`${base}/transactions?apikey=${apikey}`),
      apiGet(`${base}/token-transfers?apikey=${apikey}`).catch(e => ({items:[], warning:String(e.message || e)}))
    ]);
    const transactions = Array.isArray(txPage) ? txPage : (txPage.items || txPage.result || []);
    const tokenTransfers = Array.isArray(transferPage) ? transferPage : (transferPage.items || transferPage.result || []);
    send(res, 200, {
      provider: 'Blockscout Pro API',
      chainId,
      address,
      fetchedAt: new Date().toISOString(),
      account,
      transactions: transactions.slice(0, 50),
      nextPageParams: txPage.next_page_params || null,
      tokenTransfers: tokenTransfers.slice(0, 100),
      warnings: transferPage.warning ? [transferPage.warning] : []
    });
  } catch (e) {
    const status = e.status === 401 || e.status === 403 ? 502 : (e.status && e.status < 500 ? 400 : 502);
    jsonError(res, status, `Blockscout request failed: ${String(e.message || e).slice(0,240)}`, status === 502 ? 'Check API key permissions, supported-chain access and Pro API availability.' : 'Confirm the address and selected chain.');
  }
}
function serveStatic(req, res, pathname) {
  let decoded;
  try { decoded = decodeURIComponent(pathname); } catch { return jsonError(res, 400, 'Invalid URL path.'); }
  if (decoded === '/') decoded = '/index.html';
  const allowedStatic = new Set(['/index.html','/BRAND_OVERVIEW.html','/BRAND_GUIDELINES.md','/HOSTING_PROFILES.md','/README.md','/SUBMISSION_BRIEF.md','/DEMO_SCRIPT.md','/FISD_Futuristic_Impact_Schedule_Dashboard.html','/FISD_XC_Blockscout_MVP.html','/FISD_XC_Clasped_Impact_Schedule_Dashboard.html','/FISD_XC_Operational_Live_Source_Dashboard.html','/FISD_XC_Ops_Activated_High_Visibility.html','/FISD_XC_Responsive_Explained_Dashboard.html','/fisd-xc-dashboard.html','/impact-schedule-sequential.html','/assets/brand-tokens.css','/assets/fisd-xc-dark.svg','/assets/fisd-xc-light.svg','/assets/fisd-xc-compact.svg','/assets/fisd-xc-compact-dark.svg','/assets/fisd-xc-compact-light.svg','/assets/favicon.svg']);
  if (!allowedStatic.has(decoded)) return jsonError(res, 404, 'Not found.');
  const full = path.resolve(ROOT, '.' + decoded);
  if (!full.startsWith(ROOT + path.sep)) return jsonError(res, 403, 'Forbidden.');
  fs.readFile(full, (err, data) => {
    if (err) return jsonError(res, err.code === 'ENOENT' ? 404 : 500, err.code === 'ENOENT' ? 'Not found.' : 'Unable to read file.');
    const ext = path.extname(full).toLowerCase();
    send(res, 200, data, MIME[ext] || 'application/octet-stream');
  });
}
const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  if (req.method !== 'GET' && req.method !== 'HEAD') return jsonError(res, 405, 'Method not allowed.');
  if (u.pathname === '/api/health') return send(res, 200, {configured:!!API_KEY, provider:'Blockscout Pro API', apiKeyStoredServerSide:true, chainIds:[...ALLOWED_CHAINS]});
  if (u.pathname === '/api/monitor') return monitor(req, res, u);
  if (u.pathname.startsWith('/api/')) return jsonError(res, 404, 'API route not found.');
  serveStatic(req, res, u.pathname);
});
server.listen(PORT, HOST, () => {
  console.log(`FISD XC Ops listening on ${HOST}:${PORT}`);
  console.log(`Blockscout Pro API key configured: ${API_KEY ? 'yes' : 'no (demo mode still works)'}`);
});
process.on('SIGINT', () => server.close(() => process.exit(0)));
process.on('SIGTERM', () => server.close(() => process.exit(0)));