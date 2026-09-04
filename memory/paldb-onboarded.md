---
name: paldb-onboarded
description: "paldb = Palworld knowledge base, platform's first static-web/doc repo (MkDocs Material); frontmatter+prose entities, [[slug]] both-way cross-links, ingest incrementally"
metadata: 
  node_type: memory
  type: project
---

Onboarded 2026-07-14. **paldb** = Palworld game knowledge base, the platform's
**first static-web / doc repo** (not a Go service). Pushed to
`github.com/vukyn/paldb` (private), added to root CLAUDE.md repo list.

**First content batch SHIPPED PR#1 (merged to main, 2026-07-15):** 6 Pals
(Lamball/Cattiva/Chikipi + Xenolord/Xenovader/Xenogard raid-boss stubs), ~30
items (materials, 6 sphere tiers Pal→Legendary, structures Ranch+Crusher),
mechanics (elements interactive chart, work-suitability + 12 work-detail pages,
work-priority), full EN/VI, 3 JS widgets (type-chart/food-meter/table-filter),
44 icon PNGs. Worklist stubs remaining: 6 sphere workstations, Coal, Pure Quartz.

- **Stack**: MkDocs Material (Python) + `mkdocs-roamlinks-plugin`. Build =
  `.venv/bin/mkdocs build`; live UI = `mkdocs serve` → http://127.0.0.1:10000 (dev_addr in mkdocs.yml; user avoids :8000 range).
  gobuild could NOT scaffold it (Go-only presets) → hand-scaffolded.
- **Content model** (user's choice): one markdown file per entity = **YAML
  frontmatter** (machine-parseable stats) **+ prose** (human). Cross-link with
  `[[slug]]` (roamlinks). Entity schemas in `templates/{pal,item,location}.md`;
  folders `docs/{pals,items,locations,mechanics,guides}/`.
- **Dual purpose**: human searchable wiki + LLM reference resource, same files.
- **Ingestion contract** (in repo CLAUDE.md): user feeds knowledge
  incrementally; I normalize into entity files, **build cross-links BOTH ways**
  (new Pal ↔ breeding parents, drops ↔ droppers, spawns ↔ locations), leave
  bare `[[slug]]` as stub/worklist markers, **never fabricate game data**.
- **GOTCHA — do NOT use `mkdocs build --strict`** as the routine gate: roamlinks
  warns on every unresolved stub `[[slug]]`, and stubs are first-class worklist
  markers, so --strict fails on intentional stubs. Use plain `mkdocs build`;
  read the warning list as the stub worklist.
- Go conventions (kuery pkg rule, clean-arch, DI, mprocs/hosts) **N/A**.
- **Icons**: `docs/assets/icons/<work|elements|items|pals|ui>/`; filename =
  entity slug (kebab), PNG/WebP square; spec in `docs/assets/icons/README.md`
  (`exclude_docs`'d). Embed via markdown image + attr_list
  `![](../assets/icons/<cat>/<name>.png){ .game-icon }` — **source-relative**
  (one up to docs root); MkDocs rewrites per page so it resolves on EN AND /vi/.
  **GOTCHA: do NOT raw `<img src="../../assets/…">`** — fixed depth 404s on /vi/
  (i18n does NOT copy assets to /vi/assets/; assets only at root, VI pages one
  level deeper). `.game-icon` = 24×24 object-fit:contain; icon-table first col
  narrowed via `:has(.game-icon)` CSS.
- **INTERNAL CODES = low priority (user feedback)**: don't document internal
  game codes/keys in prose even when shown in the source image (e.g. partner-skill
  key `MaxInventoryWeight_up_Partnerskill_PinkCat`). Record user-facing data;
  skip the plumbing IDs. (Pal `code:` frontmatter like SheepBall/PinkCat may stay
  as a quiet field, not featured in prose.)
- **ALWAYS EN+VI PAIR (user feedback)**: every paldb ingest writes BOTH
  `<name>.md` and `<name>.vi.md` by default — never EN-only. Frontmatter
  byte-identical (only prose + `title:` differ). `/pal-ingest` default = both.
- **NEVER show a raw slug in content (user feedback)**: prose `[[slug]]` renders
  the slug ("egg", "lamball") which reads wrong — always label `[[slug|Name]]`
  (tables can't use the pipe → markdown link `[Name](path.md)`). Frontmatter
  `drops`/`dropped_by` [[slug]] stay bare (data, not rendered).
- **VI item names (user feedback)**: in `.vi.md`, translate common-noun item
  names to VI (Egg→Trứng, Wool→Len) — link label + page H1 (`# Trứng (Egg)`).
  Keep **Pal proper names** and branded items English. VI Work-table headers:
  Work→Công việc, Lv→Cấp độ.
- **VI TRANSLATION (user feedback)**: translate for MEANING, not word-by-word.
  VI prose must read natural/native — rework sentence structure freely so the
  reader understands easily; a literal gloss of the EN is a defect. Keep game
  proper nouns + stat labels in English. Applies to all paldb VI files + the
  `/pal-ingest | vi` flow.
- **STYLE (user removed 3×)**: do NOT add "Referenced by every Pal via its
  `<field>:` frontmatter…" boilerplate prose to mechanic/entity pages. Keep
  actual `[[cross-links]]` (e.g. "The order Pals pick jobs is [[work-priority]]")
  but drop the frontmatter-plumbing explanation sentences. Pages = content, not
  schema plumbing narration.
- **Bilingual EN/VI** via `mkdocs-static-i18n` (suffix mode, header switcher,
  per-lang search, `fallback_to_default: true`). **EN = source of truth**
  (unsuffixed file `pals/lamball.md`); **VI = overlay `<name>.vi.md`**, optional/
  incremental (missing → shows EN). **ANTI-DRIFT RULE: frontmatter byte-identical
  across EN/VI variants — translate only prose + `title:`**; game proper nouns
  (Pal/item/element names) stay English. Widgets/mermaid copied verbatim both.
  `/pal-ingest` writes EN by default, `| vi` flag also writes .vi.md; `/pal-ask`
  reads unsuffixed EN canonically (ignores .vi.md to avoid double-count). Demo
  translated: `mechanics/elements.vi.md`. **GOTCHA: Material `navigation.instant`
  incompatible with i18n language switcher (bounces lang-switch to home) — keep
  OFF; per-page alternate links are correct, instant SPA nav was the culprit.**
- **Visualization pattern** (added when raw info got hard to read): MkDocs
  extended with (1) **mermaid** graphs (Material-native; superfences custom_fence
  in mkdocs.yml) for relationship diagrams, and (2) **self-contained vanilla-JS
  widgets** in `docs/javascripts/` loaded via `extra_javascript` — each guards on
  its own container id so global load is a no-op elsewhere, and subscribes to
  Material's `window.document$` for instant-nav. No CDN/external libs (offline).
  First widget: `type-chart.js` = interactive element khắc-hệ chart on
  `mechanics/elements.md` (`<div id="type-chart">`), styles reuse `.el-*` colors
  in `stylesheets/entity.css`. Reuse this pattern for breeding-chain graphs,
  work-suitability matrix, calculators; factor shared data to JSON when repeated.
- **Two Claude Code commands** at platform-root `.claude/commands/` (both pinned
  `model: claude-sonnet-5`):
  - `/pal-ask <question> [| fast]` — grep docs → read matched entities →
    synthesize cited answer `(pals/<slug>.md)`, never fabricate; fast-mode →
    Haiku 4.5 for single-entity lookup.
  - `/pal-ingest <raw knowledge | from <file>>` — codifies the ingestion
    contract as a repeatable procedure: extract→classify→dedup(extend not
    duplicate)→frontmatter-first→**both-way cross-links**→stub markers(worklist)→
    `mkdocs build` verify→fixed report. Never fabricates; doesn't commit.
  - User chose Claude Code commands over web-chat integration (web chat =
    future; would need a proxy for the API key since MkDocs is static).
- Onboarding scan clean (gitleaks 0). Cleanup commit removed accidentally-
  committed `.claude/` agent-memory; `.claude/` now gitignored in the repo.
