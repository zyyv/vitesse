import App from './App.vue'
import { createCtx } from './composables'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/styles/index.css'
import type { GlobModule } from './types'

createCtx(App, app => Object.values(import.meta.glob('./modules/*/index.ts', { eager: true })).forEach(i => (i as GlobModule).install?.(app)))
