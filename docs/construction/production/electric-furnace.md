---
entity: item
name: Electric Furnace
slug: electric-furnace
category: structure
code: BlastFurnace3
refines: [[pal-metal-ingot]]
build:
  category: Production
  tech_level: 44
  build_work: 100000
  ingredients:
    - item: [[refined-ingot]]
      qty: 50
    - item: [[bio-battery]]
      qty: 4
    - item: [[polymer]]
      qty: 20
    - item: [[cryogenic-coolant]]
      qty: 10
operate_suitability: kindling 1
energy: 500 per sec
energy_type: Electric
sanity: -0.15
defense: 4
tags: [item, structure]
---

# Electric Furnace

> A powered smelter — refines [[pal-metal-ingot|Pal Metal Ingot]]. Needs
> electricity but processes much faster. Still needs a Fire Pal for the flame.

The high-tier furnace, and the only one that makes
[[pal-metal-ingot|Pal Metal Ingot]]. It draws 500 electricity/sec but smelts far
quicker than the stone furnaces. Needs the [[kindling|Kindling]] suitability.
Drains a little sanity (SAN −0.15); defense 4.

## Refines

- [[pal-metal-ingot|Pal Metal Ingot]] — from [[ore|Ore]] + [[pure-quartz|Pure Quartz]] + [[paldium-fragment|Paldium Fragment]].

## Build

Unlocked at **Technology Lv 44**. Build workload: 100000 ([[handiwork|Handiwork]]).
Requires an electricity supply to operate.

|  | Material | Qty |
|:--:|----------|:---:|
| ![](../../assets/icons/items/refined-ingot.png){ .game-icon } | [Refined Ingot](../../items/materials/refined-ingot.md) | 50 |
| ![](../../assets/icons/items/bio-battery.png){ .game-icon } | [Bio Battery](../../items/materials/bio-battery.md) | 4 |
| ![](../../assets/icons/items/polymer.png){ .game-icon } | [Polymer](../../items/materials/polymer.md) | 20 |
| ![](../../assets/icons/items/cryogenic-coolant.png){ .game-icon } | [Cryogenic Coolant](../../items/materials/cryogenic-coolant.md) | 10 |
