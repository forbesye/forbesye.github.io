import React from "react";

import Layout from "../components/layout";
import Post from "../components/post";

const PageTemplate = ({ pageContext }) => {
  const {
    body,
    frontmatter: { date, title },
    fields: { lastUpdated },
  } = pageContext.data;

  return (
    <Layout pageTitle={title}>
      <Post title={title} date={date} body={body} updatedDate={lastUpdated} />
    </Layout>
  );
};

export default PageTemplate;
