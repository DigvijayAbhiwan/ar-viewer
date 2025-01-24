import { useState, useEffect } from "react";
import ModelViewer from "../components/ModelViewer";

export default function Home() {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    // Simulate fetching model data (replace with your own GLB model URLs)
    const fetchModels = async () => {
      const fetchedModels = [
        { id: 1, name: "IBM Computer", src: "/models/ibm_computer.glb" },
        { id: 2, name: "LCD Monitor", src: "/models/lcd_monitor.glb" },
      ];
      setModels(fetchedModels);
    };
    fetchModels();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>AR Model Viewer</h1>
      <select onChange={(e) => setSelectedModel(e.target.value)}>
        <option value="">Select a model</option>
        {models.map((model) => (
          <option key={model.id} value={model.src}>
            {model.name}
          </option>
        ))}
      </select>

      {selectedModel && <ModelViewer modelSrc={selectedModel} />}
    </div>
  );
}
