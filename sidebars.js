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
  // By default, Docusaurus generates a sidebar from the docs folder structure
tutorialSidebar: [
  {
    type: 'category',
    label: 'Basics',
    collapsible: true,
    collapsed: false,
    items: [
      'compiler',
      'linker',
      'variables',
      'functions',
      'operators',
      'ternary_operators',
      'const',
      'enums',
      'pointers',
      'references',
      'strings',
    ],
  },
  
  {
    type: 'category',
    label: 'OOP',
    collapsible: true,
    collapsed: true,
    items: [
      'classes_and_structs',
      'interfaces',
      'visibility',
      'implicit_and_explicit',
    ],
  },
  {
    type: 'category',
    label: 'STL',
    collapsible: true,
    collapsed: false,
    items: [
      'vectors',
      'maps',
      'memory',
    ],
  },
  {
    type: 'category',
    label: 'Advanced Topics',
    collapsible: true,
    collapsed: true,
    items: [

      'lambdas',
    ],
  },

]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
