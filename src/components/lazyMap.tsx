import React from "react";
import loadable from "@loadable/component";

const LazyMap: React.FC = loadable(() => import("./blogMap"));

const Wrapper: React.FC = () => (
  <>
    <LazyMap />
  </>
);

export default Wrapper;
