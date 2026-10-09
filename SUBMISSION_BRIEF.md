![FISD XC](assets/fisd-xc-light.svg)

# FISD XC / OPS — Blockscout buildathon brief

## Thesis

FISD XC turns Blockscout-indexed wallet and contract activity into an explainable operational timeline, a visible triage signal, and a next best inspection action. Blockscout supplies evidence; FISD XC provides the decision layer.

## Problem

An explorer presents individual records. Treasury operators, protocol teams and builders still need to connect timing, addresses, outcomes and contract interactions before deciding what deserves attention. FISD XC adds a navigable interpretation layer without replacing the explorer or obscuring its evidence.

## Product sequence

1. Connect a public wallet or contract on a supported chain.
2. Retrieve address context, transaction history and best-effort token-transfer evidence through Blockscout Pro REST v2.
3. Normalize returned records into time-indexed events.
4. Calculate a transparent 0–100 triage heuristic from visible inputs.
5. Render sampled activity in the impact field and timeline, linked to the source record.
6. Recommend a next inspection action and open the original Blockscout Explorer record.
7. Let a human operator add an annotation that remains visibly separate from onchain observations.

## Two application states

- **Simple:** an operator-first view containing the key metrics, impact/timeline visualization, recent activity and next action.
- **Full workings / Complex:** the audit view exposes component math, source provenance, API status, raw transaction evidence, methodology and local operator notes.

The two states share the same data, score and brand identity. They differ in the amount of interface detail, not in the truth status of the information.

## Hosting model

The static GitHub Pages preview is simulation-only and never enables live API calls. The full-stack Render profile serves the Node app and API proxy, keeps the API key in the host's environment secrets and connects to Blockscout Pro. This separation provides an accessible demo path without pretending that a static front end can safely keep a key or query the live API by itself.

## Why Blockscout is essential

Live mode requires Blockscout responses for address context and indexed transaction history; token transfers add supporting evidence. FISD does not claim a live interpretation until the API request succeeds. Live transactions remain linkable to their Blockscout Explorer source.

## Differentiation

FISD XC is an operations layer, not another explorer: **observed transaction → explainable triage signal → recommended next action → Explorer verification**. The spatial impact field is a way to navigate a sequence; it does not prove causal relationships between transactions.

## Evidence and limitations

The score is a prioritization heuristic, not a monetary-impact valuation, fraud verdict, risk guarantee, or inference of intent. Native-value comparisons are relative to the returned sample. The application samples up to 50 records and uses interval polling; it does not provide a complete historical index, a separate token-flow graph or push-streaming. Before production use, add authentication, persistent server-side storage, tenant isolation, stronger proxy-aware rate limiting, alerting, observability and automated tests.

## Demo acceptance

- Show Simple mode first and clearly identify the selected data as simulation or live.
- Switch to Full workings and explain the component score and API provenance.
- In a live run, select an actual transaction and open its Explorer record.
- Demonstrate a manual operator note and explain that it is not onchain data.
- Show the dark/light brand transition and the two hosting profiles.