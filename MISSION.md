# Mission: DMR Radio Basics (for a DMR↔PoC bridge)

## Why
We are building radios that are Android devices with a built-in DMR module, each
able to talk over either DMR or our own custom PoC (Push-to-talk over Cellular)
platform — and, in some scenarios, to bridge on-device between the two (DMR→PoC
and PoC→DMR). I need a working mental model of how DMR carries voice and organises
users — so I can make correct architecture and routing decisions, talk credibly
to radio engineers and customers, and spot where the on-device bridge gains or
loses fidelity.

## Success looks like
- I can read a DMR channel's configuration and explain every field (RX/TX
  frequency, time slot, color code, talkgroup) and why the bridge must honour each.
- I can explain why a single DMR frequency carries two simultaneous conversations,
  and what that means for how we map DMR traffic onto PoC groups.
- I can describe the path a voice packet takes from a DMR handset through a
  repeater/network to our bridge, and where transcoding (AMBE+2 → cellular codec)
  costs us quality.
- I can use the right vocabulary (talkgroup, color code, time slot, Tier II,
  Radio ID, hotspot, reflector) without fumbling in a meeting.

## Constraints
- Goal is practical fluency for product/engineering decisions, not a ham licence.
- Time is limited — short lessons, one tangible win each.
- No physical radio hardware assumed yet (lessons are concept- and config-based).

## Out of scope (for now)
- RF/antenna theory, propagation, power budgets.
- DMR Tier III trunking internals (revisit only if a customer needs it).
- Writing code plugs on specific vendor CPS tools (Motorola/Hytera/TYT UIs).
