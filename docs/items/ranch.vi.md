---
entity: item
name: Ranch
slug: ranch
category: structure
code: MonsterFarm
build:
  category: Pal
  tech_level: 5
  build_work: 15000
  ingredients:
    - item: [[wood]]
      qty: 30
    - item: [[stone]]
      qty: 20
    - item: [[fiber]]
      qty: 30
defense: 3
worker_max: 4
tags: [item, structure]
---

# Trang trại (Ranch)

> Nông trại nuôi các Pal kiểu cừu và gia cầm. Gán một Pal có partner skill phù
> hợp là nó sẽ đều đặn tạo ra vật phẩm.

Một công trình ở căn cứ. Cần khả năng [Farming](../mechanics/work/farming.md) để
vận hành; chứa tối đa **4** Pal làm việc. Defense 3.

## Sản xuất

Gán một Pal có partner skill thuộc dạng trang trại; nó sẽ định kỳ cho ra vật phẩm của
kỹ năng đó.

| Pal | Cho ra | Qua skill |
|-----|--------|-----------|
| [Lamball](../pals/lamball.md) | [Len](wool.md) | Fluffy Shield |
| [Chikipi](../pals/chikipi.md) | [Trứng](egg.md) | Egg Layer |

## Chế tạo

Mở khoá ở **Technology Lv 5**. Công sức xây: 15000 ([[handiwork|Handiwork]]).

| Nguyên liệu | SL |
|-------------|:--:|
| [Gỗ](wood.md) | 30 |
| [Đá](stone.md) | 20 |
| [Sợi thực vật](fiber.md) | 30 |
