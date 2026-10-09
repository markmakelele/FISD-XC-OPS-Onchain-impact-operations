// FISD XC Ops server
// See the downloadable MVP package in ChatGPT for the full source and setup.
// Do not store API keys in this file. Configure BLOCKSCOUT_PRO_API_KEY via environment.
const http = require('node:http');
const server = http.createServer((req,res)=>{res.writeHead(503,{'Content-Type':'text/plain'});res.end('FISD XC API is not configured. Install the full MVP package and configure BLOCKSCOUT_PRO_API_KEY.');});
server.listen(process.env.PORT||4173,'127.0.0.1',()=>console.log('FISD XC Ops placeholder server listening'));
