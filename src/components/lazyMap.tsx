import React, { lazy, Suspense } from "react";

const LazyMap: React.FC = lazy(() => import("./blogMap"));

const renderLoader = () => <p>Loading...</p>;

const Wrapper: React.FC = () => (
  <Suspense fallback={renderLoader()}>
    <LazyMap />
  </Suspense>
);

export default Wrapper;
