// .vuepress/config.js

module.exports = {
  title: 'Olymvis', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'Visualizing 120 Years of the Summer Olympics', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/avatar.gif' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Olympics.svg/1200px-Olympics.svg.png',
      lastUpdated:'lastUpdated',
      nav: [
      { text: 'Home', link: '/' },
      { text: 'Literature', link: '/03-lit/' },
      { text: 'Vis Plans', link: '/04-plans/' },
      { text: 'Plots', link: '/05-plots/' },
      { text: 'GitHub Repo', link: 'https://github.com/hongtaoh/vuepress-starter' },
    ],
    },
    plugins: [
    [
      'sidebar', {
        grouping: true,
        groupOptions: {
          collapsable: true,
          sidebarDepth: 2,
        },
      }
    ]
  ]
}


// sidebar: [
//       {
//         title: 'Olymivs',   // 必要的
//         path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//         collapsable: false, // 可选的, 默认值是 true,
//         sidebarDepth: 1,    // 可选的, 默认值是 1
//         children: [
//           '/'
//         ]
//       },
//       {
//         title: 'Abstract',
//         path:'/01-abstract/',
//         collapsable: false, // 可选的, 默认值是 true,
//         sidebarDepth: 1,    // 可选的, 默认值是 1
//         children: [ /* ... */ ],
//       },
//       {
//         title: 'Motivation',
//         path:'/02-motivation/',
//         collapsable: false, // 可选的, 默认值是 true,
//         sidebarDepth: 1,    // 可选的, 默认值是 1
//         children: [ /* ... */ ],
//       },
//       {
//         title: 'Literature review',
//         path:'/03-lit/',
//         collapsable: true, // 可选的, 默认值是 true,
//         sidebarDepth: 2,    // 可选的, 默认值是 1
//         children: [
//         ['01-lit-female'], 
           // ['02-homefield'], 
           // ['03-efficiency'], 
           // ['04-ranking']
//         ],
//       }
//     ]
