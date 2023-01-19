const { description } = require("../../package.json")

module.exports = {
  title: "SwitchCraft Documentation",
  description: description,
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],

    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon-64x64.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
  ],

  theme: "yuu",
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      colorThemes: [],
      defaultColorTheme: ["default"],
      disableThemeIgnore: true
    },
    repo: "SwitchCraftCC/sc-docs",
    repoLabel: "GitHub",
    smoothScroll: false,
    editLinks: true,
    docsDir: "src",
    docsBranch: "master",
    editLinkText: "Help us improve this page!",
    lastUpdated: false,
    nav: [{
      text: "Docs",
      link: "/",
    }, {
      text: "Download SwitchCraft 3",
      link: "https://sc3.io"
    }, {
      text: "Issue Trackers",
      link: "https://github.com/SwitchCraftCC/issues"
    }],
    sidebar: [
      ["/rules", "Rules"],
      {
        title: "What's New in SwitchCraft 3",
        path: "/whats-new/",
        collapsable: false,
        children: [
          ["/whats-new/", "Overview"],
          ["/whats-new/plethora", "Plethora"],
          ["/whats-new/sc-peripherals", "sc-peripherals"],
          ["/whats-new/chunkloaders", "Chunkloaders"],
        ]
      },
      {
        title: "FAQ",
        path: "/faq/",
        collapsable: false,
        children: [
          ["https://github.com/SwitchCraftCC/issues", "Reporting issues"],
          "/faq/api",
          "/faq/claimkit",
          "/faq/privacy",
          "/faq/pronouns",
          "/faq/rom",
          ["/faq/sc2-dump", "SC2 Computer Dump"],
          "/faq/sodium",
          "/faq/supporter",
        ]
      },
      {
        title: "Chatbox API",
        path: "/chatbox/",
        collapsable: false,
        children: [
          "/chatbox/",
          "/chatbox/changes",
          "/chatbox/computercraft",
          "/chatbox/websocket",
        ]
      }
    ]
  },

  plugins: [
  ]
};
