import React, { useState } from "react";
import Map from "./map";
import MapMarker from "./mapMarker";
import ReactTooltip from "react-tooltip";
import { useStaticQuery, graphql } from "gatsby";

const BlogMap: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/.+/posts/.+/" } }) {
        edges {
          node {
            id
            frontmatter {
              longitude
              latitude
              title
            }
            slug
          }
        }
      }
    }
  `);

  const posts = data.allMdx.edges.filter((edge) => {
    const {
      frontmatter: { longitude, latitude },
    } = edge.node;
    return longitude && latitude;
  });

  const [hoverText, setHoverText] = useState<string>("");
  const tooltip = <ReactTooltip>{hoverText}</ReactTooltip>;

  return (
    <div className="my-4 border-4 border-white relative">
      <Map tooltip={tooltip}>
        {posts.map((edge) => {
          const {
            frontmatter: { longitude, latitude, title },
            slug,
          } = edge.node;

          return (
            <MapMarker
              longitude={longitude}
              latitude={latitude}
              title={title}
              link={`/blog/${slug}`}
              setHoverText={setHoverText}
              color="green"
              shape="pin"
            />
          );
        })}
      </Map>
    </div>
  );
};

export default BlogMap;
