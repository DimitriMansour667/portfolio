import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "DM Portfolio",
  description: "Dimitri Mansour's portfolio",
  appearance: "dark",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "DM",
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects", activeMatch: "/projects" },
      { text: "Blog", link: "/blog", activeMatch: "/blog" },
      { text: "About Me", link: "/about", activeMatch: "/about" },
      { text: "Contact", link: "/contact", activeMatch: "/contact" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/DimitriMansour667" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/dimitri-mansour-8012b2290/",
      },
    ],

    footer: {
      message: "© 2025 Dimitri Mansour",
      copyright: "MIT Licensed",
    },

    search: {
      provider: "local",
    },
  },
});
