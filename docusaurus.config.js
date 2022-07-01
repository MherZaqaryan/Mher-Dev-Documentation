// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mher Development',
  tagline: 'Documentation',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'java',
        additionalLanguages: ['java', 'yaml'],
      },
      docs: {
        sidebar: {
          hideable: true,
        }
      }
    }),
};

module.exports = config;
