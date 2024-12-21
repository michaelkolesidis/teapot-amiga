import { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export const Teapot = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./models/teapot.glb');

  const teapot = useRef();

  useFrame((state, delta) => {
    teapot.current.rotation.y += delta * 0.25;
  });

  return (
    <group {...props} ref={teapot} dispose={null}>
      <mesh
        ref={ref}
        name="teapot"
        castShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        rotation={[-Math.PI / 2, 0, -1.2]}
      />
    </group>
  );
});

useGLTF.preload('./models/teapot.glb');
