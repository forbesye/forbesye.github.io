import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link, useStaticQuery, graphql } from "gatsby";

type Props = {
  pageTitle: string;
  children: React.ReactChild;
};

const tempMain = [
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Appalachian Trail",
    path: "/appalachian_trail",
  },
  {
    title: "Resume",
    path: "/resume",
  },
  {
    title: "Impossible List",
    path: "/impossible_list",
  },
];

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="text-white text-lg flex flex-col justify-center text-center">
      <Header
        logoText="Jefferson Ye"
        mainMenu={tempMain}
        menuMoreText="More"
        numMenuItems={5}
      />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <main className="flex flex-col flex-[1 0 auto] items-center justify-center my-12 mx-auto w-full max-w-[900px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
