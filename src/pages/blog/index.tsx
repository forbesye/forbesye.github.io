import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PreviewProps } from "../../types/main";

const BlogCard: React.FC<PreviewProps> = ({
  title,
  date,
  coverImage,
  excerpt,
  slug,
}) => {
  const image = getImage(coverImage);

  return (
    <article className="flex m-5 mb-0 first:mt-0 border-b last:border-0 pb-8 last:pb-0">
      <Link className="no-underline" to={`/blog/${slug}`}>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div>
          <div>
            {coverImage ? (
              <GatsbyImage className="aspect-[4/3]" image={image} alt="" />
            ) : null}
          </div>
          <p className="mt-2 italic">{`Created on ${date}`}</p>
          <p>{excerpt}</p>
          <div className="mt-2 bg-white inline-block mx-auto text-slate-900 px-3 py-1 rounded-xl">
            Read more →
          </div>
        </div>
      </Link>
    </article>
  );
};

const BlogPage: React.FC = ({ data }) => {
  console.log(data);

  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.edges.map((edge) => (
        <BlogCard
          key={edge.node.id}
          title={edge.node.frontmatter.title}
          date={edge.node.frontmatter.date}
          coverImage={edge.node.frontmatter.hero_image}
          excerpt={edge.node.excerpt}
          slug={edge.node.slug}
        />
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/.+/posts/.+/" } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          slug
          fileAbsolutePath
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`;

export default BlogPage;
