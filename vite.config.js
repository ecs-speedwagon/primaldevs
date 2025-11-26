import { defineConfig } from 'vite'
import glob from 'glob'
import injectHTML from 'vite-plugin-html-inject'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  base: '/primaldevs/', 


  esbuild: false,  


 

  define: {
    global: {},
  },

  root: 'src',

  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
    emptyOutDir: true,
    target: 'esnext'
  },

  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
})