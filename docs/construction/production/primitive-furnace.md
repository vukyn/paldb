---
entity: item
name: Primitive Furnace
slug: primitive-furnace
category: structure
code: BlastFurnace
refines: [[ingot]]
build:
  category: Production
  tech_level: 10
  build_work: 5000
  ingredients:
    - item: [[wood]]
      qty: 20
    - item: [[stone]]
      qty: 40
    - item: [[flame-organ]]
      qty: 3
operate_suitability: kindling 1
sanity: -0.15
defense: 2
tags: [item, structure]
---

# Primitive Furnace

> The first smelter — refines [[ingot|Ingot]] from ore. Slow and low quality,
> and it needs a Fire Pal to light the flame.

The starter furnace and the only way to make [[ingot|Ingot]] early on. It burns
slowly and needs a Pal with the [[kindling|Kindling]] suitability to keep the
flame going. Drains a little sanity (SAN −0.15); defense 2.

## Refines

- [[ingot|Ingot]] — from [[ore|Ore]].

## Build

Unlocked at **Technology Lv 10**. Build workload: 5000 ([[handiwork|Handiwork]]).

|  | Material | Qty |
|:--:|----------|:---:|
| ![](../../assets/icons/items/wood.png){ .game-icon } | [Wood](../../items/materials/wood.md) | 20 |
| ![](../../assets/icons/items/stone.png){ .game-icon } | [Stone](../../items/materials/stone.md) | 40 |
| ![](../../assets/icons/items/flame-organ.png){ .game-icon } | [Flame Organ](../../items/materials/flame-organ.md) | 3 |
