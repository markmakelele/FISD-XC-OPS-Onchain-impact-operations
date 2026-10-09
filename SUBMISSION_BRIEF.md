![FISD XC](assets/fisd-xc-light.svg)

# FISD XC / OPS — Blockscout buildathon brief

## Thesis
FISD XC turns Blockscout-indexed wallet and contract activity into an explainable operational timeline with a next best inspection action and a direct path to source evidence.

## The problem
An explorer presents individual records. Treasury operators, protocol teams and builders still need to connect addresses, outcomes and timing before deciding what deserves attention. FISD XC supplies that interpretation layer without replacing the explorer or obscuring the evidence.

## Product sequence
1. Connect a public wallet or contract on a supported chain.
2. Request address context, transactions and best-effort token-transfer evidence through Blockscout Pro REST v2.
3. Normalize returned records into time-indexed events.
4. Calculate a transparent 0–100 triage score from visible inputs.
5. Render sampled activity as a timeline, connected impact field and selected evidence record.
6. Recommend a next inspection action and link directly to Blockscout Explorer.
7. Allow a human operator to add a local annotation, visibly separated from chain data.

## Why Blockscout is essential
Blockscout provides the evidence on which live mode depends: address metadata and indexed transaction history. Without those responses, FISD cannot claim to interpret live onchain activity. Simulation mode is explicitly labelled and exists only to demonstrate the interface.

## Differentiation
FISD XC is not another block explorer. It adds a temporal and operational layer: **observed transaction → explainable triage score → recommended next action → Explorer verification**. The impact field is a navigation and reasoning surface; it does not imply unverified causal relationships.

## Brand ID
The original stacked FISD XC mark remains stable across modes. Slate-blue `#BDCBD4` on near-black `#08090C` is the dark expression; black `#000000` on warm white `#F8F8F5` is the light expression. Brand accent is separated from semantic transaction state colours. Full rules are in [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md).

## Evidence and limits
The score is a heuristic to prioritize inspection. It is not a fraud detector, financial valuation, risk guarantee, or claim of intent. Native-value comparisons are relative to the returned sample; token transfers are not treated as USD values. Recommendations are rules-based and remain subject to operator judgment.

## Submission narrative
- **API integration:** Blockscout Pro REST v2 is the live evidence source.
- **Real-world utility:** transaction triage for wallet, treasury and contract operations.
- **Technical execution:** server-side key handling, address and chain validation, rate limits, visible API errors and simulation/live separation.
- **Creativity:** spatial impact field with event-to-time relationships.
- **UX:** responsive layouts, explainable scoring, traceable recommendations and Explorer evidence.
- **Showcase:** clear provider attribution and a repeatable demonstration path.

## Status statement
This is an MVP. Live API behavior must be verified with an authorized key and supported address before the demo claims live data. Current limits include a 50-record sample, interval polling, heuristic scoring and no dedicated token-flow graph. Public production use requires stronger authentication, persistence, monitoring and automated tests.
