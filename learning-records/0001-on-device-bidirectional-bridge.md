# Architecture established: on-device bidirectional DMR↔PoC bridge

The product is not a server-side gateway. Radios are Android devices with an
embedded DMR module; each can speak DMR or PoC, and an individual device can bridge
DMR↔PoC (both directions) on-device. The PoC platform is the user's own custom
build, so its codec/group model/API are under our control.

**Why it matters for teaching:** future lessons should target the on-device handoff
between the DMR module and the Android PoC app (audio format — PCM vs raw AMBE frames —
plus channel metadata: talkgroup, time slot, color code), not C-Bridge/MMDVM server
topologies. The talkgroup↔PoC-group mapping and the transcode-vs-relay decision are
the central design questions. See [[MISSION.md]].
