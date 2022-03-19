import React from "react";
import loadable from "@loadable/component";

const LazyMap: React.FC = loadable(() => import("./blogMap"));

export default LazyMap;
