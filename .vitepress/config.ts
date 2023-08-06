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
      {
        text: 'Plugins',
        items: [
          { text: 'Essential Plugins', link: 'pages/plugins/essential/', collapsed: true, items: [
            { text: 'ExilePearl', link: 'pages/plugins/essential/exilepearl' },
            { text: 'NameLayer', link: 'pages/plugins/essential/namelayer' },
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
