import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // lintOnStart: true, // dev启动时校验（保存时做了校验这里就不用了）
      include: ['src/*.ts', 'src/*.vue', 'src/**/*.vue', 'src/**/*.ts'],
      exclude: ['./node_modules/**'],
      cache: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        // 此处修改为要被预处理的scss文件地址
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    cors: true,
    port: 8080,
    open: false, //自动打开
    proxy: {
      // 这里的ccc可乱写, 是拼接在url后面的地址 如果接口中没有统一的后缀可自定义
      // 如果有统一后缀, 如api, 直接写api即可, 也不用rewrite了
      '^/api': {
        target: 'http://127.0.0.1:3000', // 真实接口地址, 后端给的基地址
        changeOrigin: true, // 允许跨域
        secure: false, //关键参数，不懂的自己去查
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
