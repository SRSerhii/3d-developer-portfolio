import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("/earth_scene-transformed.glb");
  return (
    <primitive
      object={earth.scene}
      scale={1.7}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const CameraLight = () => {
  const lightRef = useRef();
  useFrame(({ camera }) => {
    if (lightRef.current) {
      lightRef.current.position.copy(camera.position);
    }
  });
  return (
    <directionalLight
      ref={lightRef}
      intensity={20}
      color={"#ffffff"}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Static light always shining from viewer’s POV */}
        <CameraLight />

        {/* Dynamic light */}
        <directionalLight position={[5, 10, 10]} intensity={10} />    

        <Earth />
        <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
