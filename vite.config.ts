import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-md'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// eslint-disable-next-line import/default
import VueI18n from '@intlify/vite-plugin-vue-i18n'

const r = (src: string) => resolve(__dirname, src)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({ script: { refSugar: true }, include: [/\.vue$/, /\.md$/] }),
    Unocss(),
    Pages({ extensions: ['vue', 'md'] }),
    Layouts(),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router', 'vue-i18n', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
    Markdown(),
    VueSetupExtend(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [r('locales/**')],
    }),
  ],
  resolve: {
    alias: {
      '@': r('src'),
      '@a': r('src/assets'),
      '@s': r('src/modules/pinia'),
      '@u': r('src/composables'),
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
  },
})
