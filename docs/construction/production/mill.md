---
entity: item
name: Mill
slug: mill
category: structure
code: FlourMill
build:
  category: Production
  tech_level: 15
  build_work: 8000
  ingredients:
    - item: [[wooden-board]]
      qty: 10
    - item: [[stone]]
      qty: 40
    - item: [[ingot]]
      qty: 10
operate_suitability: watering 1
sanity: -0.11
defense: 3
tags: [item, structure]
---

# Mill

> A water mill that grinds Wheat into Flour. Needs a Pal with the
> [[watering|Watering]] suitability to spin the turbine.

A base production station: assign a Pal with [[watering|Watering]] to turn the
water wheel and it mills [[wheat|Wheat]] into [[flour|Flour]] — the base of bread
and other cooking. Drains a little sanity (SAN −0.11); defense 3.

## Produces

- [[flour|Flour]] — from [[wheat|Wheat]].

## Build

Unlocked at **Technology Lv 15**. Build workload: 8000 ([[handiwork|Handiwork]]).

|  | Material | Qty |
|:--:|----------|:---:|
| ![](../../assets/icons/items/wooden-board.png){ .game-icon } | [Wooden Board](../../items/materials/wooden-board.md) | 10 |
| ![](../../assets/icons/items/stone.png){ .game-icon } | [Stone](../../items/materials/stone.md) | 40 |
| ![](../../assets/icons/items/ingot.png){ .game-icon } | [Ingot](../../items/materials/ingot.md) | 10 |
