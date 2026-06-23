# DMR Radio Resources

## Knowledge

- [DMR Association — DMR Standards](https://www.dmrassociation.org/dmr-standards.html)
  The industry body. Use for: ETSI standard parts, the three Tiers, 2-slot TDMA in 12.5 kHz.
- [ETSI TS 102 361-1 (Air Interface Protocol)](https://www.etsi.org/deliver/etsi_ts/102300_102399/10236101/01.04.05_60/ts_10236101v010405p.pdf)
  The primary standard. Use for: burst/superframe/LC/EMB/CACH, channel timing (Cl. 4.4), channel access (Cl. 5.2). (PDF blocks bots; open in browser.)
- [ETSI TS 102 361-2 (Voice & Generic Services)](https://www.etsi.org/standards)
  Use for: repeater activation messaging (Cl. 4.2) and voice service procedures.
- [VK4PK — DMR Signal Processing Notes](https://www.lyonscomputer.com.au/MMDVM/DMR-Signal-Processing-Notes/DMR-Signal-Processing-Notes.html)
  Engineering mirror of the standard's bit/timing fields. Use for: exact burst layout, EMB, 4-FSK timing, late entry.
- [QRadioLink — open-source DMR transceiver](https://qradiolink.org/open-source-DMR-transceiver-implementation.html)
  Use for: how timing-master sync, CACH, and idle-burst sync work in a real implementation.
- [RadioReference DMR Wiki](https://wiki.radioreference.com/index.php/DMR)
  Broad, accurate community overview. Use for: TDMA, vocoder, channels, repeaters at a glance.
- [Amateur Radio Guide to DMR (W2XAB)](https://www.dmr-marc.net/media/Amateur_Radio_Guide_to_DMR_Rev_I_20150510.pdf)
  Practical primer. Use for: code plugs, talkgroups, time-slot conventions, operating practice.
- [RepeaterBook DMR Wiki](https://www.repeaterbook.com/wiki/doku.php?id=dmr)
  Use for: color codes, channel fields, repeater/C-Bridge administration.
- [Hytera — What is the DMR Standard / Tiers](https://hytera.us/resources/what-is-dmr-standard-tiers/)
  Manufacturer view. Use for: Tier I/II/III differences and where each is used.
- [DVSI — AMBE+2 Vocoder](https://www.dvsinc.com/soft_products/ambe_p2.shtml)
  Codec vendor. Use for: what the DMR voice codec is, bitrates, why transcoding hurts.
- [DVSI — Benefits of End-to-End Vocoder](https://www.dvsinc.com/papers/endtoend.html)
  Use for: quantified transcoding loss (~12% intelligibility) — directly relevant to our bridge.
- [N5AMD — DMR Gateway & MMDVM Explained](https://n5amd.com/digital-radio-how-tos/mmdvm-dmr-gateway-explained/)
  Use for: gateway/bridging architecture, rewrite rules, connecting multiple DMR networks.
- [BridgeCom — Analog & DMR Talk Together (RoIP)](https://www.bridgecomsystems.com/blogs/bridgecom-official-blog/analog-and-dmr-talk-together)
  Use for: cross-mode gateway concepts (a close analogue to what we're building).
- [Brandmeister Network](https://news.brandmeister.network/)
  Largest amateur DMR network. Use for: master-server architecture, talkgroups, hotspot IDs.
- [RadioID.net](https://radioid.net/)
  Single source of DMR IDs since 2018. Use for: how radios/hotspots are identified across networks.

## Wisdom (Communities)

- [RadioReference DMR Forums](https://forums.radioreference.com/forums/digital-voice-systems.235/)
  High-signal practitioner Q&A. Use for: programming, talkgroup/slot routing, real-world quirks.
- [DVSwitch (groups.io)](https://dvswitch.groups.io/g/main)
  Bridging/interconnection (HBlink, AMBE servers). Use for: the exact problem space of our product.
- [Pi-Star Forum](https://forum.pistar.uk/)
  Hotspot/MMDVM deployment. Use for: testing DMR↔network behaviour cheaply on a hotspot.
- DMR-MARC nets — weekly on-air nets. Use for: hearing real talkgroup/slot operation in practice.

## Gaps
- PoC side is the user's OWN custom platform — no external doc; capture its codec/group model/API here as decided.
- Need the DMR module's Android SDK/API doc (how it exposes audio + talkgroup/slot/CC + PTT events). Add when vendor known.
- No single authoritative source yet on DMR↔PoC transcoding latency budgets. Watch DVSwitch.
