![FISD XC](assets/fisd-xc-light.svg)

# FISD XC / OPS — 90-second demo script

## 00:00–00:12 · The problem
“Blockscout is the evidence layer. FISD XC is the decision layer. We take indexed wallet or contract activity and help an operator decide what to inspect next without hiding the source transaction.”

## 00:12–00:25 · Establish the interface
Open the dashboard in **Simulation** mode. Point out the impact field, timescale, sampled-activity metrics and next-action panel. State that the fixture is simulated until an authorized live source is connected.

## 00:25–00:45 · Connect evidence
With `BLOCKSCOUT_PRO_API_KEY` configured server-side, paste a public wallet or contract address, select the correct chain and choose **Connect live**. Explain the address, transaction and best-effort token-transfer requests made through Blockscout Pro REST v2. Wait for the UI to confirm the observed response.

## 00:45–01:02 · Trace an event
Select a returned transaction. Show its hash, sender, recipient, block/time, visible score inputs and recommendation. Open the matching Blockscout Explorer record to verify the evidence.

## 01:02–01:18 · Explain the recommendation
Open **Method**. Describe the score as a triage heuristic based on recency, sampled native-value magnitude, interaction type, direction and observed outcome. It is a prompt for inspection, not a fraud verdict or financial valuation.

## 01:18–01:30 · Keep the operator in control
Add a manual note such as “Reconcile treasury outflow.” Show that it is labelled as a local annotation rather than a chain observation. Close with: “Blockscout is the evidence layer; FISD XC is the decision layer.”

## Before recording
- Verify the key has access to the selected chain.
- Use a public address with visible transaction history.
- Do not show or commit the API key.
- Confirm the UI is labelled **LIVE** before claiming live data.
- Test the full run in the target browser and keep the simulation path as backup.
