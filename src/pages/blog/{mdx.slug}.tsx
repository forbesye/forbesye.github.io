import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Post from "../../components/post";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Post
        title={data.mdx.frontmatter.title}
        date={data.mdx.frontmatter.date}
        coverImage={data.mdx.frontmatter.hero_image}
        body={data.mdx.body}
      />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export default BlogPost;
