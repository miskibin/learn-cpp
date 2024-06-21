// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn C++ with me',
  tagline: 'My notes on learning C++',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://michalskibinski109.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/learn-cpp/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'michalskibinski109', // Usually your GitHub org/user name.
  projectName: 'learn-cpp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/michalskibinski109/learn-cpp/tree/main',
        },
     
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'C++ Tutorial',
        logo: {
          alt: 'C++ Tutorial Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/michalskibinski109/learn-cpp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/compiler',
              },
            ],
          },
          {
            title: 'More',
            items: [
           
              {
                label: 'GitHub',
                href: 'https://github.com/michalskibinski109',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Michał Skibiński`,
      },
      algolia: {
        appId: '5X0OL6LTYK',
        apiKey: '3c87c6d9203b5d6efde4aea5a1bc78ac',
        indexName: 'michalskibinski109io',
        contextualSearch: true,
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        searchParameters: {},
        searchPagePath: 'search',
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
