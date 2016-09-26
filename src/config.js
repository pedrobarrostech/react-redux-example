require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Artwork Tattoo',
    description: 'Studio',
    head: {
      titleTemplate: 'Artwork Tattoo: %s',
      meta: [
        {name: 'description', content: 'Studio'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Artwork Tattoo'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Artwork Tattoo'},
        {property: 'og:description', content: 'Studio'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@pedrobarrostech'},
        {property: 'og:creator', content: '@pedrobarrostech'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
