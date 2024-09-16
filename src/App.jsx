import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/experience";

function App() {
  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={["#213547"]} />
        <fog attach="fog" args={["#213457", 10, 20]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
