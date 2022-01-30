import React from "react";
import { MapMarkerProps } from "../types/main";
import { Marker } from "react-simple-maps";
import { Link } from "gatsby";

const MapMarker: React.FC<MapMarkerProps> = (props) => {
  const { longitude, latitude, label, link, title } = props;
  console.log(props);
  return (
    <Link className="no-underline" to={link}>
      <Marker key={link} coordinates={[longitude, latitude]}>
        <circle r={0.8} fill="#F00" stroke="#fff" strokeWidth={0.2} />
      </Marker>
    </Link>
  );
};

export default MapMarker;
