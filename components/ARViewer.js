import "aframe";
import "aframe-ar";
import { useEffect } from "react";

const ARViewer = () => {
  useEffect(() => {
    require("aframe");
    require("aframe-ar");
  }, []);

  return (
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
  );
};

export default ARViewer;
