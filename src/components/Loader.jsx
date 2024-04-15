import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div style={{ marginBottom: 10 }}>
        {/* Adjust size and style of the loading spinner */}
        <div className='canvas-loader' style={{ width: 40, height: 40 }} />
      </div>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          margin: 0,
        }}
      >
        {/* Round progress to integer percentage */}
        {Math.round(progress * 100)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
