---
title: PalDB
---

# PalDB

Palworld knowledge base. Two audiences, one source:

- **Humans** — searchable static wiki (MkDocs Material), cross-linked.
- **LLMs** — plain markdown with machine-parseable frontmatter, ingest directly.

Every entity is one markdown file: **frontmatter** (structured stats) + **prose**
(explanation). Entities link each other with \[\[slug\]\] wikilinks, so the DB
forms a graph you can traverse from any node.

## Sections

| Section | What lives here |
|---------|-----------------|
| [Pals](pals/index.md) | Creatures — stats, work suitability, breeding, spawns |
| [Items](items/index.md) | Materials, gear, consumables, recipes |
| [Mechanics](mechanics/index.md) | Systems: breeding, capture, base work, combat |
| [Locations](locations/index.md) | Regions, biomes, spawn maps |
| [Guides](guides/index.md) | Walkthroughs, tier lists, strategies |

## How this DB grows

Knowledge is fed in incrementally. Each drop is normalized into entity files,
and **cross-links are built both ways** (a new Pal links its breeding parents;
those parents get linked back). Templates in `templates/` define each entity's
schema. See the repo `CLAUDE.md` for the ingestion contract.
