import React from "react";
import Map from "./map";
import MapMarker from "./mapMarker";
import { Marker } from "react-simple-maps";
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
              day
              title
            }
            slug
          }
        }
      }
    }
  `);

  const posts = data.allMdx.edges;

  return null;

  // return (
  //   <MapMarker
  //     longitude={-84.1939}
  //     latitude={34.6272}
  //     label="0"
  //     title="hello"
  //     link={`/blog/post-1`}
  //   />
  // );

  return (
    <Map>
      {posts.map((edge) => {
        console.log(edge);
        const {
          frontmatter: { longitude, latitude, day, title },
          slug,
        } = edge.node;

        return (
          <MapMarker
            longitude={longitude}
            latitude={latitude}
            label={day}
            title={title}
            link={`/blog/${slug}`}
          />
        );
      })}
    </Map>
  );
};

export default BlogMap;
