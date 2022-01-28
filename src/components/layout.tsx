import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "./seo";

type Props = {
  pageTitle: string;
  children: React.ReactChild;
};

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          logoText
          mainMenu {
            path
            title
          }
          menuMoreText
          numMenuItems
          title
        }
      }
    }
  `);

  const { logoText, mainMenu, menuMoreText, numMenuItems, title } =
    data.site.siteMetadata;

  return (
    <div className="text-white text-lg flex flex-col justify-center text-center">
      <SEO title={pageTitle} />
      <Header
        logoText={logoText}
        mainMenu={mainMenu}
        menuMoreText={menuMoreText}
        numMenuItems={numMenuItems}
      />
      <title>
        {pageTitle} | {title}
      </title>
      <main className="flex flex-col flex-[1 0 auto] items-center justify-center my-12 mx-auto w-full max-w-[900px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
