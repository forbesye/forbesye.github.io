import React, { useState, memo } from "react";
import USMap from "../assets/states-10m.json";
import AT from "../assets/at_10percent.json";
import Towns from "../assets/towns.json";
import MapMarker from "./mapMarker";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Line,
} from "react-simple-maps";
import { MapProps } from "../types/main";

const MapChart: React.FC<MapProps> = ({
  children,
  tooltip,
  latitude = 40.7,
  longitude = -77.2,
  zoom: initZoom = 2,
}) => {
  const [zoom, setZoom] = useState<number>(initZoom);

  return (
    <>
      <ComposableMap projection="geoAlbers" data-tip="">
        <ZoomableGroup
          zoom={zoom}
          center={[longitude, latitude]}
          minZoom={2}
          maxZoom={30}
        >
          <>
            <Geographies geography={USMap}>
              {({ geographies }) => (
                <>
                  {geographies.map((geo, idx) => (
                    <Geography
                      className="rounded"
                      key={idx}
                      stroke="#FFF"
                      strokeWidth={0.5}
                      strokeLinecap="round"
                      geography={geo}
                      fill="#CBD5E1"
                    />
                  ))}
                </>
              )}
            </Geographies>
            {AT.coordinates.map((curr, idx, arr) => {
              if (idx !== arr.length - 1) {
                return (
                  <Line
                    key={idx}
                    to={arr[idx + 1]}
                    from={curr}
                    stroke="#EF4444"
                    strokeWidth={0.5}
                    strokeLinecap="round"
                  />
                );
              }
              return null;
            })}
            {Towns.towns.map(({ name, coordinates, offset }) => {
              const [longitude, latitude] = coordinates;
              return (
                <MapMarker
                  longitude={longitude}
                  latitude={latitude}
                  title={name}
                  color="black"
                  offset={offset}
                  shape="circle"
                />
              );
            })}
            {children}
          </>
        </ZoomableGroup>
      </ComposableMap>
      {tooltip}
      <div className="absolute bottom-6 right-6">
        <div className="flex flex-col">
          <button
            className="bg-white py-2 px-4 mb-3 text-slate-900 rounded-full drop-shadow-xl"
            onClick={() => setZoom(zoom + 1)}
          >
            +
          </button>
          <button
            className="bg-white py-2 px-4 text-slate-900 rounded-full drop-shadow-xl"
            onClick={() => setZoom(Math.max(zoom - 1, 2))}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(MapChart);
