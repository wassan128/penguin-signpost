const { description } = require('../../package')

module.exports = {
  base: '/penguin-signpost/',
  title: 'ペンギンの道標',
  description: 'wassan128の技術だったり技術じゃなかったりするブログです',

  head: [
    ['meta', { name: 'theme-color', content: '#3297bf' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    logo: 'https://pbs.twimg.com/profile_images/1245187472155389952/M_TAmpP5_400x400.jpg',
    repo: 'wassan128/penguin-signpost',
    editLinks: false,
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: 'auto',
    sidebarDepth: 6,
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

