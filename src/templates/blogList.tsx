import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
      <Link className="no-underline" to={`/blog/${slug}`}>
        <div className="md:flex md:flex-row md:justify-between mb-4 md:mb-6 ">
          <h2 className="text-3xl md:text-4xl font-extrabold md:text-left md:basis-3/4">
            {title}
          </h2>
          <p className="mt-2 italic md:basis-1/4 md:text-right">{date}</p>
        </div>
        <div className="md:flex md:flex-row">
          <div className="md:basis-1/2">
            {coverImage ? (
              <GatsbyImage className="aspect-[4/3]" image={image} alt="" />
            ) : null}
          </div>
          <div className="mt-4 md:mt-0 md:basis-1/2 md:flex md:flex-col md:pl-8 md:justify-between">
            <p className="md:grow md:text-left">{excerpt}</p>
            <div className="mt-4 bg-white hover:bg-slate-300 inline-block mx-auto text-slate-900 px-3 py-1 rounded-lg">
              Read more →
            </div>
          </div>
        </div>
      </Link>
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
    <Layout pageTitle="Blog">
      <div>
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
            date(formatString: "MMMM DD, YYYY")
            title
            path
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;

export default BlogList;
