import React from "react";
import { MapMarkerProps } from "../types/main";
import { Marker } from "react-simple-maps";
import { Link } from "gatsby";

const MapMarker: React.FC<MapMarkerProps> = (props) => {
  const { longitude, latitude, label, link, title } = props;
  console.log(props);
  return (
    // <Link to={link}>
    <Marker
      key={link}
      className="bg-white p-5"
      coordinates={[longitude, latitude]}
    >
      {label}
    </Marker>
    // </Link>
  );
};

export default MapMarker;
