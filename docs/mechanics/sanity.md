---
title: Sanity (SAN)
tags: [mechanic]
---

# Sanity (SAN)

> A wellbeing / morale meter every **captured Pal** carries, separate from health
> and hunger. Low sanity tanks base productivity and eventually causes the
> **Depressed** status.

Check a Pal's SAN in three places: the **Party** menu, the **Palbox**, and next
to its health bar when you look at it directly. It matters most for **base Pals**
assigned to [[work-suitability|work stations]] — full SAN = fast, cheerful work;
low SAN = a Pal that slacks off, sits, or sleeps mid-shift.

## What lowers sanity

These drains stack:

- **Overwork / forced labor** — Pals pushed to work without rest (e.g. driven by
  a [[monitoring-stand|Monitoring Stand]]) lose SAN steadily; harder + longer work
  drops it faster.
- **Hunger / starvation** — a hungry Pal loses SAN. An empty or under-stocked
  [[feed-box|Feed Box]] is the most common cause of an unhappy base.
- **No place to sleep** — Pals without a [[bed|Bed]] don't rest at night, which
  steadily erodes SAN.

Early warning signs (before it gets serious): Pals slack off, sit around, or lie
down and sleep during the day instead of working.

## The Depressed status

Prolonged low SAN develops the **Depressed** status: **Work Speed −30, Movement
Speed −20** — near-useless at a work station. It **cannot** be fixed by waiting
or feeding; it needs [[high-grade-medical-supplies|High Grade Medical Supplies]]
(crafted at the [[medieval-medicine-workbench|Medieval Medicine Workbench]],
Technology Lv 12).

Depressed sits alongside other neglect / stress afflictions:

| Status | Penalty | Cure |
|--------|---------|------|
| Cold / Sick | Work Speed −10 | [Low Grade Medical Supplies](../items/consumables/low-grade-medical-supplies.md) |
| Sprain | Movement Speed −10 | [Low Grade Medical Supplies](../items/consumables/low-grade-medical-supplies.md) |
| Ulcer | Work Speed −20, Move −10 | Medical Supplies |
| Fracture | Work Speed −10, Move −20 | Medical Supplies |
| **Depressed** | **Work Speed −30, Move −20** | High Grade Medical Supplies |
| Weakened | Work Speed −20, Move −30 | High Grade Medical Supplies |

*(Penalty values can be retuned between patches.)*

## Restoring sanity

SAN recovers **on its own** when conditions are decent (fed, rested, not
overworked). To speed it up and prevent dips:

- **[[hot-spring|Hot Spring]]** — the dedicated relaxation facility. Unlocks at Technology Lv 9;
  base SAN restore rate ~0.5. A [[high-quality-hot-spring|High Quality Hot Spring]]
  unlocks at Lv 31 and restores more (buffed in patch 0.1.5.0). A hot spring near
  your work stations is the single best passive fix.
- **Food** — keep the [[feed-box|Feed Box]] stocked to stop hunger loss; some
  foods actively restore SAN when eaten (or feed directly via the Command menu).
  [[honey|Honey]] is the classic early pick (easy to gather; [[beegarde|Beegarde]]
  on a [[ranch|Ranch]] produces it; doesn't spoil). [[cake|Cake]] is generally the
  strongest single SAN food (slow to make, also needed for breeding).
- **Rest** — give every worker a [[bed|Bed]] so they sleep through the night.

## Quick tips

Cover the three drains — a [[bed|Bed]] per worker, a stocked [[feed-box|Feed Box]]
(ideally with sanity food), and don't overwork the same Pals — then add a
**[[hot-spring|Hot Spring]]** (Lv 9) for passive recovery, and you'll rarely see a Depressed Pal.

Build the [[medieval-medicine-workbench|Medieval Medicine Workbench]] early so
you always have a way to cure Depressed / Weakened.
