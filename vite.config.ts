import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue(), DefineOptions()]
});
