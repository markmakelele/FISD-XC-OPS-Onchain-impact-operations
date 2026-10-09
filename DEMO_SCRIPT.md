# 90-second FISD XC demo script

**0:00–0:12 — Problem**  
“Blockscout provides high-quality onchain evidence. FISD XC adds an operational layer: it shows which observed transactions warrant attention, where they sit in time, and what to inspect next.”

**0:12–0:25 — Demo mode**  
Open the dashboard in simulation mode. Point out the upper impact field, time scale, four metrics and next-best-action panel. State clearly that the fixture is simulated until a live address is connected.

**0:25–0:45 — Live Blockscout integration**  
With `BLOCKSCOUT_PRO_API_KEY` configured in the local server `.env`, paste a public wallet or contract address and choose its chain. Click Connect live. Explain that FISD requests Blockscout Pro address details, address transactions and token-transfer evidence via REST v2. Wait for real returned records.

**0:45–1:02 — Trace one event**  
Select a recent transaction. Show the transaction hash, sender, recipient, block/time, score explanation and recommendation. Open its Blockscout Explorer record to validate the underlying evidence.

**1:02–1:18 — Why this score / next action**  
Open Method. Explain the heuristic inputs: recency, native value relative to the sampled window, contract interaction and observed outcome. Emphasize that the score prioritizes inspection; it is not a fraud verdict or a valuation.

**1:18–1:30 — Human-in-the-loop**  
Add a manual operational note such as “Reconcile treasury outflow.” Explain that FISD labels local annotations separately from observed onchain transactions. Close with: “Blockscout is the evidence layer; FISD is the decision layer.”

## Before recording

- Configure a working Pro API key in `.env`; never include it in a screen recording or source commit.
- Use a public address with visible transaction history on a chain allowed by the key.
- Confirm that live mode is labelled “BLOCKSCOUT PRO · LIVE” before making any live-data claim.
- Test at the actual demo machine / browser and keep the manual/demo flow as backup.