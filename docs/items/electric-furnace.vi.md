---
entity: item
name: Electric Furnace
slug: electric-furnace
category: structure
code: BlastFurnace3
refines: [[pal-metal-ingot]]
build:
  category: Production
  tech_level: 44
  build_work: 100000
  ingredients:
    - item: [[refined-ingot]]
      qty: 50
    - item: [[bio-battery]]
      qty: 4
    - item: [[polymer]]
      qty: 20
    - item: [[cryogenic-coolant]]
      qty: 10
operate_suitability: kindling 1
energy: 500 per sec
energy_type: Electric
sanity: -0.15
defense: 4
tags: [item, structure]
---

# Lò nung điện (Electric Furnace)

> Lò nung chạy điện — luyện [[pal-metal-ingot|Pal Metal Ingot]]. Cần điện nhưng
> xử lý nhanh hơn nhiều. Vẫn cần một Pal hệ lửa để nhóm lửa.

Lò nung bậc cao, và là lò duy nhất làm được [[pal-metal-ingot|Pal Metal Ingot]].
Nó tiêu 500 điện/giây nhưng luyện nhanh hơn hẳn các lò đá. Cần kỹ năng
[[kindling|Kindling]]. Hao một chút tinh thần (SAN −0.15); phòng thủ 4.

## Luyện ra

- [[pal-metal-ingot|Pal Metal Ingot]] — từ [[ore|Quặng Đồng]] + [[pure-quartz|Pure Quartz]] + [[paldium-fragment|Paldium Fragment]].

## Xây dựng

Mở tại **Công nghệ Cấp 44**. Công sức xây: 100000 ([[handiwork|Handiwork]]).
Cần nguồn điện để hoạt động.

|  | Nguyên liệu | SL |
|:--:|-------------|:--:|
| ![](../assets/icons/items/refined-ingot.png){ .game-icon } | [Refined Ingot](refined-ingot.md) | 50 |
| ![](../assets/icons/items/bio-battery.png){ .game-icon } | [Bio Battery](bio-battery.md) | 4 |
| ![](../assets/icons/items/polymer.png){ .game-icon } | [Polymer](polymer.md) | 20 |
| ![](../assets/icons/items/cryogenic-coolant.png){ .game-icon } | [Dung Dịch Làm Lạnh](cryogenic-coolant.md) | 10 |
