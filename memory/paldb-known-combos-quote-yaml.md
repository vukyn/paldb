---
name: paldb-known-combos-quote-yaml
description: "paldb breeding.known_combos frontmatter entries MUST be quoted — leading [[ is invalid YAML, MkDocs silently dumps whole frontmatter into page body (build does NOT error)"
metadata: 
  node_type: memory
  type: feedback
---

In paldb Pal frontmatter, `breeding.known_combos` entries **must be quoted**:

```yaml
  known_combos:
    - "[[fuack]] + [[flambelle]]"   # ✅ quoted
    # - [[fuack]] + [[flambelle]]   # ❌ invalid YAML
```

**Why:** unquoted, YAML reads the leading `[[` as a flow-sequence and errors on
the ` + [[...]]` scalar that follows. When frontmatter YAML fails, **MkDocs
silently renders the entire frontmatter block as page body** (drops/breeding/tags
leak as visible text + bullet lists) — and **`mkdocs build` does NOT report an
error**, so it ships unnoticed.

**How to apply:**
- Always quote `known_combos` entries (any frontmatter scalar starting with `[`).
- The `templates/pal.md` schema now shows the quoted form — copy it.
- Plain `mkdocs build` won't catch this. To verify a Pal with combos, parse its
  frontmatter with `yaml.safe_load`, or grep the built HTML: `known_combos`
  appearing in `site/.../index.html` means the block leaked.
- Fixed 2026-07-16 on fuack-ignis + celaray-lux (EN+VI). See [[paldb-content-rules]].
