import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col text-lg text-center mb-12 md:block">
      <span>© {new Date().getFullYear()} Jefferson Ye</span>
      <span className="m-0 p-0 border-0 md:ml-5 md:pl-5 md:border-l">
        <a href="https://www.linkedin.com/in/jefferson-ye/">LinkedIn</a>
      </span>
      <span className="m-0 p-0 border-0 md:ml-5 md:pl-5 md:border-l">
        <a href="https://github.com/forbesye">GitHub</a>
      </span>
      <span className="m-0 p-0 border-0 md:ml-5 md:pl-5 md:border-l">
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
    </footer>
  );
};

export default Footer;
