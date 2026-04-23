---
description: 初始化專案環境
---

請協助初始化 Vue 3 專案環境。請讀取 **@vue3.md** 與 **Global Rules**：

### 1. **依賴安裝**

- 提供安裝 `vue`, `pinia`, `typescript`, `sass` 的指令。

### 2. **目錄結構**

- 在 `src/` 建立符合 **Global Rules** 的資料夾：`assets/css`, `assets/img`, `assets/js`, `types`, `components/common`。

### 3. **基礎規範檔案**

- **SCSS：** 產出符合 Global 定義的 `_space.scss`, `_color.scss`, `_typography.scss` 以及入口 `index.scss`。
- **資源：** 資源管理 (src/assets/js/img.ts)：
  **自動化維護**： 必須建立一個統一的資源導出模組。
  格式規範\*\*： 必須使用 export const 以物件或常量形式導出所有圖片路徑。
  路徑指引： AI 在分析 UI 時，若偵測到圖片需求，必須優先更新此檔案，確保專案中沒有任何 Hard-coded 的 src="/assets/img/..." 字串，所有引用皆透過 import 此模組實現。

### 4. **Vite 配置**

- 配置 `@` 路徑別名與 SCSS 全域自動注入。

### 5. **執行檢查**

- [ ] 命名是否符合全域小駝峰？
- [ ] 目錄結構是否符合 Global 定義？
