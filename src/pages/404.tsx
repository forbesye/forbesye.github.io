import * as React from "react";
import Layout from "../components/layout";

// markup
const NotFoundPage: React.FC = () => {
  return (
    <Layout pageTitle="Oops!">
      <>
        <h1 className="text-4xl">Oops!</h1>
        <p className="text-xl mt-4">
          This page couldn't be found. If you we're legitimately looking for
          something, please contact me!
        </p>
      </>
    </Layout>
  );
};

export default NotFoundPage;
