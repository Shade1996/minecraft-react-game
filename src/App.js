import { Sky } from "drei";
import { Canvas } from "react-three-fiber";
import { Vector3 } from "three";


function App() {
  return (
    <Canvas>
      <Sky sunPosition={new Vector3(100, 10, 100)} />
    </Canvas>
  );
}

export default App;
