---
title: Work Priority
tags: [mechanic, work]
---

# Work Priority

The order a Pal picks its next task at base. **Lower value = higher priority** —
when a Pal could do several assigned tasks, it does the lowest-value one first.
Distinct from [[work-suitability|Work Suitability]] (which tasks a Pal *can* do): priority is the
fixed ordering *among* the tasks in the game.

The name in parentheses is the internal task ID (game data). Some jobs appear
multiple times with different internal variants (e.g. several `Transport`
tasks), each with its own priority.

## Priority table

| Priority | Task | Internal ID |
|:--------:|------|-------------|
| 1 | Defense | `Defense` |
| 2 | Aid | `ReviveCharacter` |
| 2 | Extinguish | `ExtinguishBurn` |
| 3 | Construction | `Architecture` |
| 4 | DedicatedWork01 | `DedicatedWork01` |
| 5 | Grazing | `MonsterFarm` |
| 6 | Generating Electricity | `GenerateEnergy` |
| 7 | Repair | `RepairBuildObject` |
| 8 | Refinement | `Smelting` |
| 8 | Kindling | `Ignition` |
| 9 | Cooking | `Cooking` |
| 10 | Harvest | `FarmHarvest` |
| 10 | Transport | `TransportFoodItemInBaseCamp` |
| 11 | Planting | `Seeding` |
| 11 | Watering | `Watering_Farm` |
| 12 | Medicine Production | `ProductMedicine` |
| 12 | Watering | `Watering` |
| 13 | Handiwork | `ConvertItem` |
| 13 | Farming | `ProductItem` |
| 14 | Mining | `ProductResource_Mining` |
| 14 | Lumbering | `ProductResource_Deforest` |
| 15 | Mining | `ProductResource_Mining_OnFacility` |
| 15 | Lumbering | `ProductResource_Deforest_OnFacility` |
| 16 | Transport | `TransportDisposableItemInBaseCamp` |
| 17 | Transport | `TransportItemInBaseCamp` |
| 18 | Gathering | `CollectResourcePickable` |
| 18 | Harvest | `HarvestLevelObject` |
| 19 | Cool | `Cool` |

!!! note "Source"
    Values from the in-game Work Priority list ("lower value = higher
    priority"). Internal IDs recorded verbatim. Tasks map onto the base jobs in
    [[work-suitability|Work Suitability]].
