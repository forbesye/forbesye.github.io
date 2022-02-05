import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import Post from "../components/post";

const BlogNavigation = ({ prevSlug, nextSlug }) => {
  return (
    <div className="flex items-center justify-center w-full mt-4">
      {prevSlug ? (
        <Link
          className="first:mr-8 only:m-0 inline-block bg-white hover:bg-burnt hover:text-white text-slate-900 px-4 py-1 no-underline rounded"
          to={`/blog/${prevSlug}`}
        >
          ← Newer Post
        </Link>
      ) : null}
      {nextSlug ? (
        <Link
          className="inline-block bg-white hover:bg-burnt hover:text-white text-slate-900 px-4 py-1 no-underline rounded"
          to={`/blog/${nextSlug}`}
        >
          Older Post →
        </Link>
      ) : null}
    </div>
  );
};

const BlogTemplate = (props) => {
  const {
    node: {
      body,
      frontmatter: {
        date,
        title,
        hero_image: {
          childImageSharp: { gatsbyImageData },
        },
      },
      fields: { lastUpdated },
    },
    next,
    previous,
  } = props.pageContext.data;

  return (
    <Layout pageTitle={title}>
      <>
        <Post
          title={title}
          date={date}
          body={body}
          updatedDate={lastUpdated}
          coverImage={gatsbyImageData}
        />
        <BlogNavigation prevSlug={previous?.slug} nextSlug={next?.slug} />
      </>
    </Layout>
  );
};

export default BlogTemplate;
