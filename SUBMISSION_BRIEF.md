# FISD XC Ops — Submission brief

## One line
FISD XC turns Blockscout-indexed wallet and contract activity into an explainable operational timeline with a recommended next action and direct explorer evidence.

## Problem
Onchain explorers expose transaction data, but operators still need to connect addresses, transactions, timing and context before deciding what to inspect next. FISD XC is designed for treasury operators, protocol teams and builders who need an evidence-first activity triage layer.

## Product workflow
1. Connect a public wallet or contract on a Blockscout-supported chain.
2. Fetch address context, transaction history and token-transfer evidence from Blockscout Pro API.
3. Normalize transactions into time-indexed activity events.
4. Compute a transparent 0–100 triage signal from recency, native value, interaction type and observed outcome.
5. Render the events into FISD's impact field and time scale, with sequential connectors.
6. Recommend a next inspection action and provide direct Blockscout Explorer links.

## Why Blockscout is core
The live workflow depends on Blockscout Pro REST v2 for address metadata and transaction history, with token transfers as supporting evidence. Without those responses, live mode cannot create the observed transaction set or its evidence links. Demo mode is separately labelled simulation.

## Differentiation
FISD XC does not attempt to replace Blockscout Explorer. It adds a temporal/operational interpretation layer: a clear relationship from observed transaction → explainable score → next action → Explorer verification.

## Judging alignment
- **API integration (30%):** address info, transaction history, and token transfer routes; Blockscout is the live data dependency.
- **Real-world utility (20%):** triage for treasury, wallet and contract activity.
- **Technical execution (20%):** server-side key handling, API error states, refresh cadence, source provenance and explicit demo/live modes.
- **Creativity (15%):** spatial impact field and sequential event-to-effect topology.
- **UX/demo (10%):** responsive dashboard, explainable score, trace flow and one-click Explorer evidence.
- **Blockscout showcase (5%):** provider attribution and transaction/address links in the core workflow.

## Honest scope statement
Current release is an MVP. It samples up to 50 transactions and uses polling, not websocket streaming. The signal score is a heuristic for prioritization, not a fraud detector or monetary impact valuation. The demo fixture is simulated; only a successful live connection yields observed chain data.