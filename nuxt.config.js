const colors = require('vuetify/es5/util/colors').default

module.exports = {
  server: {
    // port: 3100, // default 3000
    port: process.env.PORT || 3100
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: "https://cdn.jsdelivr.net/npm/marked/marked.min.js" },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#1976d2' },
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/filters'
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // proxy module
    '@nuxtjs/proxy',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // baseURL: process.env.BASE_URL || 'http://localhost:3100',
    proxy: true
  },

  /*
  ** Proxy settings
  */
 proxy: {
  // '/missions?': 'http://contentplace.x1.fr/missions?',
  // 'http://localhost:3100/missions?': 'http://contentplace.x1.fr',
  '/missions': {
    target: 'http://contentplace.x1.fr/missions?client_secret=%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi&mission_status=draft',
    pathRewrite: {'^/missions': ''}
  },
  '/api/': {
    target: 'http://contentplace.x1.fr/missions?mission_status=&client_secret=%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi',
    pathRewrite: {'^/api/': ''}
  }
 },

  /*
  Server Middleware
  */
  serverMiddleware: [
    '~/server/endpoints/index'
  ],

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.accent3,
          success: colors.green.accent3
        }
      }
    }
  },
  /* Page Transitions */
  pageTransition:{
    name: 'page',
    mode: 'out-in'
  },
  /* Page Transitions ends */
  /* Layout Transitions */
  layoutTransition:{
    name: 'layout',
    mode: 'out-in'
  },
  /* Layout Transitions ends */
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
