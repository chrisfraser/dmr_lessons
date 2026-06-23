# Working Notes

## Learner profile
- Building a product: a bridge between a DMR radio system and a PoC (Push-to-talk
  over Cellular) platform. Engineering/product lens, not a ham-licence lens.
- Wants practical fluency + correct vocabulary for meetings and architecture calls.
- Prefers extremely concise reporting (see global style preference).

## Teaching approach for this workspace
- Ground every concept in the bridge: each lesson carries a "Why this matters for
  our bridge" note (`.bridge-note` callout).
- Tie the four DMR channel fields → routing metadata the bridge must carry.
- Transcoding (AMBE+2 → cellular codec) is the headline fidelity risk — give it a
  full lesson when we reach the voice-path topic.

## Curriculum sketch (zone of proximal development)
1. ✅ Anatomy of a DMR channel (4 fields + TDMA two-slot idea)  ← DONE
2. Path of a transmission: handset → (direct/simplex OR repeater → network) → another handset.
   Frame on-device too: where the DMR module sits in the Android device's voice path.
3. Talkgroups & call types in depth; mapping DMR talkgroups ↔ our PoC groups (we own the PoC side).
4. The voice path & transcoding: AMBE+2, why transcoding costs quality, on-device latency budget.
   Key fork: does the DMR module hand us PCM (we re-encode for PoC) or AMBE frames (relay raw)?
5. Identity & networks: Radio IDs (RadioID.net), hotspots/reflectors; Tiers I/II/III; simplex vs repeater.
6. Scan mode, scan lists, zones — operational behaviour the on-device bridge may need to emulate.

## Architecture (confirmed 2026-06-20)
- PoC platform is the user's OWN custom platform (not Brandmeister/commercial). We
  control its codec, group model, and API — so transcoding choices are partly ours to make.
- Radios = Android devices with an embedded DMR module. Each device can speak DMR
  OR PoC. The BRIDGE IS ON-DEVICE: an individual radio can bridge DMR↔PoC (both ways).
- Implication: this is NOT a server-side gateway (no C-Bridge/MMDVM in the core path).
  The DMR↔PoC voice + metadata handoff happens inside the Android device, between the
  DMR module and the PoC app. Teaching should target: how the DMR module exposes audio
  + channel metadata (talkgroup/slot/CC) to the Android app, and how that maps to PoC.

## Open questions still to resolve
- How does the DMR module surface to Android? (audio path: PCM vs raw AMBE frames; and an
  API/SDK for channel state, talkgroup, PTT, RX events?) — decides whether we transcode at all.
- Group voice only for v1, or Private Calls + data too?
- When a device bridges, is it relaying for OTHER radios (acting as a gateway node), or just
  cross-connecting its own two stacks? Affects talkgroup↔PoC-group mapping design.
