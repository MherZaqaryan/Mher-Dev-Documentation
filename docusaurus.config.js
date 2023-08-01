// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mher Development Documentation',
  tagline: 'Documentation of Mher Development, including BedWars1058 Cosmetics, BedWars1058 Private Games.',
  url: 'https://docs.mher.club',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MherZaqaryan', // Usually your GitHub org/user name.
  projectName: 'Mher-Development-Documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: 'Mher Development',
        logo: {
          alt: 'Mher Development',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Documentations',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Private Games',
                docId: 'private-games/introduction',
              },
              {
                type: 'doc',
                label: 'Cosmetics',
                docId: 'cosmetics/introduction',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://mher.club/discord',
                label: 'Help Us Translate',
              },
            ],
          },
          {
            href: 'https://mher.club/github',
            position: 'left',
            className: 'header-github-link',
            'aria-label': 'GitHub Account',
          },
          {
            href: 'https://mher.club/discord',
            position: 'left',
            className: 'header-discord-link',
            'aria-label': 'Discord Support',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `© Mher Development ${new Date().getFullYear()}. Built with <a href="https://docusaurus.io">Docusaurus</a>.`,
      },
      prism: {
        additionalLanguages: [
          "yaml",
          "java",
        ],
        theme: require("prism-react-renderer/themes/vsDark"),
      },
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      colorMode: {
        defaultMode: 'dark',
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'AR37GEI7E4',
  
        // Public API key: it is safe to commit it
        apiKey: '5a1511abd704ea94a56a833eb5d01af0',
  
        indexName: 'mher_docs',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;
