---
title: PalDB
---

# PalDB

Cơ sở dữ liệu Palworld. Hai đối tượng, một nguồn:

- **Người đọc** — wiki tĩnh có tìm kiếm (MkDocs Material), liên kết chéo.
- **LLM** — markdown thuần với frontmatter máy đọc được, nạp trực tiếp.

## Mục

| Mục | Nội dung |
|-----|----------|
| [Pals](pals/index.md) | Sinh vật — chỉ số, khả năng lao động, nhân giống, nơi xuất hiện |
| [Vật phẩm](items/materials/index.md) | Nguyên liệu, trang bị, đồ tiêu hao, công thức |
| [Cơ chế](mechanics/index.md) | Hệ thống: nhân giống, bắt, làm việc ở base, chiến đấu |
| [Địa điểm](locations/index.md) | Vùng, biome, bản đồ spawn |
| [Hướng dẫn](guides/index.md) | Walkthrough, tier list, chiến thuật |

## DB lớn dần thế nào

Kiến thức được nạp dần. Mỗi đợt được chuẩn hoá thành các file entity, và **liên
kết chéo dựng cả hai chiều** (Pal mới trỏ tới bố mẹ nhân giống; bố mẹ được trỏ
ngược lại). Xem `CLAUDE.md` trong repo để biết quy trình ingest.
