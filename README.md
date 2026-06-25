# DMR Radio Basics — a teaching workspace

A short, beautiful course on Digital Mobile Radio (DMR), built to ground one mission:
**building radios (Android + DMR module) that bridge voice between DMR and a custom
PoC (Push-to-talk over Cellular) platform, on-device and bidirectionally.**

Open any lesson HTML file in a browser. Each is self-contained, cites its sources,
and ends with a quick self-check quiz.

## Lessons
1. [Anatomy of a DMR Channel](lessons/0001-anatomy-of-a-dmr-channel.html) — the 4 fields + 2-slot TDMA
2. [How a Transmission Travels](lessons/0002-how-a-transmission-travels.html) — simplex / repeater / network
3. [Talkgroups & Call Types](lessons/0003-talkgroups-and-call-types.html) — group/private/all call, TG⇄PoC mapping
4. [The Voice Path & Transcoding](lessons/0004-voice-path-and-transcoding.html) — AMBE+2, relay vs transcode
5. [Identity & Networks](lessons/0005-identity-and-networks.html) — Radio IDs, hotspots, reflectors, Tiers
6. [Scan, Scan Lists & Zones](lessons/0006-scan-lists-and-zones.html) — operational layer
7. [Interleaved Review](lessons/0007-interleaved-review.html) — retrieval practice across 1–6
8. [How a Radio Talks to a Repeater](lessons/0008-radio-to-repeater-handshake.html) — PTT sequence, air interface
9. [Radio to Radio (Direct Mode)](lessons/0009-radio-to-radio-direct-mode.html) — simplex, DMO, DCDM
10. [Stun, Kill & Revive](lessons/0010-stun-kill-revive.html) — remote radio disable; spec vs vendor; security

## Reference
- [Glossary](reference/glossary.html) — canonical vocabulary

## Workspace files
- `MISSION.md` — why this course exists
- `RESOURCES.md` — vetted sources + communities
- `NOTES.md` — teaching notes & open questions
- `learning-records/` — what's been learned, steering future sessions
- `assets/` — shared stylesheet + quiz widget
