---
entity: item
name: Ancient Furnace
slug: ancient-furnace
category: structure
code: AncientBlastFurnace
refines: all ingots
build:
  category: Production
  tech_level: 66
  build_work: 1000000
  ingredients:
    - item: [[coralum-ingot]]
      qty: 100
    - item: [[thermal-core]]
      qty: 20
    - item: [[computer]]
      qty: 30
    - item: [[ancient-civilization-core]]
      qty: 10
operate_suitability: kindling + cooling (high level)
energy: 3000 per sec
energy_type: Electric
sanity: -0.15
defense: 4
tags: [item, structure]
---

# Ancient Furnace

> A special ancient-tech furnace that smelts every ingot in one place — melts
> with fire, then flash-cools with ice. Needs high-level Kindling and Cooling.

The ultimate furnace: it refines **every** ingot tier from a single station, so
a well-staffed base needs no other furnace. It melts materials with fire then
solidifies them with ice, which is why it demands Pals with high-level
**[[kindling|Kindling]]** *and* **[[cooling|Cooling]]** suitability. Draws 3000
electricity/sec; drains a little sanity (SAN −0.15); defense 4.

## Refines

- All ingots — [[ingot|Ingot]], [[refined-ingot|Refined Ingot]], [[pal-metal-ingot|Pal Metal Ingot]], [[hexolite|Hexolite]], and more.

## Build

Unlocked at **Technology Lv 66**. Build workload: 1000000 ([[handiwork|Handiwork]]).
Requires an electricity supply to operate.

|  | Material | Qty |
|:--:|----------|:---:|
| ![](../assets/icons/items/coralum-ingot.png){ .game-icon } | [Coralum Ingot](coralum-ingot.md) | 100 |
| ![](../assets/icons/items/thermal-core.png){ .game-icon } | [Thermal Core](thermal-core.md) | 20 |
| ![](../assets/icons/items/computer.png){ .game-icon } | [Computer](computer.md) | 30 |
| ![](../assets/icons/items/ancient-civilization-core.png){ .game-icon } | [Ancient Civilization Core](ancient-civilization-core.md) | 10 |
