import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SwitchCraft Docs",
  description: "SwitchCraft 3 Documentation",

  head: [
    ["meta", { name: "theme-color", content: "#43d646" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],

    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon-64x64.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
  ],

  themeConfig: {
    logo: "/img/logo.png",

    // https://vitepress.dev/reference/default-theme-config
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

    editLink: {
      // TODO: switch to a non-versioned branch or remember to update this
      pattern: "https://github.com/SwitchCraftCC/sc-docs/edit/1.20.1/src/:path",
      text: "Edit this page on GitHub",
    },

    lastUpdated: {},
    docFooter: {},

    search: {
      provider: "local"
    },

    sidebar: [
      { text: "Rules", link: "/rules.md" },
      {
        text: "Features & Mods",
        items: [
          { link: "/features/whats-new", text: "What's New in SwitchCraft 3" },
          { link: "/features/chunkloaders", text: "Chunkloaders" },
          { link: "/features/claimkit", text: "ClaimKit" },
          { link: "/features/plethora", text: "Plethora" },
          { link: "/features/sc-goodies", text: "sc-goodies" },
          { link: "/features/sc-peripherals", text: "sc-peripherals" },
          { link: "/features/switchmarket", text: "SwitchMarket" },
        ]
      },
      {
        text: "FAQ",
        items: [
          { link: "https://github.com/SwitchCraftCC/issues", text: "Reporting issues" },
          { link: "/faq/api", text: "API" },
          { link: "/faq/privacy", text: "Privacy Policy" },
          { link: "/faq/pronouns", text: "Pronouns" },
          { link: "/faq/rom", text: "ROM" },
          { link: "/faq/sc2-dump", text: "SC2 Computer Dump" },
          { link: "/faq/sodium", text: "Sodium & Indium" },
          { link: "/faq/supporter", text: "Supporter" },
        ]
      },
      {
        text: "Chatbox API",
        link: "/chatbox/",
        items: [
          { link: "/chatbox/", text: "Chatbox Introduction" },
          { link: "/chatbox/changes", text: "Changes in v2" },
          { link: "/chatbox/computercraft", text: "ComputerCraft API" },
          { link: "/chatbox/websocket", text: "Websocket API" },
          { link: "/chatbox/switchchat", text: "SwitchChat (JavaScript)" },
          { link: "https://docs.sc3.io/library/switchchat/", text: "SwitchChat API reference" },
        ]
      }
    ],

    socialLinks: [
      { icon: "discord", link: "https://discord.sc3.io" },
      { icon: "github", link: "https://github.com/SwitchCraftCC/sc-docs" },
    ]
  }
});
