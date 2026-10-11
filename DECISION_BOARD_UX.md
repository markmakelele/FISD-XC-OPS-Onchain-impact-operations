# FISD XC — Card-Mode Interaction Specification

## Intent

Replace split-focus dashboards with a single responsive operational sequence. The approved card layout is the shared UI for desktop, tablet and mobile; it is not a mobile-only theme.

## Primary journey

1. **Connect source:** choose an EVM chain and enter a wallet/contract address; the demo alternative is always labelled as simulated.
2. **Current Position:** understand the source context, activity sample, score distribution and temporal relations.
3. **Next Best Move:** inspect the rules-based recommendation associated with the selected event.
4. **Move Board:** compare recommended inspection, neighbouring activity, or follow-up monitoring. Each move must preview expected effect before the operator commits. No on-chain transactions are submitted.
5. **Verify Outcome:** open the original Explorer record and optionally record a local review marker.

## Selection model

- Hover/focus: explain the selected item's purpose and next paired function.
- Tap/click: select item and synchronise the impact chart, recommendation, move cards and verification panel.
- Long press: open a contextual inspection modal and visually highlight the target.
- Haptics: light vibration where supported; all interactions remain fully usable without vibration support.
- Keyboard: visible focus, semantic buttons and standard activation keys.

## Card anatomy

Each card is a functional object, not a dashboard tile. It contains a label/state, concise purpose, supporting context, expected effect where applicable, and a clear action. Reuse consistent radius, padding, border and metadata treatment. Avoid unrelated KPI mosaics.

## Simple / Full Workings

Simple hides deep diagnostics but keeps the selected source, signal, recommended move and evidence. Full Workings reveals component scores, method, provider/API provenance and operator notes. Switching detail mode must not swap the underlying transaction or reset the workspace.

## State sharing

Within one browser origin, `BroadcastChannel` and localStorage share selected chain, address, transactions, selected hash, theme, detail mode, monitor flag, notes and review markers. A lease coordinates one polling leader across open tabs. This is best-effort browser-local collaboration—not multi-device backend state.

## Responsive layout

- Desktop: cards use a fluid 12-column grid and preserve one vertical narrative.
- Tablet: metrics rearrange into larger spans; main action stays before alternatives.
- Mobile: the first signal is full-width; supporting cards stack in a single reading order. The temporal chart can scroll horizontally without shrinking its labels beyond legibility.

## Trust and feedback

Show whether source data is live, simulated, stale, or unavailable. Keep score composition inspectable in Full Workings. The score indicates inspection priority only; it is not probability of fraud, USD impact, or proof of causality. A review marker remains a local annotation.