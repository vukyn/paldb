---
name: paldb-nested-by-category
description: paldb entities nested by category folder (URLs mirror nav); icon paths depth-relative
metadata: 
  node_type: memory
  type: project
---

paldb entity files are **nested by category** so URLs mirror the nav (done in a
big refactor; `[[slug]]` prose links are location-independent so they survived,
table markdown-links are path-based so they were rewritten):

- Pal → `docs/pals/<slug>.md` (flat)
- Item → `docs/items/<sub>/<slug>.md` — `<sub>` = materials·food·spheres·ammo·consumables (from `category`)
- Structure → `docs/construction/<sub>/<slug>.md` — `<sub>` = production·pal·defenses (from `build.category`)
- Each category folder has an `index.md` = its filtered listing table; a new
  entity's row goes there (EN+VI). **No global all-items page** (deleted).

**Icon paths are depth-relative:** depth-2 pages (`items/<sub>/…`,
`construction/<sub>/…`, folder `index.md`) use `![](../../assets/icons/…)`;
depth-1 (`pals/…`, `mechanics/…`) use `../assets/…`. roamlinks `[[slug|label]]`
does NOT work inside table cells (renders literally) — tables must use plain
`[Label](relative/path.md)`, which is why the move required a link rewrite.

Rules updated in `.claude/commands/pal-ingest.md` + paldb `CLAUDE.md`. See also
[[paldb-onboarded]], [[paldb-content-rules]].
