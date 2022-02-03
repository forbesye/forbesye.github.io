import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col text-lg text-center mb-12 md:block text-[#cbcfd6]">
      <span>© 2019-{new Date().getFullYear()} Jefferson Ye</span>
      <span className="m-0 p-0 border-0 md:ml-5 md:pl-5 md:border-l">
        <a
          className="text-white"
          href="https://www.linkedin.com/in/jefferson-ye/"
        >
          LinkedIn
        </a>
      </span>
      <span className="m-0 p-0 border-0 md:ml-5 md:pl-5 md:border-l">
        <a className="text-white" href="https://github.com/forbesye">
          GitHub
        </a>
      </span>
    </footer>
  );
};

export default Footer;
