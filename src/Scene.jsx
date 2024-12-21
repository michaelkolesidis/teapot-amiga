import { useRef } from 'react';
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
  const teapot = useRef();
  const texture = useLoader(TextureLoader, '/checkerboard.png');
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(30, 20);

  return (
    <Canvas
      shadows
      camera={{
        near: 0.1,
        far: 50,
        position: [0, 0.25, 5],
      }}
    >
      <OrbitControls />

      {/* Lights */}
      <directionalLight
        position={[3, 10, 5]}
        intensity={3.5}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        // shadow-bias={-0.0005}
        // shadow-radius={0}
      />
      <ambientLight intensity={0.25} />

      {/* Objects */}
      <Teapot
        ref={teapot}
        position={[0, 0.4, 2]}
        rotation={[0.2, Math.PI / 3, 0.25]}
      />
      <mesh
        position={[0, -0.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial side={DoubleSide} map={texture} color="#998888" />
      </mesh>
    </Canvas>
  );
}
