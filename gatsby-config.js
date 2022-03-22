module.exports = {
  siteMetadata: {
    title: "Jefferson Ye",
    description: "Jefferson Ye's personal website",
    titleTemplate: "%s | Jefferson Ye",
    url: "https://www.jeffersonye.com",
    logoText: "Jefferson Ye",
    image: "/JeffersonYeHeadshot.png",
    numMenuItems: 5,
    menuMoreText: "More",
    mainMenu: [
      {
        title: "Blog",
        path: "/blog",
      },
      {
        title: "A.T.",
        path: "/appalachian-trail",
      },
      {
        title: "Resume",
        path: "/resume",
      },
      {
        title: "Impossible List",
        path: "/impossible-list",
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
              maxWidth: 900,
              quality: 80,
              withWebp: { quality: 80 },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
  ],
};
