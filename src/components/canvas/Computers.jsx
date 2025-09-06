import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/scene-transformed.glb");
  const groupRef = useRef();

  return (
    <mesh>
      {/* Ambient light */}
      <hemisphereLight intensity={0.35} groundColor="black" />

      {/* Attach lights to the group so they move/scale with the model */}
      <group
        ref={groupRef}
        scale={isMobile ? 0.7 : 0.37}
        position={isMobile ? [0, -1.0, -0.5] : [0, -1.25, -0.6]}
        rotation={[-0.01, -0.4, -0.15]}
      >
        {/* Model */}
        {computer.scene.children.map((child, idx) => (
          <primitive object={child} key={idx} />
        ))}

        {/* Lights relative to the model */}
        <spotLight
          position={[-5, 10, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
          shadow-mapSize={512}
        />
        <pointLight intensity={2} position={[2, 3, 2]} />
      </group>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 3, 5], fov: 25, near: 0.1, far: 5000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers isMobile={isMobile} />
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
