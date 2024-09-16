import {
  Center,
  MeshReflectorMaterial,
  PresentationControls,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { Suspense } from "react";

const Experience = () => {
  const gltf = useLoader(GLTFLoader, "./models/chair.gltf");

  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.4}
      polar={[-0.1, Math.PI / 4]}
    >
      <Center environment={"city"} intensity={0.6} contactShadow={false}>
        <Suspense fallback={null}>
          <primitive object={gltf.scene} />
        </Suspense>
      </Center>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
