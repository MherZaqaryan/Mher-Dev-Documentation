/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {

  cosmetics: [
    {
      type: 'doc',
      id: 'cosmetics/introduction',
    },
    {
      type: 'doc',
      id: 'cosmetics/terms-and-conditions',
    },
    {
      type: 'doc',
      id: 'cosmetics/verify-purchase',
    },
    {
      type: 'doc',
      id: 'cosmetics/compatibility',
    },
    {
      type: 'category',
      label: 'General Information',
      items: [
        {
          type: 'doc',
          id: 'cosmetics/general-information/main-features',
        },
        {
          type: 'doc',
          id: 'cosmetics/general-information/commands-and-permissions',
        },
        {
          type: 'doc',
          id: 'cosmetics/general-information/frequently-asked-questions',
        },
      ],
    },
    {
      type: 'category',
      label: 'Cosmetic Categories',
      link: {
        type: 'generated-index',
        slug: '/cosmetics/cosmetic-categories'
      },
      items: [
        {
          type: 'doc',
          id: 'cosmetics/cosmetic-categories/projectile-trail',
        },
        {
          type: 'doc',
          id: 'cosmetics/cosmetic-categories/victory-dance',
        },
        {
          type: 'doc',
          id: 'cosmetics/cosmetic-categories/final-kill-effect',
        },
        {
          type: 'doc',
          id: 'cosmetics/cosmetic-categories/spray',
        },
        {
          type: 'doc',
          id: 'cosmetics/cosmetic-categories/island-topper',
        },
        {
          type: 'doc',
          id: 'cosmetics/cosmetic-categories/death-cry',
        },
        {
          type: 'doc',
          id: 'cosmetics/cosmetic-categories/shopkeeper-skin',
        },
        {
          type: 'doc',
          id: 'cosmetics/cosmetic-categories/kill-message',
        },
        {
          type: 'doc',
          id: 'cosmetics/cosmetic-categories/glyph',
        },
        {
          type: 'doc',
          id: 'cosmetics/cosmetic-categories/bed-destroy',
        },
        {
          type: 'doc',
          id: 'cosmetics/cosmetic-categories/wood-skin',
        },
      ],
    },
    {
      type: 'category',
      label: 'Addon Configuration',
      items: [
        {
          type: 'doc',
          id: 'cosmetics/configuration/main-configuration',
        },
        {
          type: 'doc',
          id: 'cosmetics/configuration/category-configuration',
        },
        {
          type: 'doc',
          id: 'cosmetics/configuration/language-configuration',
        },
      ],
    },
    {
      type: 'category',
      label: 'Addon Installation',
      items: [
        {
          type: 'doc',
          id: 'cosmetics/addon-installation/addon-installation',
        },
        {
          type: 'doc',
          id: 'cosmetics/addon-installation/standalone-additions',
        },
      ],
    },
    {
      type: 'category',
      label: 'Addon Tutorials',
      link: {
        type: 'generated-index',
        slug: '/cosmetics/addon-tutorials'
      },
      items: [
        {
          type: 'category',
          label: 'Create Custom Cosmetics',
          link: {
            type: 'doc',
            id: 'cosmetics/tutorials/create-cosmetics/create-cosmetics'
          },
          items: [
            {
              type: 'doc',
              id: 'cosmetics/tutorials/create-cosmetics/spray',
            },
            {
              type: 'doc',
              id: 'cosmetics/tutorials/create-cosmetics/shopkeeper-skin',
            },
            {
              type: 'doc',
              id: 'cosmetics/tutorials/create-cosmetics/kill-message',
            },
            {
              type: 'doc',
              id: 'cosmetics/tutorials/create-cosmetics/glyph',
            },
            {
              type: 'doc',
              id: 'cosmetics/tutorials/create-cosmetics/wood-skin',
            },
          ],
        },
        {
          type: 'doc',
          id: 'cosmetics/tutorials/create-rarities',
        },
      ],
    },
    {
      type: 'category',
      label: 'Hooks',
      items: [
        {
          type: 'doc',
          id: 'cosmetics/hooks/citizens-support',
        },
        {
          type: 'doc',
          id: 'cosmetics/hooks/vault-support',
        },
        {
          type: 'doc',
          id: 'cosmetics/hooks/placeholderapi-support',
        },
      ],
    },
    {
      type: 'category',
      label: 'Contribute',
      items: [
        {
          type: 'doc',
          id: 'cosmetics/contribute/help-us-translate',
        },
        {
          type: 'doc',
          id: 'cosmetics/contribute/contributors',
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer API',
      items: [
        {
          type: 'doc',
          id: 'cosmetics/developer-api/getting-started',
        },
        {
          type: 'doc',
          id: 'cosmetics/developer-api/maven-dependency',
        },
        {
          type: 'link',
          label: 'JavaDocs',
          href: 'https://javadocs.mher.club/cosmetics/index.html',
        },
      ],
    },
    {
      type: 'doc',
      id: 'cosmetics/feedback',
    },
  ],

  private_games: [
    {
      type: 'doc',
      id: 'private-games/introduction',
    },
    {
      type: 'doc',
      id: 'private-games/terms-and-conditions',
    },
    {
      type: 'doc',
      id: 'private-games/verify-purchase',
    },
    {
      type: 'doc',
      id: 'private-games/compatibility',
    },
    {
      type: 'category',
      label: 'General Information',
      items: [
        {
          type: 'doc',
          id: 'private-games/general-information/main-features',
        },
        {
          type: 'doc',
          id: 'private-games/general-information/unique-modifiers',
        },
        {
          type: 'doc',
          id: 'private-games/general-information/frequently-asked-questions',
        },
        {
          type: 'doc',
          id: 'private-games/general-information/commands-and-permissions',
        },
      ],
    },
    {
      type: 'category',
      label: 'Addon Installation',
      link: {
        type: 'generated-index',
        slug: '/private-games/addon-installation'
      },
      items: [
        {
          type: 'doc',
          id: 'private-games/addon-installation/shared-multiarena-installation',
        },
        {
          type: 'doc',
          id: 'private-games/addon-installation/bungee-installation',
        },
      ],
    },
    {
      type: 'category',
      label: 'Addon Configuration',
      items: [
        {
          type: 'doc',
          id: 'private-games/configuration/main-configuration',
        },
        {
          type: 'doc',
          id: 'private-games/configuration/messages-configuration',
        },
      ],
    },
    {
      type: 'category',
      label: 'Contribute',
      items: [
        {
          type: 'doc',
          id: 'private-games/contribute/help-us-translate',
        },
        {
          type: 'doc',
          id: 'private-games/contribute/contributors',
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer API',
      items: [
        {
          type: 'doc',
          id: 'private-games/developer-api/getting-started',
        },
        {
          type: 'doc',
          id: 'private-games/developer-api/maven-dependency',
        },
        {
          type: 'link',
          label: 'JavaDocs',
          href: 'https://javadocs.mher.club/private-games/index.html',
        },
      ],
    },
    {
      type: 'doc',
      id: 'private-games/feedback',
    },
  ],

  the_pit: [
    {
      type: 'doc',
      id: 'the-pit/introduction',
    },
  ]

};

module.exports = sidebars;