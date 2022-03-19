import React from "react";
import { MapMarkerProps } from "../types/main";
import { Marker } from "react-simple-maps";
import { Link } from "gatsby";

const mapMarkerColors = {
  green: "#10B981",
  black: "#171717",
};

const MapMarker: React.FC<MapMarkerProps> = (props) => {
  const {
    longitude,
    latitude,
    link,
    title,
    color,
    setHoverText,
    offset,
    shape,
  } = props;

  const offsetText = offset ? (
    <text
      textAnchor="middle"
      x={offset[0]}
      y={offset[1]}
      className="text-[2px] select-none font-bold"
    >
      {title}
    </text>
  ) : null;

  const PinMarker = (
    <Marker key={link} coordinates={[longitude, latitude]}>
      <svg x={-0.75} y={-2.6}>
        <svg height={3} width={1.5} viewBox="0 0 365 560">
          {/* https://commons.wikimedia.org/wiki/File:Map_marker.svg */}
          <path
            fill={"#fff"}
            d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9
		C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z 
	C149.4,248,122.2,220.8,122.2,187.2z"
          />
        </svg>
        <svg
          height={3}
          width={1.5}
          viewBox="0 0 365 560"
          transform="scale(0.85) translate(0.13,0.21)"
        >
          {/* https://commons.wikimedia.org/wiki/File:Map_marker.svg */}
          <path
            fill={mapMarkerColors[color]}
            d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9
		C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z 
	C149.4,248,122.2,220.8,122.2,187.2z"
          />
        </svg>
      </svg>

      {offsetText}
    </Marker>
  );

  const CircleMarker = (
    <Marker key={link} coordinates={[longitude, latitude]}>
      <circle
        r={0.8}
        fill={mapMarkerColors[color]}
        stroke="#fff"
        strokeWidth={0.2}
      />
      {offsetText}
    </Marker>
  );

  const markers = {
    pin: PinMarker,
    circle: CircleMarker,
  };

  const resultMarker = markers[shape];

  if (link) {
    return (
      <Link
        onMouseEnter={() => setHoverText(title)}
        onMouseLeave={() => setHoverText("")}
        className="no-underline"
        to={link}
      >
        {resultMarker}
      </Link>
    );
  }

  return resultMarker;
};

export default MapMarker;
