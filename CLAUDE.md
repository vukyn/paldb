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
| Pal | `docs/pals/` | `templates/pal.md` |
| Item | `docs/items/` | `templates/item.md` |
| Location | `docs/locations/` | `templates/location.md` |
| Mechanic (prose) | `docs/mechanics/` | free-form, no schema |
| Guide (prose) | `docs/guides/` | free-form, no schema |

- **slug** = lowercase-kebab of the name, and = the filename. `Pal Sphere` →
  `docs/items/pal-sphere.md`.
- **Cross-links** use `[[slug]]` or `[[slug|label]]` — the `roamlinks` plugin
  resolves them to real page paths at build. A bare `[[slug]]` that has no file
  yet is a **stub marker**: it names something worth ingesting later, not an
  error.

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
mkdocs serve            # preview (live wiki UI at http://127.0.0.1:8000)
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

## Platform notes

- Deploy target TBD (static host — fly.io/pages/R2). No backend.
- `site/` and `.venv/` are gitignored — never commit the build output.
- `.code-review-graph/` is a local artifact — never commit (it is Tree-sitter
  for code; largely N/A for a markdown repo, but ignored regardless).
- This repo has its own git repo under `github.com/vukyn/paldb` like the others.
