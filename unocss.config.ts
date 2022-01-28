import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      collections: {
        logos: () => import('@iconify-json/logos/icons.json').then(i => i.default as any),
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default as any)
      },
      scale: 1.2
    }),
    presetWebFonts({
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true
          },
          {
            name: 'sans-serif',
            provider: 'none'
          }
        ]
      }
    })
  ],
  layers: {
    default: 1,
    modele: 2
  },
  rules: [
    ['pr', { position: 'relative' }, { layer: 'modele' }],
    ['pa', { position: 'absolute' }, { layer: 'modele' }]
  ],
  shortcuts: [
    ['f-c', 'flex justify-center items-center'],
    ['f-c-c', 'f-c flex-col'],
    ['p-c', 'pa top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2']
  ]
})
