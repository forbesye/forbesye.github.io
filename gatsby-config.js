module.exports = {
  siteMetadata: {
    title: "Jefferson Ye",
    description: "Jefferson Ye's personal website",
    siteUrl: "https://www.jeffersonye.com",
    logoText: "Jefferson Ye",
    postsPerPage: 5,
    numMenuItems: 5,
    menuMoreText: "More",
    mainMenu: [
      {
        title: "Blog",
        path: "/blog",
      },
      {
        title: "Appalachian Trail",
        path: "/appalachian_trail",
      },
      {
        title: "Resume",
        path: "/resume",
      },
      {
        title: "Impossible List",
        path: "/impossible_list",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pageContent`,
        path: `${__dirname}/src/pageContent`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 800,
    //           quality: 100,
    //           // path: `${__dirname}/images`,
    //         },
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //           // Class prefix for <pre> tags containing syntax highlighting;
    //           // defaults to 'language-' (e.g. <pre class="language-js">).
    //           // If your site loads Prism into the browser at runtime,
    //           // (e.g. for use with libraries like react-live),
    //           // you may use this to prevent Prism from re-processing syntax.
    //           // This is an uncommon use-case though;
    //           // If you're unsure, it's best to use the default value.
    //           classPrefix: "language-",
    //           // This is used to allow setting a language for inline code
    //           // (i.e. single backticks) by creating a separator.
    //           // This separator is a string and will do no white-space
    //           // stripping.
    //           // A suggested value for English speakers is the non-ascii
    //           // character '›'.
    //           inlineCodeMarker: null,
    //           // This lets you set up language aliases.  For example,
    //           // setting this to '{ sh: "bash" }' will let you use
    //           // the language "sh" which will highlight using the
    //           // bash highlighter.
    //           aliases: {},
    //           // This toggles the display of line numbers globally alongside the code.
    //           // To use it, add the following line in gatsby-browser.js
    //           // right after importing the prism color scheme:
    //           //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
    //           // Defaults to false.
    //           // If you wish to only show line numbers on certain code blocks,
    //           // leave false and use the {numberLines: true} syntax below
    //           showLineNumbers: false,
    //           // If setting this to true, the parser won't handle and highlight inline
    //           // code used in markdown i.e. single backtick code like `this`.
    //           noInlineHighlight: false,
    //           // This adds a new language definition to Prism or extend an already
    //           // existing language definition. More details on this option can be
    //           // found under the header "Add new language definition or extend an
    //           // existing language" below.
    //           languageExtensions: [
    //             {
    //               language: "superscript",
    //               extend: "javascript",
    //               definition: {
    //                 superscript_types: /(SuperType)/,
    //               },
    //               insertBefore: {
    //                 function: {
    //                   superscript_keywords: /(superif|superelse)/,
    //                 },
    //               },
    //             },
    //           ],
    //           // Customize the prompt used in shell output
    //           // Values below are default
    //           prompt: {
    //             user: "root",
    //             host: "localhost",
    //             global: false,
    //           },
    //           // By default the HTML entities <>&'" are escaped.
    //           // Add additional HTML escapes by providing a mapping
    //           // of HTML entities and their escape value IE: { '}': '&#123;' }
    //           escapeEntities: {},
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
};
