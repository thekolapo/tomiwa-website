export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Adetomiwa Isiaka - Content Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `I'm Adetomiwa Isiaka, a product marketer, content strategist, copywriter & user-centric marketing evangelist.`,
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://adetomiwa.me/' },
      { property: 'og:title', content: 'Adetomiwa Isiaka - Content Developer' },
      {
        property: 'og:image',
        content: 'https://www.adetomiwa.me/seo-image.png',
      },
      {
        property: 'og:description',
        content: `I'm Adetomiwa Isiaka, a product marketer, content strategist, copywriter & user-centric marketing evangelist.`,
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://adetomiwa.me/' },
      {
        property: 'twitter:title',
        content: 'Adetomiwa Isiaka - Content Developer',
      },
      {
        property: 'twitter:description',
        content: `I'm Adetomiwa Isiaka, a product marketer, content strategist, copywriter & user-centric marketing evangelist.`,
      },
      {
        property: 'twitter:image',
        content: 'https://www.adetomiwa.me/seo-image.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  styleResources: {
    scss: [
      '~/assets/scss/core/_variables.scss',
      '~/assets/scss/mixins/_mediaqueries.scss',
    ],
  },
}
