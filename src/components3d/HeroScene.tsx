import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Character = () => {
  const groupRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF("/models/cool_man.glb");

  useFrame((state) => {
    if (!groupRef.current) return;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    groupRef.current.rotation.y +=
      (mouseX * 0.25 - groupRef.current.rotation.y) * 0.03;

    groupRef.current.rotation.x +=
      (-mouseY * 0.12 - groupRef.current.rotation.x) * 0.03;
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.08}
      floatIntensity={0.25}
    >
      <group
        ref={groupRef}
        position={[0, -1.8, 0]}
        scale={2.2}
      >
        <primitive object={scene} />
      </group>
    </Float>
  );
};

const HeroScene = () => {
  return (
    <div className="hero-3d">
      <Canvas
        camera={{
          position: [0, 0.5, 7],
          fov: 40,
        }}
      >
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[3, 5, 5]}
          intensity={4}
        />

        <pointLight
  position={[3, 2, 4]}
  color="#8b5cf6"
  intensity={30}
  distance={12}
/>

        <pointLight
          position={[-3, 2, 3]}
          color="#ffffff"
          intensity={15}
          distance={10}
        />

        <pointLight
          position={[0, 2, -4]}
          color="#7c3aed"
          intensity={15}
          distance={10}
        />

        <Character />

        <Environment preset="city" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/models/cool_man.glb");

export default HeroScene;