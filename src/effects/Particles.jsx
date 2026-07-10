import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Particles() {
  const particles = useRef();

  const positions = useMemo(() => {
    const array = new Float32Array(600 * 3);

    for (let i = 0; i < 600; i++) {
      array[i * 3] = (Math.random() - 0.5) * 25;
      array[i * 3 + 1] = (Math.random() - 0.5) * 18;
      array[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return array;
  }, []);

  useFrame((state) => {
    if (!particles.current) return;

    particles.current.rotation.y =
      state.clock.elapsedTime * 0.02;

    particles.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#7cc7ff"
        size={0.03}
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

export default Particles;