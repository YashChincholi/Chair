import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization.jsx";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213457", 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
