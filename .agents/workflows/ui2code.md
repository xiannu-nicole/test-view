---
description: 視覺轉代碼。適用於從截圖出發的開發任務。
---

請讀取 **Global Rules** 與 **@vue3.md** 執行以下開發任務：

### 1. **分析與建模**
- **結構分析：** 識別 UI 元素並提供組件拆分建議。
- **數據建模：** 定義 **TS Interface**（遵守全域小駝峰命名）。

### 2. **代碼實作**
- **順序規範：** 嚴格執行 `vue3.md` 的 **1~7 排序**。
- **技術細節：** 使用 `<script setup>`, `withDefaults`, 嚴禁 `any`。

### 3. **樣式與資源 (繼承 Global Rules)**
- **資源：** 圖片與 Icon 必須從 `@/assets/js/img.ts` 引入。
- **樣式：** 100% 變數化（$space, $color, $typography），嚴禁硬編碼。

### 4. **輸出檢查 (Final Check)**
回覆末尾請條列核對：
「已確認符合：繁體中文、小駝峰命名、SCSS 變數引用、1~7 程式碼排序、Chrome 90 保守模式。」