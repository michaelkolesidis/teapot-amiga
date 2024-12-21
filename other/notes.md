// Add teapots in random positions

import { useRef, useState } from 'react';

const [teapots, setTeapots] = useState([]);

const addRandomTeapot = () => {
  const position = [
    (Math.random() - 0.5) * 50, // X position (left and right spread)
    Math.random() * 5 + 0.5, // Y position (above the plane)
    Math.random() * -50 + 2, // Z position (spread in depth)
  ];

  setTeapots((prev) => [...prev, position]);
};

const handleKeyDown = (event) => {
  if (event.code === 'KeyT') {
    addRandomTeapot();
  }
};

// Add event listener on mount and clean up on unmount
useState(() => {
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);

{
  /* Dynamic Teapots */
}
{
  teapots.map((position, index) => (
    <Teapot
      key={index}
      position={position}
      rotation={[0.2, Math.random() * Math.PI * 2, 0.25]}
      castShadow
    />
  ));
}
