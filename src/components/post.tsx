import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
// import CodeBlock from "./codeBlock";
import { PostProps } from "../types/main";

const Post: React.FC<PostProps> = ({
  title,
  date,
  updatedDate,
  coverImage,
  body,
}) => {
  const image = getImage(coverImage);
  const lastUpdated = updatedDate !== "Invalid Date" ? updatedDate : null;
  // const components = {
  //   pre: CodeBlock,
  // };

  return (
    <div className="w-full max-w-[660px] md:max-w-[900px] text-left p-5 my-0 mx-auto prose prose-invert prose-xl">
      <div className="mb-4">
        <h1 className="mb-6"> {title}</h1>
        <div className="italic">{`Created on ${date}`}</div>
        <div className="italic">
          {lastUpdated ? `Last updated on ${updatedDate}` : null}
        </div>
      </div>

      {coverImage ? <GatsbyImage image={image} alt="" /> : null}
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </div>
  );
};

export default Post;
