# PalDB

Palworld knowledge base — a cross-linked wiki that serves **humans** (searchable
static site) and **LLMs** (plain markdown with structured frontmatter) from the
same source files.

## What it is

- **Static web** built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).
- Every game entity (Pal, item, location) is **one markdown file**: YAML
  frontmatter for machine-parseable stats + prose for explanation.
- Entities cross-link with `[[slug]]` wikilinks (resolved by the roamlinks
  plugin), so the whole DB is a traversable graph.
- Knowledge is added incrementally; each entry links back to related ones both
  ways.

## Layout

```
docs/
  index.md          # home
  pals/             # creature entities  (schema: templates/pal.md)
  items/            # item entities       (schema: templates/item.md)
  locations/        # location entities   (schema: templates/location.md)
  mechanics/        # prose: game systems (breeding, capture, work…)
  guides/           # prose: walkthroughs, tier lists
templates/          # entity schemas (NOT built into the site)
mkdocs.yml          # site + plugin config
requirements.txt    # mkdocs-material + roamlinks
```

## Develop

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve          # live preview at http://127.0.0.1:10000
mkdocs build          # static site → site/ (gitignored)
```

## Add an entity

Copy the matching template into the section folder and fill it in:

```bash
cp templates/pal.md docs/pals/lamball.md
```

Then wire its `[[slug]]` links, and add back-links from the entities it
references. See `CLAUDE.md` for the full ingestion contract.
