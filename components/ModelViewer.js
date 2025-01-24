import { useEffect } from "react";

const ModelViewer = ({ modelSrc }) => {
  useEffect(() => {
    // Ensure the model-viewer component is only used on the client side
    if (typeof window !== "undefined") {
      import("@google/model-viewer"); // Dynamically import model-viewer only on the client-side
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <model-viewer
        src={modelSrc}
        alt="3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        environment-image="neutral"
        style={{ width: "100%", height: "100%" }}
      ></model-viewer>
    </div>
  );
};

export default ModelViewer;
