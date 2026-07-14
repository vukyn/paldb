---
# ── ITEM ENTITY SCHEMA ─────────────────────────────────────────
# Copy to docs/items/<slug>.md.
entity: item
name: <Name>
slug: <name-slug>
category: <material|consumable|weapon|armor|accessory|structure|ammo|schematic>
rarity: 0                   # 0-4 (common→legendary)
weight: 0
stack: 0
sources:                    # how to obtain
  - crafted                 # crafted|dropped|gathered|shop|dungeon
crafted_at: [[workbench]]   # structure it is made at (if crafted)
ingredients:                # item slug: qty
  - <item-slug>: 0
dropped_by:                 # pal slugs that drop it
  - [[pal-slug]]
tags: [item]
---

# <Name>

> One-line role.

## Use

What it does, why it matters.

## Obtain

Recipe / drops / gather spots. Link [[pal-slug]] droppers, [[location]] sources.
