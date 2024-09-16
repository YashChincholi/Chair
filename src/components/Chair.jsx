import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useCustomization } from "../contexts/customization";

const Chair = (props) => {
  const { nodes, materials } = useGLTF("./models/chair.gltf");
  const { material, legs, chairColor, cushionColor } = useCustomization();

  const leatherTexture = useTexture({
    // map: "https://yashchincholi.github.io/Chair/textures/leather/Leather_008_Base%20Color.jpg",
    normalMap:
      "https://yashchincholi.github.io/Chair/textures/leather/Leather_008_Normal.jpg",
    roughnessMap:
      "https://yashchincholi.github.io/Chair/textures/leather/Leather_008_Roughness.jpg",
    aoMap:
      "https://yashchincholi.github.io/Chair/textures/leather/Leather_008_Ambient%20Occlusion.jpg",
  });

  // leatherTexture.map.repeat.set(3, 3);
  leatherTexture.normalMap.repeat.set(3, 3);
  leatherTexture.roughnessMap.repeat.set(3, 3);
  leatherTexture.aoMap.repeat.set(3, 3);

  // leatherTexture.map.wrapS =
  //   leatherTexture.map.wrapT =
  leatherTexture.normalMap.wrapS =
    leatherTexture.normalMap.wrapT =
    leatherTexture.roughnessMap.wrapS =
    leatherTexture.roughnessMap.wrapT =
    leatherTexture.aoMap.wrapS =
    leatherTexture.aoMap.wrapT =
      THREE.RepeatWrapping;

  const fabricTexture = useTexture({
    // map: "https://yashchincholi.github.io/Chair/textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap:
      "https://yashchincholi.github.io/Chair/textures/fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap:
      "https://yashchincholi.github.io/Chair/textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap:
      "https://yashchincholi.github.io/Chair/textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });

  // fabricTexture.map.repeat.set(3, 3);
  fabricTexture.normalMap.repeat.set(3, 3);
  fabricTexture.roughnessMap.repeat.set(3, 3);
  fabricTexture.aoMap.repeat.set(3, 3);

  // fabricTexture.map.wrapS =
  //   fabricTexture.map.wrapT =
  fabricTexture.normalMap.wrapS =
    fabricTexture.normalMap.wrapT =
    fabricTexture.roughnessMap.wrapS =
    fabricTexture.roughnessMap.wrapT =
    fabricTexture.aoMap.wrapS =
    fabricTexture.aoMap.wrapT =
      THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial
          color={chairColor.color}
          {...(material === "leather" ? leatherTexture : fabricTexture)}
        />
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} position={[0, 0.064, 0.045]}>
        <meshStandardMaterial {...fabricTexture} color={cushionColor.color} />
      </mesh>

      <mesh
        geometry={nodes.Legs1.geometry}
        material={materials.Legs}
        visible={legs === 1}
      />
      <mesh
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={legs === 2}
      />
    </group>
  );
};

useGLTF.preload("./models/chair.gltf");

export default Chair;
