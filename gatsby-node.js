const path = require(`path`);

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve("src/templates/page.tsx");

  const pages = await graphql(`
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

  pages.data.allMdx.edges.forEach((edge) => {
    createPage({
      path: edge.node.frontmatter.path,
      component: pageTemplate,
      context: {
        data: edge.node,
      },
    });
  });
};
