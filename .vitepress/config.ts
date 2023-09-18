import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CivMC Wiki",
  description: "CivMC Wiki",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      { text: 'Getting Started', link: '/pages/getting-started'},
      { text: 'Change Log', link: '/pages/changelog'},
      {
        text: 'Plugins',
        items: [
          { text: 'Essential', link: 'pages/plugins/essential/', collapsed: true, items: [
            { text: 'NameLayer', link: 'pages/plugins/essential/namelayer' },
            { text: 'Citadel', link: 'pages/plugins/essential/citadel' },
            { text: 'ExilePearl', link: 'pages/plugins/essential/exilepearl' },
          ]},
          { text: 'Unique', link: 'pages/plugins/unique/', collapsed: true, items: [
            { text: 'Hiddenore', link: 'pages/plugins/unique/hiddenore' },
            { text: 'Factorymod', link: 'pages/plugins/unique/factorymod' },
            { text: 'Finale', link: 'pages/plugins/unique/finale' },
            { text: 'JukeAlert', link: 'pages/plugins/unique/jukealert' },
            { text: 'Bastions', link: 'pages/plugins/unique/bastions' },
            { text: 'Realistic Biomes', link: 'pages/plugins/unique/rb' },
          ]},
          { text: 'Fun', link: 'pages/plugins/fun/', collapsed: true, items: [
            { text: 'Item Exchange', link: 'pages/plugins/fun/itemexchange' },
            { text: 'Brewery', link: 'pages/plugins/fun/brewery' },
            { text: 'Wordbank', link: 'pages/plugins/fun/wordbank' },
            { text: 'Railswitch', link: 'pages/plugins/fun/railswitch' },
            { text: 'Elevators', link: 'pages/plugins/fun/elevators'},
            { text: 'Castlegate', link: 'pages/plugins/fun/castlegate' },
            { text: 'Arthropod Egg', link: 'pages/plugins/fun/arthropodegg' },
            { text: 'Chunk Limits', link: 'pages/plugins/fun/chunklimits' },
          ]},
        ]
      }
    ],

    footer: {
      message: 'All Content is released under the <a href="https://github.com/CivMC/wiki.civmc.net/blob/main/LICENSE.txt">MIT License</a>.',
      copyright: 'Copyright © 2023-Present <a href="https://github.com/CivMC">CivMC</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CivMC/wiki.civmc.net' }
    ]
  }
})
