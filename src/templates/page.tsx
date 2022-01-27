import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Post from "../components/post";

const PageTemplate = ({ pageContext }) => {
  console.log(pageContext);
  const {
    body,
    frontmatter: { date, title },
  } = pageContext.data;

  return (
    <Layout pageTitle={title}>
      <Post title={title} date={date} body={body} />
    </Layout>
  );
};

export default PageTemplate;
