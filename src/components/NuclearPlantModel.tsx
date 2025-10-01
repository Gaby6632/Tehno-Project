import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export function NuclearPlantModel(props: GroupProps) {
  const { scene } = useGLTF("src/assets/powerplan3d.glb");
  return <primitive object={scene} {...props} />;
}
