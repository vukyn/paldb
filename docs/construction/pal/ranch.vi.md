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

Một công trình ở căn cứ. Cần khả năng [Farming](../../mechanics/work/farming.md) để
vận hành; chứa tối đa **4** Pal làm việc. Phòng thủ 3.

## Sản xuất

Gán một Pal có partner skill thuộc dạng trang trại; nó sẽ định kỳ cho ra vật phẩm của
kỹ năng đó.

| Pal | Cho ra | Qua skill |
|-----|--------|-----------|
| [Lamball](../../pals/lamball.md) | [Len](../../items/materials/wool.md) | Fluffy Shield |
| [Cremis](../../pals/cremis.md) | [Len](../../items/materials/wool.md) | Fluffy Wool |
| [Chikipi](../../pals/chikipi.md) | [Trứng](../../items/food/egg.md) | Egg Layer |
| [Vixy](../../pals/vixy.md) | [Pal Sphere](../../items/spheres/pal-sphere.md), Đồng Vàng, Mũi Tên, Xương | Dig Here! |
| [Sootseer](../../pals/sootseer.md) | [Xương](../../items/materials/bone.md) | Grave Robber |
| [Depresso](../../pals/depresso.md) | [Tuyến Nọc Độc](../../items/materials/venom-gland.md) | Caffeine Inoculation |
| [Vaelet](../../pals/vaelet.md) | nhiều loại [hạt giống](../../items/materials/tomato-seeds.md) | Purification of Gaia |
| [Beegarde](../../pals/beegarde.md) | [Mật Ong](../../items/food/honey.md) | Worker Bee |

## Chế tạo

Mở khoá ở **Công nghệ Cấp 5**. Công sức xây: 15000 ([[handiwork|Handiwork]]).

|  | Nguyên liệu | SL |
|:--:|-------------|:--:|
| ![](../../assets/icons/items/wood.png){ .game-icon } | [Gỗ](../../items/materials/wood.md) | 30 |
| ![](../../assets/icons/items/stone.png){ .game-icon } | [Đá](../../items/materials/stone.md) | 20 |
| ![](../../assets/icons/items/fiber.png){ .game-icon } | [Sợi thực vật](../../items/materials/fiber.md) | 30 |
