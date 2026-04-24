import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 這裡只注入「純定義」檔案，確保每個 .vue 都能讀到變數，但不會產生重複 CSS
        additionalData: `@import "@/assets/css/shared.scss";`
      }
    }
  }
})
