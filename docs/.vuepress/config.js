module.exports = {
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
  ],
  title: "t-tani.github.io",
  description: "Personal Website for t-tani",
  themeConfig: {
    smoothScroll: true,
    theme: '@vuepress/blog',
    lastUpdated: 'Last Updated',
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/ttani",
        },
        {
          type: 'twitter',
          link: "https://twitter.com/_ttani",
        },
      ],
      copyright: [
        {
          text: "Copyright © 2020-present | t-tani",
        }
      ]
    },
    nav: [{
        text: "Posts",
        link: "/posts/"
      },
      {
        text: "Publications",
        link: "/publications/"
      },
      {
        text: "About",
        link: "/about/"
      },
    ],
  },
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/blog",
    {
      directories: [{
        id: "post",
        dirname: "_posts",
        itemPermalink: "/:year/:month/:day/:slug.html",
      }, ],
      feed: {
        canonical_base: "https://t-tani.github.io",
      },
    }
  ],
}