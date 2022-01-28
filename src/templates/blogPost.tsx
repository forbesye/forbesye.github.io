import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import Post from "../components/post";

const BlogNavigation = ({ prevSlug, prevTitle, nextSlug, nextTitle }) => {
  return (
    <div className="flex items-center justify-center w-full mt-4">
      {prevSlug ? (
        <Link
          className="first:mr-8 inline-block bg-white hover:bg-slate-300 text-slate-900 px-4 py-1 no-underline rounded"
          to={`/blog/${prevSlug}`}
        >
          ← Newer Post
        </Link>
      ) : null}
      {nextSlug ? (
        <Link
          className=" inline-block bg-white hover:bg-slate-300 text-slate-900 px-4 py-1 no-underline rounded"
          to={`/blog/${nextSlug}`}
        >
          Older Post →
        </Link>
      ) : null}
    </div>
  );
};

const BlogTemplate = (props) => {
  console.log(props);
  const {
    node: {
      body,
      frontmatter: { date, title },
    },
    next,
    previous,
  } = props.pageContext.data;

  console.log(next, previous);

  return (
    <Layout pageTitle={title}>
      <>
        <Post title={title} date={date} body={body} />
        <BlogNavigation
          prevSlug={previous?.slug}
          prevTitle={previous?.frontmatter?.title}
          nextSlug={next?.slug}
          nextTitle={next?.frontmatter?.title}
        />
      </>
    </Layout>
  );
};

export default BlogTemplate;
