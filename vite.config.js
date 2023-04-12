import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: 'configs',
  plugins: [vue()],
  server: {
    fs: {
      strict: false
    },
    host: '0.0.0.0',
    port: 4000,
    strictPort: true
  },
  resolve: {
    alias: [
      {
        find: /^@(?=\/)/,
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  build: {
    chunkSizeWarningLimit: 2048
  }
})
