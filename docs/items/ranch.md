---
entity: item
name: Ranch
slug: ranch
category: structure
code: MonsterFarm
build:
  category: Pal
  tech_level: 5
  build_work: 15000
  ingredients:
    - item: [[wood]]
      qty: 30
    - item: [[stone]]
      qty: 20
    - item: [[fiber]]
      qty: 30
defense: 3
worker_max: 4
tags: [item, structure]
---

# Ranch

> Farm for raising sheep and fowl-like Pals. Assign a Pal with the right partner
> skill and it produces items over time.

A base structure. Requires the [Farming](../mechanics/work/farming.md)
suitability to operate; holds up to **4** workers. Defense 3.

## Production

Assign a Pal whose partner skill is a Ranch skill; it periodically drops that
skill's item.

| Pal | Produces | Via |
|-----|----------|-----|
| [Lamball](../pals/lamball.md) | [Wool](wool.md) | Fluffy Shield |
| [Chikipi](../pals/chikipi.md) | [Egg](egg.md) | Egg Layer |

## Build

Unlocked at **Technology Lv 5**. Build workload: 15000 ([[handiwork|Handiwork]]).

| Material | Qty |
|----------|:---:|
| [Wood](wood.md) | 30 |
| [Stone](stone.md) | 20 |
| [Fiber](fiber.md) | 30 |
