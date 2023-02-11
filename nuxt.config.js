export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'pl_PL'
    },
    title: 'RADEC24 - Produkcja domów modułowych. FASTHOME.com.pl',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'RADEC24 - Produkcja domów modułowych. FASTHOME.com.pl' },
      { name: 'og:description', content: 'RADEC24 - Produkcja domów modułowych. FASTHOME.com.pl' },
      { property: 'og:locale', content: 'pl_PL'},
      { property: 'og:title', content: 'Radec24 - Produkcja domów modułowych. FASTHOME.com.pl'},
      { property: 'og:type', content: 'website'},
      { property: 'og:image', content: 'https://radec24.vercel.app/thumbnail.jpg'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuesax/dist/vuesax.css',
    'boxicons/css/boxicons.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vuesax',
    '@/plugins/vimg'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
