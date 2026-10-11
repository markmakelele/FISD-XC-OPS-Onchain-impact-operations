# FISD XC — Blockscout PRO API Buildathon Write-up

## Product

FISD XC / OPS turns multichain wallet and contract activity indexed by Blockscout into an explainable operational timeline, a triage signal, and an evidence-linked next action. Blockscout is a core dependency: the live transaction sample and Explorer verification path come from its API and Explorer.

## Problem

Public on-chain activity is inspectable but often requires operators to connect transaction timing, destination, native value, contract interaction and outcome before choosing what to investigate. FISD XC structures those facts into a singular card-based workflow.

## Workflow

1. Select a supported chain and enter a public EVM address.
2. Request address metadata, transaction history and best-effort token-transfer evidence from Blockscout Pro REST v2 through the server-side proxy.
3. Normalise records into the time trace and impact field.
4. Calculate a visible rule-based 0–100 triage heuristic using recency, sample-relative native value, interaction type, returned outcome and direction.
5. Recommend a review action (failed transaction review, contract interaction review, outflow verification, inflow reconciliation, or neighbouring-pattern comparison).
6. Keep the chosen move, source evidence and operator verification together in the card-based decision board.

## Why Blockscout is central

Without Blockscout's address and transaction responses, live mode has no observed transaction sample or authoritative Explorer evidence to support its recommendations. Demo data is separately labelled simulated.

## UX decision

The final interface uses the approved Impact Cards layout at every screen size. It keeps one reading order: Current Position → Next Best Move → Move Board → Verify Outcome. Simple mode prioritises the action; Full Workings reveals score components, method and provider provenance. Hover, keyboard focus, tap and long press explain/select cards; haptics are optional enhancement only.

## Honest scope

The score is a prioritisation heuristic, not a fraud detector, price valuation or proof of intent. The MVP samples the first 50 transactions and polls; it does not stream. Token transfers are supporting context rather than a full token-flow graph. Live API operation must be verified using a permitted API key and address before the demo is presented as live.