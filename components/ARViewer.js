import "aframe";
import { useEffect } from "react";

const ARViewer = () => {
  useEffect(() => {
    require("aframe");
  }, []);

  return (
    <a-scene embedded arjs>
      {/* Light Source */}
      <a-light type="directional" position="1 1 1"></a-light>

      {/* 3D Model */}
      <a-entity
        position="0 0 0"
        scale="1 1 1"
        gltf-model="/models/ibm_computer.glb"
      ></a-entity>

      {/* Ground */}
      <a-plane
        position="0 -1 0"
        rotation="-90 0 0"
        width="10"
        height="10"
        color="#cccccc"
      ></a-plane>
    </a-scene>
  );
};

export default ARViewer;
