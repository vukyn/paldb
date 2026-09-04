---
name: paldb-onboarded
description: paldb = doc/static-web repo (Palworld MkDocs knowledge base), NOT a Go service — Go platform conventions N/A
metadata:
  type: project
---

paldb is a **doc / static-web content repo**, not a Go service: a Palworld game knowledge base built with **MkDocs Material** (Python tooling via requirements.txt). One markdown file per game entity (Pal/item/location) with YAML frontmatter stats + prose, cross-linked with `[[slug]]` wikilinks. Dual audience: human static wiki + LLM reference. Onboarded 2026-07-14, classified `doc`.

**Why:** Onboarded fresh, hand-scaffolded in place (git init + files staged, NO commit history, NO remote yet — both expected, not defects). No gobuild preset (gobuild only does Go presets).

**How to apply:** Go platform rules do NOT apply to paldb — no `pkg/` (kuery rule N/A), no clean-arch layout, no go.mod, no mprocs.yaml / make-hosts entry. Don't flag these as missing. Build artifact is `site/` (gitignored, must never be committed). `.gitignore` already covers `site/`, `.venv/`, `__pycache__/`, `.code-review-graph/`. Only hygiene gap at onboard: no LICENSE. Still missing from root CLAUDE.md repo list until the orchestrator adds it. Scan posture: gitleaks-only (no compiled-dependency code to vuln-scan). Related: [[sgo-onboarded]] pattern of standalone/non-standard repos.
