import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PostProps } from "../types/main";

const Post: React.FC<PostProps> = ({
  title,
  date,
  updatedDate,
  coverImage,
  body,
}) => {
  const image = getImage(coverImage);

  return (
    <div className="w-full max-w-[660px] md:max-w-[900px] text-left p-5 my-0 mx-auto prose prose-invert">
      <div className="mb-4">
        <h1 className="mt-0 mx-0 mb-2.5 text-white">{title}</h1>
        <div>{`Last updated on ${date}`}</div>
        <div>
          {updatedDate && updatedDate !== date
            ? `Last updated on ${updatedDate}`
            : null}
        </div>
      </div>

      {coverImage ? <GatsbyImage image={image} alt="" /> : null}

      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default Post;
