---
name: paldb-content-rules
description: "paldb content rules: never write 100% in prose, which structure/material/work names stay English vs are translated, and that a missing icon PNG is not an error."
metadata:
  type: project
---

Several memories merged into one topic file to keep the index readable. Each section below is the original entry, unedited.

## paldb-100pct-prose-rephrase

In paldb entity prose (EN + VI), never write a raw "100%" for a guaranteed drop.
Rephrase for natural reading:
- **EN:** "Guaranteed drop when you capture or defeat [[pal|Name]] (×N)."
- **VI:** "Chắc chắn rơi khi bắt hoặc hạ gục [[pal|Name]] (×N)."

The Drops/obtain **table** keeps the numeric `100%` column (that's data) and
frontmatter `chance: 100%` stays — only PROSE gets rephrased.

**Why:** "(×N, 100%)" reads like raw data, not natural language; user wants prose
easy to read/convey.
**How to apply:** on every ingest and on review, grep prose for `100%` outside
tables/frontmatter and rephrase. Rule already in `.claude/commands/pal-ingest.md`.
See also [[paldb-content-rules]], [[paldb-onboarded]].

## paldb-vi-structure-names

In paldb `.vi.md` pages, **production structure names ARE translated** (opposite
of work-suitability names, which stay English — see [[paldb-content-rules]]).
Translate the head noun + its qualifier:

- Workbench → **Bàn chế tạo** · Assembly Line → **Dây chuyền** · Furnace →
  **Lò nung** · Workshop → **Xưởng**
- qualifiers: Primitive→sơ khai · High Quality→cao cấp · Advanced→nâng cao ·
  Production→sản xuất · Ancient→cổ đại · Improved→cải tiến · Electric→điện ·
  Gigantic→khổng lồ
- e.g. Primitive Workbench→"Bàn chế tạo sơ khai", Production Assembly Line→"Dây
  chuyền sản xuất", Electric Furnace→"Lò nung điện", Advanced Workshop→"Xưởng nâng
  cao".
- **Keep "Sphere" English** in sphere stations (sphere item names are English):
  "Bàn chế tạo Sphere", "Dây chuyền Sphere", "Dây chuyền Sphere nâng cao".

Applies to VI H1 (`# <VI> (<English>)`), all `[[slug|label]]` / `[label](path)`
link labels, index rows, and prose mentions. Frontmatter `name:` + `code:` stay
English (data layer, byte-identical rule). Rule also in `.claude/commands/pal-ingest.md`.

## paldb-vi-material-names-english

In paldb VI pages, **not every material name is translated** — several stay
English in the VI index label AND the VI page H1 (`# Leather`, not `# Da thuộc`),
with only the prose translated. Confirmed by the user: "dịch từ Bone" — translate
Leather the way Bone is done = keep the name English.

English-kept precedents: **Bone, Leather, Aquatic Pal Fluids, Soralite Ingot,
Coralum Ingot, Mythical Wood, World Tree Holy Water**.
Translated precedents: Wood→Gỗ, Stone→Đá, Fiber→Sợi thực vật, Ingot→Thỏi Đồng,
Cement→Xi Măng, Paldium Fragment→Mảnh Paldium, Wool→Len, Egg→Trứng.

**Why:** the ingest command's glossary lists only *some* names to translate; the
repo keeps exotic/loanword material names English. Blindly applying the glossary
(or over-translating) drifts from existing pages.

**How to apply:** before writing a VI label/H1 for a material, grep the sibling's
existing VI file or `items/materials/index.vi.md` for how a comparable material
is labeled. If it's English there, keep the new one English. Frontmatter
`name:`/`slug:` always stay English regardless (data layer). See [[paldb-content-rules]]
(structures DO translate) and [[paldb-content-rules]] (work names stay English).

## paldb-vi-work-names-english

In paldb `.vi.md` pages, the 12 **work-suitability names stay English** — never
translate them. Handiwork, Watering, Farming, Mining, Lumbering, Gathering,
Kindling, Cooling, Planting, Transporting, Generating Electricity, Medicine
Production. Link labels use the English name: `[[handiwork|Handiwork]]`, NOT
`[[handiwork|Thủ công]]`. VI is fine only inside a *description* sentence, not
as the work's name.

**Why:** user checked /items/high-quality-workbench and disliked "Thủ công" —
work names are game proper nouns like Pal names.
**How to apply:** on VI ingest, keep work names English in labels/tables/prose.
Distinct from mechanic pages (e.g. `work-priority` nav → "Ưu tiên công việc" IS
translated). Glossary rule now in `.claude/commands/pal-ingest.md`. See also
[[paldb-onboarded]], [[demo-mock-source-of-truth]].

## paldb-icons-added-gradually

paldb entity icons (`docs/assets/icons/<cat>/<slug>.png`) are **real in-game
assets the user adds gradually**, on a separate cadence from content ingest — an
entity's markdown (frontmatter + prose) lands first; its icon may arrive later.

**How to apply:**
- A missing icon PNG is NOT a placeholder or an error — don't flag it as "icon
  pending / assumed placeholder" in ingest reports, and never delete/second-guess
  committed icon files.
- On ingest, keep emitting the `![](../assets/icons/<cat>/<slug>.png){ .game-icon }`
  reference (mkdocs build warns the target is missing — that's expected, harmless,
  like a `[[stub]]` link). The image resolves once the user drops the PNG in.

See also [[paldb-onboarded]], [[demo-mock-source-of-truth]].
