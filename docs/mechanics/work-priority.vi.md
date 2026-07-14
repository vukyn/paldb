---
title: Ưu tiên công việc
tags: [mechanic, work]
---

# Ưu tiên công việc (Work Priority)

Thứ tự Pal chọn việc để làm tiếp ở căn cứ. **Số càng nhỏ, ưu tiên càng cao** —
khi một Pal đang gánh nhiều việc cùng lúc, nó làm việc có số nhỏ nhất trước. Đừng
nhầm với [[work-suitability|Khả năng lao động]] (Pal *biết làm* việc gì): còn đây là thứ tự cố định
*giữa* các việc.

Tên trong ngoặc là mã việc nội bộ của game (internal ID). Một việc có thể xuất
hiện nhiều lần dưới các biến thể khác nhau (ví dụ nhiều kiểu `Transport`), mỗi
biến thể mang một mức ưu tiên riêng.

## Bảng ưu tiên

| Ưu tiên | Task | Internal ID |
|:-------:|------|-------------|
| 1 | Defense | `Defense` |
| 2 | Aid | `ReviveCharacter` |
| 2 | Extinguish | `ExtinguishBurn` |
| 3 | Construction | `Architecture` |
| 4 | DedicatedWork01 | `DedicatedWork01` |
| 5 | Grazing | `MonsterFarm` |
| 6 | Generating Electricity | `GenerateEnergy` |
| 7 | Repair | `RepairBuildObject` |
| 8 | Refinement | `Smelting` |
| 8 | Kindling | `Ignition` |
| 9 | Cooking | `Cooking` |
| 10 | Harvest | `FarmHarvest` |
| 10 | Transport | `TransportFoodItemInBaseCamp` |
| 11 | Planting | `Seeding` |
| 11 | Watering | `Watering_Farm` |
| 12 | Medicine Production | `ProductMedicine` |
| 12 | Watering | `Watering` |
| 13 | Handiwork | `ConvertItem` |
| 13 | Farming | `ProductItem` |
| 14 | Mining | `ProductResource_Mining` |
| 14 | Lumbering | `ProductResource_Deforest` |
| 15 | Mining | `ProductResource_Mining_OnFacility` |
| 15 | Lumbering | `ProductResource_Deforest_OnFacility` |
| 16 | Transport | `TransportDisposableItemInBaseCamp` |
| 17 | Transport | `TransportItemInBaseCamp` |
| 18 | Gathering | `CollectResourcePickable` |
| 18 | Harvest | `HarvestLevelObject` |
| 19 | Cool | `Cool` |

!!! note "Nguồn"
    Giá trị lấy từ danh sách Work Priority trong game ("giá trị nhỏ = ưu tiên
    cao"). Internal ID ghi nguyên văn. Các task tương ứng với các việc ở
    [[work-suitability|Khả năng lao động]].
