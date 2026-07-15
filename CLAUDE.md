# CLAUDE.md — paldb

Guidance for Claude Code working in the **paldb** repo.

## What this is

Palworld knowledge base. **Not a Go service** — a static-web content repo built
with MkDocs Material. Dual audience from one source:

- **Humans** — searchable cross-linked wiki (`mkdocs serve` / built to `site/`).
- **LLMs** — plain markdown with structured YAML frontmatter, ingested directly.

The platform's Go conventions (clean-arch, kuery, DI, `_test.go`, mprocs/hosts)
**do not apply here**. This is a doc repo. No compiler, no server — the build is
`mkdocs build`.

## Content model

One entity = one markdown file = **frontmatter (structured, machine-parseable)**
+ **prose (human explanation)**. Entity types and their schemas live in
`templates/`:

| Type | Folder | Schema |
|------|--------|--------|
| Pal | `docs/pals/<slug>.md` (flat) | `templates/pal.md` |
| Item | `docs/items/<sub>/<slug>.md` — `<sub>` = materials·food·spheres·ammo·consumables | `templates/item.md` |
| Structure | `docs/construction/<sub>/<slug>.md` — `<sub>` = production·pal·defenses (from `build.category`) | `templates/item.md` |
| Location | `docs/locations/<slug>.md` | `templates/location.md` |
| Mechanic (prose) | `docs/mechanics/` | free-form, no schema |
| Guide (prose) | `docs/guides/` | free-form, no schema |

- **Entities are nested by category** so the URL mirrors the nav
  (`/construction/production/mill/`, `/items/materials/wood/`). Each category
  folder has an `index.md` = its filtered listing table; add a new entity's row
  there (EN+VI). No global all-items page.
- **slug** = lowercase-kebab of the name, and = the filename. `Pal Sphere` →
  `docs/items/spheres/pal-sphere.md`. `Glob` by slug — files are nested.
- **Cross-links** use `[[slug]]` or `[[slug|label]]` — the `roamlinks` plugin
  resolves them to real page paths at build. A bare `[[slug]]` that has no file
  yet is a **stub marker**: it names something worth ingesting later, not an
  error.

## Bilingual (EN / VI)

The site is EN/VI via the `mkdocs-static-i18n` plugin (suffix mode, header
language switcher, per-language search):

- **EN is the source of truth.** An unsuffixed file (`elements.md`,
  `pals/lamball.md`) is the English/default page.
- **VI is a translation overlay.** `<name>.vi.md` beside the EN file holds the
  Vietnamese version. `fallback_to_default: true` → any page without a `.vi.md`
  shows its EN content, so VI can be filled in incrementally (no need to
  translate everything).
- **Frontmatter must stay IDENTICAL across the EN and VI variants** (same stats,
  slugs, tags, `[[links]]`). Only the **prose is translated**, plus the `title:`.
  This is the anti-drift rule — the structured data layer is language-neutral;
  translating it would let EN and VI facts diverge. Game proper nouns (Pal /
  item / element names) stay in English in both.
- Interactive widgets / mermaid blocks are copied verbatim into both variants
  (same `<div id="...">` / ```` ```mermaid ```` fence).

## Ingestion contract (how the DB grows)

The user feeds knowledge incrementally. When ingesting a drop:

1. **Normalize** each fact into the right entity file. Create the file from the
   template if it does not exist; otherwise extend the existing one — never
   duplicate an entity.
2. **Fill frontmatter first** (it is the queryable layer), then prose.
3. **Build links BOTH ways.** This is the core value. If a new Pal breeds from
   `[[lamball]]` + `[[cattiva]]`, add those combos to the new Pal AND add the
   new Pal as a known child on Lamball's and Cattiva's pages. Same for
   drops↔droppers, spawns↔locations, ingredients↔recipes.
4. **Leave stub links** for entities not yet ingested — they become the
   worklist. Do not invent stats to fill a stub.
5. **Never fabricate game data.** If a stat is unknown, omit the field or mark
   it `unknown`. Only record what the user provided or what is verifiable.
6. **Keep frontmatter valid YAML** — a broken frontmatter block breaks the build
   for that page.

## Build & verify

```bash
pip install -r requirements.txt
mkdocs serve            # preview (live wiki UI at http://127.0.0.1:10000)
mkdocs build            # verification build → site/ (gitignored)
```

`mkdocs build` is the verification step for content changes (analogous to
`go build` for the Go services): it catches broken nav and malformed pages.

**Do NOT use `--strict` as the routine gate.** The `roamlinks` plugin logs a
warning for every unresolved `[[slug]]`, and stub links are a first-class part
of the ingestion contract (they ARE the worklist — see rule 4). `--strict`
turns those intentional warnings into a failed build. So:

- **Normal build** during ingestion = plain `mkdocs build` — unresolved-stub
  warnings are expected and fine.
- Read the warning list to see which stubs still need a file (free worklist).
- Reserve `--strict` for a structural check on a snapshot with no open stubs
  (rare); it is not the day-to-day gate.

## Icons

In-game icons live under `docs/assets/icons/<category>/` (`work`, `elements`,
`items`, `pals`, `ui`) — see `docs/assets/icons/README.md` for the naming +
format spec (that README is `exclude_docs`'d, not a site page). Filename = the
entity **slug** (item/pal) or the canonical name (work/element), kebab-case,
PNG/WebP, ~square.

Embed with a **markdown image + attr_list class**, path **source-relative**:

```markdown
![](../assets/icons/<cat>/<name>.png){ .game-icon }
```

The prefix has **enough `../` to reach the docs root**, then `assets/icons/...`.
Entities are nested by category, so depth-2 pages
(`items/<sub>/<slug>.md`, `construction/<sub>/<slug>.md`, and each folder's
`index.md`) use `../../assets/icons/...`; depth-1 pages (`pals/<slug>.md`,
`mechanics/*.md`) use `../assets/...`. MkDocs rewrites the relative path to the
correct output URL **per page**, and it resolves on the `/vi/` mirror too.
**Use a markdown image, never a raw `<img>` with a hardcoded absolute-ish path.**
`.game-icon` (in `stylesheets/entity.css`) fixes the size (24×24, `object-fit:
contain`).

## Platform notes

- Deploy target TBD (static host — fly.io/pages/R2). No backend.
- `site/` and `.venv/` are gitignored — never commit the build output.
- `.code-review-graph/` is a local artifact — never commit (it is Tree-sitter
  for code; largely N/A for a markdown repo, but ignored regardless).
- This repo has its own git repo under `github.com/vukyn/paldb` like the others.
