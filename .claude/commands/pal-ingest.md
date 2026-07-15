---
description: Ingest raw Palworld knowledge into paldb — normalize into entity files with both-way cross-links, consistently every time
argument-hint: <raw knowledge to ingest, or "from <file/path>"> [| vi]
model: claude-sonnet-5
allowed-tools: Read, Write, Edit, Grep, Glob, Bash
---

You are the **paldb ingestion engine**. Turn the raw knowledge below into clean,
cross-linked entity files, following this exact procedure **every time** so the
DB stays consistent across all ingests.

Raw knowledge: **$ARGUMENTS**

(If `$ARGUMENTS` says `from <path>` or names a file, `Read` that file as the raw
input. If it is empty, ask the user to paste the knowledge and stop.)

## Corpus & schemas

Root: the paldb repo root (this project's working directory).
- **Entities are NESTED by category** (URLs mirror the nav). Place each new file
  in the folder matching its category — glob for the sibling files first:
  - Pal → `docs/pals/<slug>.md` (flat)
  - Item → `docs/items/<sub>/<slug>.md` where `<sub>` = `materials` · `food` ·
    `spheres` · `ammo` · `consumables` (from the item's `category`)
  - Structure → `docs/construction/<sub>/<slug>.md` where `<sub>` = `production`
    · `pal` · `defenses` (from `build.category`)
  - Location → `docs/locations/<slug>.md`
- Each category folder has an `index.md` = the filtered listing table for that
  category; **add the new entity's row to that `index.md`** (EN + VI). There is
  no global all-items page.
- Prose folders: `docs/mechanics/` (+ `mechanics/work/<work>.md`), `docs/guides/`.
- Schemas: `templates/pal.md`, `templates/item.md`, `templates/location.md`.
- **slug** = lowercase-kebab of the name; filename = `<slug>.md`. `Glob`/`Grep`
  by slug to locate a file — it may be nested (`items/materials/ore.md`).
- **Icon paths are depth-relative**: from a depth-2 entity page
  (`items/materials/<slug>.md`, `construction/<sub>/<slug>.md`) use
  `![](../../assets/icons/<cat>/<slug>.png){ .game-icon }`; from a depth-1 page
  (`pals/<slug>.md`) use `../assets/...`. (roamlinks `[[slug]]` prose links are
  location-independent — no path needed; only markdown table links + images care
  about depth.)

## Procedure — run in order, every ingest

### 1. Extract & classify
Break the raw input into discrete facts. Group facts by the entity they describe.
Classify each entity:
- creature → `pals/` · thing/gear/material → `items/` · place/biome/dungeon →
  `locations/` · game system (breeding, capture, work…) → `mechanics/` (prose)
- **Work Suitability detail** (a specific work type's data, e.g. its per-level
  scaling) → its own page `mechanics/work/<work-slug>.md` (there is one page per
  work type; the `mechanics/work-suitability.md` table links to each). Do NOT
  make a shared scaling page.
- If a fact is a strategy/tier-list/walkthrough → `guides/` (prose).
List what you extracted before writing (a one-line plan per entity).

### 2. Dedup — extend, never duplicate
For each entity, `Glob`/`Grep` for an existing file by slug **and** by name (it
may exist under a slightly different slug). If it exists → **Edit** to merge new
facts in; do NOT create a second file. If not → create from the matching
template (Read the template, copy its frontmatter shape).

### 3. Fill frontmatter FIRST, then prose
- Frontmatter is the queryable layer — fill every field the input supports,
  using the template's exact keys/shape. Omit (or mark `unknown`) fields the
  input does not cover — **do not invent values**.
- Then write prose under the template's headings, explaining and contextualizing.
- Keep frontmatter **valid YAML** (a broken block breaks that page's build).

### 4. Build cross-links BOTH ways — the core step
For every relationship the entity has, write the link on BOTH ends:
- Breeding: child lists `breeding.known_combos: [[parentA]] + [[parentB]]`
  → on parentA and parentB, add the child under a "known children" note/section.
- Drops: item `dropped_by: [[pal]]` ↔ pal `drops: [[item]]`.
- Spawns: pal `spawns: [[location]]` ↔ location `pals_here: [[pal]]`.
- Recipes: item `ingredients: [[mat]]` ↔ (optional) mat notes it feeds `[[item]]`.
- Mechanic references: entity prose links `[[breeding]]` etc.
Open the other end's file and add the reciprocal link. If the other end has no
file yet → **create a stub** (see step 5), don't skip the link.

**Link display text:** a bare `[[slug]]` renders the raw slug ("work-priority"),
which reads badly. In prose, label it: `[[slug|Display Name]]`. On EN pages the
label is the English page title; on `.vi.md` pages use the **VI name that matches
the nav menu** (e.g. `[[work-priority|Ưu tiên công việc]]`). (Can't use the pipe
form inside a table cell — there, prefer a plain markdown link `[Label](path.md)`.)

### 5. Stubs = the worklist
A `[[slug]]` whose file does not exist yet is a **stub marker**, not an error —
it records something to ingest later. When a link needs a not-yet-known entity,
either leave the bare `[[slug]]` (no file), or create a minimal stub file with
just `name` + `slug` + `entity` in frontmatter and a `> stub — awaiting data`
line. **Never fabricate stats to fill a stub.**

### 5b. Bilingual (EN / VI)
The site is EN/VI (`mkdocs-static-i18n`, suffix mode). **Write EN as the source**
— the unsuffixed file (`pals/lamball.md`). VI is a translation overlay
`<name>.vi.md`; missing VI falls back to EN automatically, so VI is optional.
- **Default: write BOTH the EN and the VI file every ingest** (the user always
  wants the VI pair). For each entity write `<name>.md` and `<name>.vi.md` with
  **byte-identical frontmatter** (same stats, slugs, tags, `[[links]]`, widget
  `<div>` / ```` ```mermaid ```` fences) and only the **prose + `title:`
  translated**. Frontmatter must never diverge between the two — the data layer
  is language-neutral; game proper nouns stay English. (`| en` = EN-only if ever
  wanted.)
- **Translate for MEANING, not word-by-word.** VI prose must read like a native
  wrote it — natural phrasing, right register — not a literal gloss of the EN.
  Rework sentence structure freely so a Vietnamese reader understands instantly.
  Keep **Pal proper names** and **skill names** in English.
- **Translate common-noun item names to VI** — in the link label AND the VI page
  H1 as `# <VI> (<English>)`:
  - Egg→Trứng · Wool→Len · `<Pal> Poultry`→`Thịt gà <Pal>` · `<Pal> Mutton`→
    `Thịt cừu <Pal>`. Keep the Pal name English (e.g. "Thịt gà Chikipi").
  - **Established VI glossary** (reuse these exact terms): Wood→Gỗ · Stone→Đá ·
    Fiber→Sợi thực vật · Ore→Quặng Đồng · Ingot→Thỏi Đồng · Gold Coin→Đồng Vàng ·
    Egg→Trứng · Wool→Len. **Keep English:** Ranch, Red Berries, all Pal names.
    Prefer a descriptive VI over a bare one-word gloss ("Sợi thực vật" not "Sợi",
    "Thỏi Đồng" not "Thỏi") when the short form is unclear.
  - **Production STRUCTURE names ARE translated in VI** (head noun + qualifier):
    Workbench→Bàn chế tạo · Assembly Line→Dây chuyền · Furnace→Lò nung ·
    Workshop→Xưởng. Translate the qualifier with it — Primitive→sơ khai ·
    High Quality→cao cấp · Advanced→nâng cao · Production→sản xuất · Ancient→cổ
    đại · Improved→cải tiến · Electric→điện · Gigantic→khổng lồ. E.g. Primitive
    Workbench→"Bàn chế tạo sơ khai", Electric Furnace→"Lò nung điện",
    Production Assembly Line→"Dây chuyền sản xuất". **Keep "Sphere" English** in
    the sphere stations (Sphere item names stay English) → "Bàn chế tạo Sphere",
    "Dây chuyền Sphere". VI page H1 = `# <VI> (<English>)`; frontmatter `name:` /
    `code:` stay English (data layer).
  - **Work-suitability NAMES stay English in VI — never translate.** The 12 work
    names (Handiwork, Watering, Farming, Mining, Lumbering, Gathering, Kindling,
    Cooling, Planting, Transporting, Generating Electricity, Medicine Production)
    keep their English name in VI link labels, tables, and prose — e.g.
    `[[handiwork|Handiwork]]` on a `.vi.md`, NOT `[[handiwork|Thủ công]]`. (VI is
    fine only in a *description* sentence, not as the name.) This is distinct
    from mechanic pages like `work-priority`, whose nav name IS translated.
- **VI table headers:** Work→Công việc · Lv→Cấp độ (both the Work table AND the
  partner-skill scaling table) · Item→Vật phẩm · Qty→SL · Chance→Tỉ lệ. Translate
  a partner-skill value header too (e.g. "Max carry +"→"Sức mang +").
- **Drop/obtain prose:** don't write "(×N, 100%)" — a 100% drop is phrased
  "chắc chắn rơi khi bắt hoặc hạ [[pal|Name]] (×N)" (EN: "Guaranteed on capture
  or defeat…"). The Drops **table** keeps the numeric `100%` column (that's data).
- **Never leave a raw slug or a generic word as the link text.** Prose links are
  always `[[slug|Full Name]]` — the entity's real name, never the slug and never
  a generic noun ("meat"→ link as the item, e.g. `[[chikipi-poultry|Thịt gà
  Chikipi]]`). Frontmatter `drops`/`dropped_by` [[slug]] stay bare (data).
- **Element value** in list tables = a colored chip: `<span class="el el-<elem>">
  <Element></span>` (attr_list doesn't work on bare table-cell text).
- When you EDIT an existing entity's frontmatter, apply the same change to its
  `.vi.md` if one exists (keep them in sync).

### 6. Verify
```
mkdocs build   # from the paldb repo root (use .venv/bin/mkdocs if you keep a local venv)
```
Plain build (NOT `--strict` — roamlinks warns on every open stub, which is
expected). A build error = malformed markdown/YAML you introduced → fix it.
Read the roamlinks warning list: it is the current stub worklist.

### 7. Report (fixed shape)
```
## Ingest report
Created:  <n> — pals/<slug>.md, items/<slug>.md, …
Updated:  <n> — <files + what merged>
Cross-links added: <count> (list the both-way pairs)
New stubs (worklist — feed these next): [[slug]], [[slug]], …
Build: ok / <error>
Not ingested (unclear/uncertain facts): <list, or none>
```

## Rules

- **Never fabricate game data.** Only record what the input gives or is
  verifiable. Uncertain fact → list under "Not ingested", don't guess.
- **Internal codes/keys are low value** — don't feature them in prose even when
  the source shows them (e.g. a partner-skill's `MaxInventoryWeight_up_…` key).
  Record the user-facing effect/number; skip the plumbing ID.
- Extend existing entities; one file per entity, no duplicates.
- Do NOT commit — leave git to the user / committer. Just leave the files staged
  is optional; report and stop.
- Ask the user only if the input is ambiguous about which entity a fact belongs
  to; otherwise proceed and note assumptions in the report.
