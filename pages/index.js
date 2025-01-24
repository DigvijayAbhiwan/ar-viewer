import dynamic from "next/dynamic";

const ARViewer = dynamic(() => import("../components/ARViewer"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>3D AR Viewer</h1>
      <ARViewer />
    </div>
  );
}
