const pkg = require('./package');
const seo = require('./seo');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: seo.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: seo.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

    /*
  ** Global CSS
  */
 css: [
    
  // SCSS file in the project
   '@/assets/css/main.scss',
   { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/ga.js', ssr: false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [

    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faDollarSign']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faLinkedin', 'faBehanceSquare','faInstagram','faGithubSquare']
        }
      ]
    }]

    
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },



  /*
  ** Build configuration
  */
  build: {
    postcss: {
      'autoprefixer': {
        browsers: ['last 2 versions', 'ie >= 9']
      },
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
            fix : true
          }
        })
      }
    }
  }
}
