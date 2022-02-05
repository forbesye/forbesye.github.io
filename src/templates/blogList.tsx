import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { PreviewProps, PaginationProps } from "../types/main";

const BlogCard: React.FC<PreviewProps> = ({
  title,
  date,
  coverImage,
  excerpt,
  slug,
}) => {
  const image = getImage(coverImage);

  return (
    <article className="flex m-5 mb-0 mt-6 first:mt-0 border-b pb-8">
      <div>
        <div className="md:flex md:flex-row md:justify-between mb-4 md:mb-6 md:items-center">
          <Link className="no-underline hover:text-burnt" to={`/blog/${slug}`}>
            <h2 className="text-5xl font-extrabold md:text-left md:basis-3/4">
              {title}
            </h2>
          </Link>
          <p className="text-xl mt-2 italic md:basis-1/4 md:text-right text-[#cbcfd6]">
            {date}
          </p>
        </div>
        <div className="md:flex md:flex-row">
          <div className="md:basis-1/2">
            <Link className="no-underline" to={`/blog/${slug}`}>
              {coverImage ? (
                <GatsbyImage
                  className="aspect-[4/3]"
                  image={image}
                  alt={title}
                />
              ) : (
                <StaticImage
                  className="aspect-[4/3] bg-slate-200 rounded-2xl"
                  src="../assets/placeholder.png"
                  alt="placeholder"
                />
              )}
            </Link>
          </div>
          <div className="mt-4 md:mt-0 md:basis-1/2 md:flex md:flex-col md:pl-8 md:justify-start md:items-start">
            <p className="text-xl leading-8 md:shrink md:text-left text-[#cbcfd6]">
              {excerpt}
            </p>
            <Link className="no-underline" to={`/blog/${slug}`}>
              <div className="text-xl mt-4 bg-white transition duration-100 hover:bg-burnt hover:text-white inline-block text-slate-900 px-3 py-1 rounded-lg">
                Read more →
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, numPages }) => {
  const backLink = currentPage === 2 ? "/blog" : `/blog/${currentPage - 1}`;

  return (
    <div className="flex flex-row items-center mt-6">
      {currentPage !== 1 ? (
        <Link
          className="bg-white hover:bg-slate-300 text-slate-900 px-2 py-0.5 no-underline rounded mr-3"
          to={backLink}
        >
          ← Back
        </Link>
      ) : null}
      <div>{`Page ${currentPage} of ${numPages}`}</div>
      {currentPage !== numPages ? (
        <Link
          className="bg-white hover:bg-slate-300 text-slate-900 px-2 py-0.5 no-underline rounded ml-3"
          to={`/blog/${currentPage + 1}`}
        >
          Next →
        </Link>
      ) : null}
    </div>
  );
};

const BlogList: React.FC = (props) => {
  const {
    data,
    pageContext: { currentPage, numPages },
  } = props;

  return (
    <Layout pageTitle="Blog Posts">
      <div className="mt-5">
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
      </div>
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
};

export const query = graphql`
  query blogListQuery($limit: Int!, $skip: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/.+/posts/.+/" } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          slug
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            path
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;

export default BlogList;
