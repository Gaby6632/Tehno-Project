import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { NuclearPlantModel } from "./NuclearPlantModel";

export const NuclearPlant3D = () => {
  return (
    <div style={{ outline: "3px solid green", width: "100%", height: "600px", background: "#1e293b", borderRadius: "12px", overflow: "hidden" }}>
      <Canvas camera={{ position: [10, 6, 10], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <spotLight position={[0, 15, 0]} angle={0.4} intensity={1} color="#ffffff" />
        <NuclearPlantModel scale={0.5} position={[0, -2, 0]} />
        
        <OrbitControls enablePan={false} minDistance={5} maxDistance={25} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
