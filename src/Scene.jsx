import {
  TextureLoader,
  DoubleSide,
  NearestFilter,
  RepeatWrapping,
} from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Teapot } from './Teapot';

export default function Scene() {
  const texture = useLoader(TextureLoader, '/checkerboard.png');
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(60, 40);

  return (
    <Canvas
      shadows
      camera={{
        near: 0.1,
        far: 500,
        position: [0, 0.25, 5],
      }}
    >
      <OrbitControls
        minPolarAngle={Math.PI / 4} // Limit vertical angle to avoid going below the plane
        maxPolarAngle={Math.PI / 2} // Prevent going above the horizontal plane
        maxDistance={30}
      />

      {/* Lights */}
      <directionalLight
        position={[3, 10, 5]}
        intensity={3.5}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      />
      <ambientLight intensity={0.25} />

      {/* Objects */}
      <Teapot
        position={[0, 0.4, 2]}
        rotation={[0.2, Math.PI / 3, 0.25]}
        castShadow
      />
      <mesh
        position={[0, -0.5, 10]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[60, 40]} />
        <meshStandardMaterial side={DoubleSide} map={texture} color="#998888" />
      </mesh>
    </Canvas>
  );
}
