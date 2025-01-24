import dynamic from "next/dynamic";

// Dynamically import model-viewer so it only loads on the client side
const ModelViewer = dynamic(() => import("@google/model-viewer"), {
  ssr: false,
});

const ARViewer = ({ modelSrc }) => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ModelViewer
        src={modelSrc}
        alt="3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        environment-image="neutral"
        style={{ width: "100%", height: "100%" }}
      ></ModelViewer>
    </div>
  );
};

export default ARViewer;
