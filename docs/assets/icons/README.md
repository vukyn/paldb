# Icons

In-game icons served by the wiki. Drop image files here and they show up on the
pages that reference them.

## Folders

| Folder | For | Filename = |
|--------|-----|-----------|
| `work/` | Work Suitability (12) | work name, kebab-case |
| `elements/` | The 9 elements | element name, lowercase |
| `items/` | Item icons | the item **slug** (matches `docs/items/<slug>.md`) |
| `pals/` | Pal portraits/icons | the pal **slug** (matches `docs/pals/<slug>.md`) |
| `ui/` | Misc UI (coins, eggs…) | descriptive kebab-case |

`ui/` must include the food-meter pips: **`food-filled.png`** and
**`food-empty.png`** (the filled/empty food icons — see the `.food-meter`
widget on Pal pages).

## Format

- **PNG** or **WebP**, transparent background, roughly **square**.
- Source ~64px is plenty (displayed at ~1.4em ≈ 20–24px via `.game-icon`).
- Keep files small (icons, not art).

## Work Suitability filenames (12)

Drop these into `work/`:

```
kindling.png              watering.png             planting.png
generating-electricity.png  handiwork.png          gathering.png
lumbering.png             mining.png               medicine-production.png
cooling.png               transporting.png         farming.png
```

## Embedding

Use a **markdown image + attr_list class**, path **source-relative** (one up to
the docs root):

```markdown
![](../assets/icons/work/kindling.png){ .game-icon }
```

MkDocs rewrites the path per output page, so it resolves on both the EN page and
the `/vi/` mirror (which is one level deeper). Do **not** use a raw `<img>` with
a fixed `../../assets/…` path — it hardcodes the depth and 404s under `/vi/`
(assets live only at the site root, not `/vi/assets/`).
