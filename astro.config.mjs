// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      "dubai-trusts-asked-considers.trycloudflare.com",
    ],
  },
  adapter: cloudflare(),
  integrations: [
    starlight({
      title: "Commitlint",
      logo: {
        src: "./public/commitlint.png",
        replacesTitle: true,
      },
      editLink: {
        baseUrl:
          "https://github.com/jurienhamaker/commitlint-docs/edit/main/docs/",
      },
      plugins: [
        starlightThemeObsidian({
          backlinks: false,
          graph: false,
        }),
      ],
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/global.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jurienhamaker/commitlint",
        },
        {
		  icon: "discord",
          label: "Discord",
          href: "https://discord.gg/UttZbEd9zn"
        },
      ],
      sidebar: [
        {
          label: "Start here",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "About commitlint", slug: "start/about-commitlint" },
            { label: "Installation", slug: "start/installation" },
            {
              label: "Initialize in Your Repository ",
              slug: "start/initialize-repository",
            },
            {
              label: "Installing plugins",
              slug: "start/installing-plugins",
            },
          ],
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
