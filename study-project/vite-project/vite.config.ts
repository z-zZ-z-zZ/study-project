import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: `@import "./src/utils/bem.scss";`  //scss 全局引入需要在这里引入
      }
    }
  }
})
