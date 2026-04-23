---
trigger: always_on
---

# Framework: Vue 3 + TypeScript (穩定相容版)

- **瀏覽器環境與相容性：**
  - **目標環境：** 假設運行於 Chrome 90，採用「Vue 2 友善」保守模式。
  - **核心限制：** 避免使用 Vue 3 獨有特性（如 Suspense, Fragments），確保邏輯可逆向理解。
  - **狀態管理：** Pinia 需保持結構扁平，以對齊 Vuex 邏輯。

- **開發模式：** 強制使用 `<script setup lang="ts">`。

- **程式碼組織順序 (Strict 1-7)：**
  1. `defineProps` (配合 `withDefaults`)
  2. `defineEmits`
  3. `ref / reactive` (狀態宣告)
  4. `computed`
  5. `watch`
  6. `Functions` (業務邏輯)
  7. `Lifecycle Hooks`

- **類型檢查與驗證：**
  - 必須使用 **TS Interface** 定義所有複雜資料結構，嚴禁使用 `any`。
  - **繼承規範：** 命名與資源引用請參閱 **Global Rules**。