const path = require(`path`);

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve("src/templates/page.tsx");
  const blogListTemplate = path.resolve("src/templates/blogList.tsx");
  const blogPostTemplate = path.resolve("src/templates/blogPost.tsx");

  const pageResult = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/.+/pageContent/.+/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              path
            }
            body
          }
        }
      }
    }
  `);

  pageResult.data.allMdx.edges.forEach((edge) => {
    createPage({
      path: edge.node.frontmatter.path,
      component: pageTemplate,
      context: {
        data: edge.node,
      },
    });
  });

  const postResult = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/.+/posts/.+/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              hero_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            body
            slug
          }
          previous {
            slug
            frontmatter {
              title
            }
          }
          next {
            frontmatter {
              title
            }
            slug
          }
        }
      }
    }
  `);

  const posts = postResult.data.allMdx.edges;
  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, idx) => {
    createPage({
      path: idx === 0 ? "/blog" : `/blog/${idx + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: idx * postsPerPage,
        numPages,
        currentPage: idx + 1,
      },
    });
  });

  posts.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        data: edge,
      },
    });
  });
};
