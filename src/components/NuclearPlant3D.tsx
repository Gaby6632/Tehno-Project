import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Steam animation
const Steam = ({ position = [0, 0, 0] }: { position: [number, number, number] }) => {
  const group = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.children.forEach((child: THREE.Mesh, i) => {
        child.position.y = (clock.elapsedTime * 0.5 + i * 0.3) % 3;
        (child.material as THREE.MeshStandardMaterial).opacity = 0.4 - child.position.y * 0.1;
      });
    }
  });

  return (
    <group ref={group} position={position}>
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[0, i * 0.3, 0]}>
          <sphereGeometry args={[0.3, 8, 8]} />
          <meshStandardMaterial color="white" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
};

// Rotating turbine
const Turbine = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.elapsedTime;
  });
  return (
    <mesh ref={ref} position={[0, 1, -2]}>
      <cylinderGeometry args={[0.3, 0.3, 2, 32]} />
      <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.3} />
    </mesh>
  );
};

// Nuclear plant
const NuclearPlantModel = () => {
  return (
    <group>
      {/* Platforma */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[10, 10, 0.4, 64]} />
        <meshStandardMaterial color="#14532d" />
      </mesh>

      {/* Reactor */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 4, 32]} />
        <meshStandardMaterial color="#6b7280" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial color="#7dd3fc" emissive="#60a5fa" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Sala de control */}
      <mesh position={[4, 0, 0]}>
        <boxGeometry args={[2, 2.5, 2]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Turnuri de răcire */}
      {[[-5, 0, -3], [5, 0, -3]].map(([x, y, z]) => (
        <group position={[x, y, z]} key={`tower-${x}`}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[1.2, 0.8, 2, 32]} />
            <meshStandardMaterial color="#d1d5db" />
          </mesh>
          <mesh position={[0, 1.2, 0]}>
            <cylinderGeometry args={[0.8, 0.7, 1.5, 32]} />
            <meshStandardMaterial color="#9ca3af" />
          </mesh>
          <mesh position={[0, 2.4, 0]}>
            <cylinderGeometry args={[0.9, 0.6, 0.3, 32]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
          </mesh>
          <Steam position={[0, 2.7, 0]} />
        </group>
      ))}

      {/* Țevi */}
      <mesh position={[2, 0.5, 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 4, 16]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      <mesh position={[-2, 0.5, 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 4, 16]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>

      {/* Turbină */}
      <Turbine />

      {/* Case suplimentare */}
      <mesh position={[0, 0.5, -4]}>
        <cylinderGeometry args={[0.6, 0.6, 2, 32]} />
        <meshStandardMaterial color="#a1a1a1" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Fum */}
      <Steam position={[0, 4.5, -3]} />

      {/* Iluminare */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[0, 10, 0]} angle={0.3} intensity={0.5} color="#8ee53f" />
      <spotLight position={[-10, 5, 5]} angle={0.3} intensity={0.3} color="#f43f5e" />
      <spotLight position={[10, 5, -5]} angle={0.3} intensity={0.3} color="#e879f9" />
    </group>
  );
};

export const NuclearPlant3D = () => {
  return (
    <div style={{ width: "100%", height: "600px", background: "#1e293b", borderRadius: "12px", overflow: "hidden" }}>
      <Canvas camera={{ position: [10, 6, 10], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <spotLight position={[0, 10, 0]} angle={0.3} intensity={0.6} color="#8ee53f" />
        <NuclearPlantModel />
        <OrbitControls enablePan={false} minDistance={5} maxDistance={20} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
