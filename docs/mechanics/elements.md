---
title: Elements
tags: [mechanic, element]
---

# Elements

Palworld has **9 elements**. Every Pal has one or two, and attacks carry an
element. An attack that is *super-effective* against the target's element deals
extra damage (and the reverse: the target is *weak to* that element).

## Interactive chart

Click an element (or hover) to see what it beats and what beats it — green =
super-effective against, red = weak to.

<div id="type-chart"></div>

## How to read it

Two structures make up the chart (arrow = super-effective against):

```mermaid
graph LR
  Electric --> Water --> Fire --> Grass --> Ground --> Electric
  Fire --> Ice --> Dragon --> Dark --> Neutral

  classDef electric fill:#d8a800,stroke:#d8a800,color:#fff
  classDef water fill:#2a72c9,stroke:#2a72c9,color:#fff
  classDef fire fill:#e25822,stroke:#e25822,color:#fff
  classDef grass fill:#3fa34d,stroke:#3fa34d,color:#fff
  classDef ground fill:#a1704a,stroke:#a1704a,color:#fff
  classDef ice fill:#4ec3d9,stroke:#4ec3d9,color:#fff
  classDef dragon fill:#7b4fd8,stroke:#7b4fd8,color:#fff
  classDef dark fill:#5a3a7a,stroke:#5a3a7a,color:#fff
  classDef neutral fill:#8a8f98,stroke:#8a8f98,color:#fff

  class Electric electric
  class Water water
  class Fire fire
  class Grass grass
  class Ground ground
  class Ice ice
  class Dragon dragon
  class Dark dark
  class Neutral neutral
```

- **5-element cycle** (rock-paper-scissors):
  Electric → Water → Fire → Grass → Ground → Electric.
- **Linear chain** off Fire:
  Fire → Ice → Dragon → Dark → Neutral.

So **Fire** is the only element that is super-effective against two others
(Grass and Ice), and **Neutral** is super-effective against nothing (it only
has a weakness — Dark).

!!! note "Source"
    Effectiveness taken from the in-game element chart (arrows = super-effective).
    "Weak to" is the strict inverse of those arrows. Damage multipliers are not
    recorded here — the chart shows relationships, not numbers.
