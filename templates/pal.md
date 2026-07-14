---
# ── PAL ENTITY SCHEMA ──────────────────────────────────────────
# Copy to docs/pals/<slug>.md. slug = lowercase-kebab of name.
# Every field machine-parseable (LLM) + rendered for humans.
# Cross-refs use [[slug]] or [[slug|label]] (roamlinks resolves).
entity: pal
paldex: 000                 # Paldeck number
name: <Name>
slug: <name-slug>
element: [neutral]          # fire|water|grass|electric|ground|ice|dark|dragon|neutral (1-2)
rarity: 0                   # 1-10
size: small                 # xs|small|medium|large|xl (capture/base volume)
work_suitability:           # skill: level (omit skills the pal lacks)
  handiwork: 0
  # kindling|watering|planting|generating_electricity|handiwork|
  # gathering|lumbering|mining|medicine_production|cooling|transporting|farming
partner_skill: <name — effect>
drops:                      # item slug: note
  - <item-slug>
active_skills:              # element/level/power — key attacks
  - <skill>
breeding:
  rank: 0                   # breeding power (combo resolver uses this)
  known_combos:             # documented parent pairs → this pal
    - [[parent-a]] + [[parent-b]]
spawns:                     # where found
  - [[location-slug]]
tags: [pal]                 # element + role tags for the tag index
---

# <Name>

> One-line flavor / role summary.

## Overview

Prose: what this Pal is, notable use, tier placement. Link freely with
[[other-pal]], [[item-slug]], [[mechanic]].

## Work & base use

How its [[work-suitability]] levels play in base building.

## Combat

Active skills, matchups, element notes.

## Breeding

Parent combos producing it, and notable children it produces. See
[[breeding]] for the mechanic.

## Where to find

Spawn [[locations]], time/weather conditions, capture notes.
