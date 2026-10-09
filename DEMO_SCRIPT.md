![FISD XC](assets/fisd-xc-light.svg)

# FISD XC / OPS — 90-second demo script

## 00:00–00:12 · State the product

“Blockscout is the evidence layer. FISD XC is the decision layer. We take indexed wallet or contract activity and help an operator choose what to inspect next, while keeping every live signal linked to the source.”

## 00:12–00:24 · Start in Simple mode

Open the dashboard in **Simple** mode. Show the key metrics, impact field, recent activity and next best action. State clearly whether the screen is running simulation or live data. In the static preview, all sample records are simulated.

## 00:24–00:38 · Expand the workings

Select **Full workings**. Show the component contributions, transaction evidence, provider status, endpoint context and method panel. Explain that the score is a transparent triage heuristic, not a financial or fraud verdict.

## 00:38–00:55 · Connect live evidence

For the full-stack deployment only, connect a public wallet/contract on a chain permitted by the configured Blockscout Pro API key. Wait for a successful response, confirm the live provider status, then select a returned transaction. Never present the static preview as live.

## 00:55–01:09 · Verify the recommendation

Read the selected event's recommendation and component breakdown. Open the corresponding Blockscout Explorer record to verify the sender, recipient, time/block and transaction state.

## 01:09–01:20 · Demonstrate operator control

In Full workings mode, add a local manual note such as “Reconcile treasury outflow.” Show its explicit local-annotation label so it is not mistaken for chain evidence.

## 01:20–01:30 · Close

Switch dark/light mode briefly and close with: “One identity, two operating states. Blockscout is the evidence layer; FISD XC is the decision layer.”

## Before recording

- For live claims, verify the API key, chain permissions, address response and Explorer link in the deployed service.
- Keep `.env` and the real key out of the repository and recording.
- Use the static preview as a fallback and label its data as simulated.
- Check Simple and Full workings states in both brand themes at desktop and mobile widths.