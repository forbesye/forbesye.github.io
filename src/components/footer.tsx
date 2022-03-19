import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col text-xl text-center mb-12 md:block text-[#cbcfd6] md:pt-6">
      <span className="m-0 p-2.5 md:p-0 mx-auto">
        © 2019-{new Date().getFullYear()} Jefferson Ye
      </span>
      <a
        className="text-white p-2.5 md:m-0 md:p-0 border-0 md:ml-5 md:pl-5 md:border-l mx-auto"
        href="https://www.linkedin.com/in/jefferson-ye/"
      >
        LinkedIn
      </a>
      <a
        className="text-white p-2.5 md:m-0 md:p-0 border-0 md:ml-5 md:pl-5 md:border-l mx-auto"
        href="https://github.com/forbesye"
      >
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
