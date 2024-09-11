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
      text: "Main Site",
      link: "https://sc3.io"
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
      {
        text: "Mods",
        items: [
          { link: "/features/plethora", text: "Plethora" },
          { link: "/features/sc-goodies", text: "sc-goodies" },
          { link: "/features/sc-peripherals", text: "sc-peripherals" },
        ]
      },
      {
        text: "Help",
        items: [
          { link: "/faq/privacy", text: "Privacy Policy" },
          { link: "/faq/sc2-dump", text: "SC2 Computer Dump" },
          { link: "/faq/sc3-dump", text: "SC3 Computer Dump" },
        ]
      },
    ],

    socialLinks: [
      { icon: "discord", link: "https://discord.sc3.io" },
      { icon: "github", link: "https://github.com/SwitchCraftCC/sc-docs" },
    ]
  }
});
