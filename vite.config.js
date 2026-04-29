import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 如果你的 GitHub 仓库名是 maas-website，请取消下面一行的注释
  // base: '/maas-website/', 
})
