import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Stars() {
  const ref = useRef();

  const positions = useMemo(() => {
    const array = new Float32Array(3000 * 3);

    for (let i = 0; i < 3000; i++) {
      array[i * 3] = (Math.random() - 0.5) * 120;
      array[i * 3 + 1] = (Math.random() - 0.5) * 120;
      array[i * 3 + 2] = (Math.random() - 0.5) * 120;
    }

    return array;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.08}
        color="#ffffff"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default Stars;