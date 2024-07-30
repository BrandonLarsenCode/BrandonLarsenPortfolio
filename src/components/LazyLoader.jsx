// src/components/LazyLoader.js

import React from "react";
import { useInView } from "react-intersection-observer";

const LazyLoader = ({ children, options = {} }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...options,
  });

  return <div ref={ref}>{inView ? children : null}</div>;
};

export default LazyLoader;
