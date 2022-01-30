import React, { useState } from "react";
import USMap from "../assets/states-10m.json";
import AT from "../assets/at.json";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Line,
  Marker,
} from "react-simple-maps";
import { MapProps } from "../types/main";

const MapChart: React.FC<MapProps> = (props) => {
  const { children } = props;
  const [zoom, setZoom] = useState<number>(2);

  return (
    <div className="my-4 border-4 border-white relative">
      <ComposableMap projection="geoAlbers">
        <ZoomableGroup
          zoom={zoom}
          center={[-77.2, 40.7]}
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
          </>
          {children}
        </ZoomableGroup>
      </ComposableMap>
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
    </div>
  );
};

export default MapChart;
