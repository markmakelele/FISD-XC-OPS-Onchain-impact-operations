# FISD XC — Card-Mode Interaction Specification

## Intent

The Impact Cards layout is the canonical responsive UI for desktop, tablet and mobile. It replaces separate editorial and bento-style operating layouts with one consistent interaction model.

## Primary journey

1. **Connect source:** choose an EVM chain and enter a wallet/contract address; demo records are labelled simulated.
2. **Current Position:** inspect source context, activity sample, signal and temporal relationships.
3. **Next Best Move:** inspect the selected transaction's rule-based recommendation.
4. **Move Board:** compare recommended inspection, neighbouring activity, or follow-up monitoring. Each move previews the expected effect. No on-chain transaction is submitted.
5. **Verify Outcome:** open the original Explorer record and optionally create a local review marker.

## Selection model

- Hover/focus explains an item's function and next paired function.
- Tap/click selects the item and updates the connected panels.
- Long press opens a contextual inspection modal and highlights the target.
- Haptics use the Vibration API where supported; visual states work everywhere.
- Keyboard focus remains visible and standard activation keys work.

## Card anatomy

Cards are functional units, not unrelated dashboard tiles. Each has state/label, concise purpose, supporting context, and an action or expected effect. Reuse spacing, radius, border and metadata patterns. Keep one dominant action.

## Simple / Full Workings

Simple shows the decision essentials and supporting evidence. Full Workings reveals score components, method, provider/API provenance and operator notes. Switching view must not change the selected transaction or underlying sample.

## Shared workspace

Within the same browser origin, BroadcastChannel and localStorage sync selected chain, address, transaction sample, selected hash, theme, detail mode, monitor flag, notes and review markers. A lease coordinates one polling leader across tabs. This is browser-local, not cross-device collaboration.

## Responsive behaviour

Desktop uses fluid card spans. Tablet allows metrics to rearrange while preserving the decision order. Mobile stacks the flow; the chart may scroll horizontally to keep timeline labels legible.

## Trust states

Distinguish live, simulated, stale and unavailable source states. The score indicates inspection priority only, not fraud probability, monetary impact or intent. A local review marker is not an on-chain attestation.
