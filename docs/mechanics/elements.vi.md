---
title: Nguyên tố
tags: [mechanic, element]
---

# Nguyên tố (Elements)

Palworld có **9 nguyên tố**. Mỗi Pal mang một hoặc hai nguyên tố, và đòn đánh
cũng có nguyên tố. Đòn *khắc* (super-effective) với nguyên tố của mục tiêu gây
thêm sát thương (và ngược lại: mục tiêu *yếu trước* nguyên tố đó).

## Bảng khắc hệ tương tác

Bấm (hoặc rê chuột) vào một nguyên tố để xem nó khắc gì và bị gì khắc — xanh =
khắc (mạnh hơn), đỏ = yếu trước.

<div id="type-chart"></div>

## Cách đọc

Bảng gồm hai cấu trúc (mũi tên = khắc):

```mermaid
graph LR
  Electric --> Water --> Fire --> Grass --> Ground --> Electric
  Fire --> Ice --> Dragon --> Dark --> Neutral

  classDef electric fill:#d8a800,stroke:#d8a800,color:#fff
  classDef water fill:#2a72c9,stroke:#2a72c9,color:#fff
  classDef fire fill:#e25822,stroke:#e25822,color:#fff
  classDef grass fill:#3fa34d,stroke:#3fa34d,color:#fff
  classDef ground fill:#a1704a,stroke:#a1704a,color:#fff
  classDef ice fill:#4ec3d9,stroke:#4ec3d9,color:#fff
  classDef dragon fill:#7b4fd8,stroke:#7b4fd8,color:#fff
  classDef dark fill:#5a3a7a,stroke:#5a3a7a,color:#fff
  classDef neutral fill:#8a8f98,stroke:#8a8f98,color:#fff

  class Electric electric
  class Water water
  class Fire fire
  class Grass grass
  class Ground ground
  class Ice ice
  class Dragon dragon
  class Dark dark
  class Neutral neutral
```

- **Vòng 5 nguyên tố** (kéo-búa-bao):
  Electric → Water → Fire → Grass → Ground → Electric.
- **Chuỗi thẳng** rẽ từ Fire:
  Fire → Ice → Dragon → Dark → Neutral.

Vậy **Fire** là nguyên tố duy nhất khắc được hai nguyên tố khác (Grass và Ice),
còn **Neutral** không khắc nguyên tố nào (chỉ có điểm yếu — Dark).

!!! note "Nguồn"
    Dữ liệu khắc hệ lấy từ bảng nguyên tố trong game (mũi tên = khắc). Chiều "yếu
    trước" suy ngược từ các mũi tên đó. Không ghi hệ số sát thương — bảng chỉ thể
    hiện quan hệ, không phải con số.
