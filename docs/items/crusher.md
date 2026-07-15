---
entity: item
name: Crusher
slug: crusher
category: structure
code: Crusher
build:
  category: Production
  tech_level: 8
  build_work: 8000
  ingredients:
    - item: [[wood]]
      qty: 50
    - item: [[stone]]
      qty: 20
    - item: [[paldium-fragment]]
      qty: 10
operate_suitability: watering 1
sanity: -0.11
defense: 3
tags: [item, structure]
---

# Crusher

> A facility that breaks down Stone and Wood to exchange them for other
> materials. Needs a Pal with the [[watering|Watering]] suitability to spin the
> water turbine.

A base structure. Requires the [[watering|Watering]] suitability to run; drains
a little sanity (SAN −0.11). Defense 3.

## Production

Crush raw materials into [[paldium-fragment|Paldium Fragment]] — from
[[stone|Stone]] and from [[meteorite-fragment|Meteorite Fragment]].

## Build

Unlocked at **Technology Lv 8**. Build workload: 8000 ([[handiwork|Handiwork]]).

|  | Material | Qty |
|:--:|----------|:---:|
| ![](../assets/icons/items/wood.png){ .game-icon } | [Wood](wood.md) | 50 |
| ![](../assets/icons/items/stone.png){ .game-icon } | [Stone](stone.md) | 20 |
| ![](../assets/icons/items/paldium-fragment.png){ .game-icon } | [Paldium Fragment](paldium-fragment.md) | 10 |
