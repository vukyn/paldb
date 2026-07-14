---
# ── PAL ENTITY SCHEMA ──────────────────────────────────────────
# Copy to docs/pals/<slug>.md. slug = lowercase-kebab of name.
# Every field machine-parseable (LLM) + rendered for humans.
# Cross-refs use [[slug]] or [[slug|label]] (roamlinks resolves).
# Omit any field the source doesn't give — never invent values.
entity: pal
paldex: 0                   # Paldeck number
name: <Name>
slug: <name-slug>
code: <InternalCode>        # internal code (e.g. SheepBall), optional
element: [neutral]          # fire|water|grass|electric|ground|ice|dark|dragon|neutral (1-2)
rarity: 0                   # 1-10
size: small                 # xs|small|medium|large|xl
food_consumption: 0         # 1-10 pips (how much it eats)
work_suitability:           # skill: level (omit skills the pal lacks)
  handiwork: 0
  # kindling|watering|planting|generating_electricity|handiwork|gathering|
  # lumbering|mining|medicine_production|cooling|transporting|farming
partner_skill:
  name: <skill name>
  effect: <what it does>
stats:                      # base stats
  health: 0
  food: 0
  melee_attack: 0
  attack: 0
  defense: 0
  work_speed: 0
  support: 0
  stamina: 0
capture_rate_correct: 0
male_probability: 0         # % male
egg: <egg type>
gold_coin: 0                # sell value
movement:
  slow_walk: 0
  walk: 0
  run: 0
  ride_sprint: 0
  transport: 0
  swim: 0
  swim_dash: 0
level_80:                   # [min, max] at level 80
  health: [0, 0]
  attack: [0, 0]
  defense: [0, 0]
drops:                      # item + qty + chance
  - item: [[item-slug]]
    qty: "1"
    chance: 100%
active_skills:              # key attacks (omit if unknown)
  - <skill>
breeding:
  rank: 0                   # CombiRank (breeding power; combo resolver uses this)
  known_combos:             # documented parent pairs → this pal
    - [[parent-a]] + [[parent-b]]
spawns:                     # where found
  - [[location-slug]]
tags: [pal]
---

# <Name>

> One-line flavor / summary.

## Food

<span class="food-meter" data-value="0" data-max="10"></span>

Consumption **N / 10** (meter renders from `data-value`).

## Partner skill

**<skill name>** — <effect>. Any level scaling in a table.

## Work & base use

One row per suitability (icon + link to the work + level), then a note on how
it plays in base building.

| Icon | Work | Lv |
|:----:|------|:--:|
| ![](../assets/icons/work/<work>.png){ .game-icon } | [<Work>](../mechanics/work/<work>.md) | 0 |

## Combat

Element matchups (link [[elements]]), stat notes, level-80 spread.

## Breeding

Parent combos producing it, notable children. See [[breeding]].

## Drops

One row per drop (icon + item link + qty + chance).

| Icon | Item | Qty | Chance |
|:----:|------|:---:|:------:|
| ![](../assets/icons/items/<item-slug>.png){ .game-icon } | [<Item Name>](../items/<item-slug>.md) | ×1 | 100% |

## Where to find

Spawn [[locations]], conditions, capture notes.
