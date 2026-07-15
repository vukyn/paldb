---
entity: pal
paldex: 1
name: Lamball
slug: lamball
code: SheepBall
element: [neutral]
rarity: 1
size: xs
food_consumption: 1         # 1-10 pips (how much it eats)
work_suitability:
  handiwork: 1
  transporting: 1
  farming: 1
partner_skill:
  name: Fluffy Shield
  effect: When activated, equips to the player and becomes a shield. Sometimes drops Wool when assigned to Ranch.
stats:
  health: 70
  food: 100
  melee_attack: 70
  attack: 70
  defense: 70
  work_speed: 100
  support: 100
  stamina: 100
capture_rate_correct: 1.5
male_probability: 50
egg: Common Egg
gold_coin: 421
movement:
  slow_walk: 23
  walk: 40
  run: 400
  ride_sprint: 550
  transport: 160
  swim: 120
  swim_dash: 165
level_80:
  health: [3700, 4540]
  attack: [520, 646]
  defense: [470, 596]
drops:
  - item: [[wool]]
    qty: "1-3"
    chance: 100%
  - item: [[lamball-mutton]]
    qty: "1"
    chance: 100%
breeding:
  rank: 3050
  known_combos: []
spawns: []
tags: [pal, neutral]
---

# Lamball <small>#1</small>

> Cứ leo lên đồi là kiểu gì cũng lăn ngược xuống. Mỗi lần như vậy nó lại choáng
> váng, nằm im bất động — dễ bắt, dễ hạ. Cũng vì thế mà nó tụt xuống tận đáy
> chuỗi thức ăn.

Pal hệ [[elements|Neutral]] cơ bản nhất, mở màn Paldeck (#1) — cỡ XS, độ hiếm 1.

## Thức ăn

<span class="food-meter" data-value="1" data-max="10"></span>

Mức tiêu thụ **1 / 10** — rất thấp, nuôi cực rẻ.

## Kỹ năng đồng hành

**Fluffy Shield** — khi kích hoạt, Lamball bám vào người chơi và hóa thành một
tấm khiên. Thả ở [[ranch|Trang trại]] thì thỉnh thoảng nó rụng [[wool|Len]], và càng lên cấp kỹ
năng thì cho càng nhiều:

| Cấp độ | Len | Tỉ lệ |
|:--:|------|:-----:|
| 1 | ×1 | 100% |
| 2 | ×1–2 | 100% |
| 3 | ×1–3 | 100% |
| 4 | ×1–4 | 100% |
| 5 | ×1–5 | 100% |
| 6 | ×1–6 | 100% |
| 7 | ×1–7 | 100% |
| 8 | ×1–8 | 100% |
| 9 | ×2–9 | 100% |
| 10 | ×3–10 | 100% |

## Công việc & dùng ở base

|  | Công việc | Cấp độ |
|:----:|------|:--:|
| ![](../assets/icons/work/handiwork.png){ .game-icon } | [Handiwork](../mechanics/work/handiwork.md) | 1 |
| ![](../assets/icons/work/transporting.png){ .game-icon } | [Transporting](../mechanics/work/transporting.md) | 1 |
| ![](../assets/icons/work/farming.png){ .game-icon } | [Farming](../mechanics/work/farming.md) | 1 |

Cả ba đều mới cấp 1 — đầu game Lamball gần như chẳng có thế mạnh lao động nào.
Bù lại, nhờ Farming nó tạo được [[wool|Len]] khi thả vào [[ranch|Trang trại]] — đây mới là giá trị
thật sự của nó.

## Chiến đấu

Là hệ Neutral nên nó [[elements|chỉ sợ Dark]] và không khắc được hệ nào. Chỉ số
gốc đều thấp và bằng nhau (Health/Attack/Defense 70); lên tới cấp 80 cũng chỉ đạt
Health 3700–4540, Attack 520–646, Defense 470–596 — thuộc hạng yếu nhất khi đánh
nhau.

## Nhân giống

CombiRank 3050. Chưa ghi nhận cặp bố mẹ nào cho ra Lamball.

## Vật phẩm rơi

Khi bắt hoặc hạ:

|  | Vật phẩm | SL | Tỉ lệ |
|:----:|----------|:--:|:-----:|
| ![](../assets/icons/items/wool.png){ .game-icon } | [Len](../items/materials/wool.md) | ×1–3 | 100% |
| ![](../assets/icons/items/lamball-mutton.png){ .game-icon } | [Thịt cừu Lamball](../items/food/lamball-mutton.md) | ×1 | 100% |

## Nơi tìm

Chưa ghi nhận nơi xuất hiện.
