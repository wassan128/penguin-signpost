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
      logo: 'https://avatars1.githubusercontent.com/u/9693997?s=460&u=4ea091df8eef9b61b224c0746f6aed6cd472ca77&v=4',
    repo: '',
    editLinks: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Archives', link: '/archives/' },
    ],
    sidebar: 'auto',
    sidebarDepth: 6,
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

