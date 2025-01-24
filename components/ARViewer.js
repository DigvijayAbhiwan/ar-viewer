import "aframe";
import Script from "next/script";
import { useEffect } from "react";

const ARViewer = () => {
  useEffect(() => {
    require("aframe"); // Ensure A-Frame is loaded
  }, []);

  return (
    <div>
      {/* Asynchronous AR.js Script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/aframe-ar"
        strategy="beforeInteractive"
      />

      {/* A-Frame AR Scene */}
      <a-scene embedded arjs>
        {/* Marker for AR */}
        <a-marker preset="hiro">
          <a-entity
            position="0 0 0"
            scale="0.5 0.5 0.5"
            gltf-model="/models/ibm_computer.glb"
          ></a-entity>
        </a-marker>

        {/* Camera */}
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ARViewer;
