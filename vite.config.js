import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
    host: '0.0.0.0',
    proxy: {
      '^/api/v1': {
        target: 'http://myhost.fallen-angle.com:8081',
        changeOrigin: true, //开启代理
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})