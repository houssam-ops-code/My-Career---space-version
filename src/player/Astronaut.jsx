import { Float } from "@react-three/drei";

function Astronaut() {
  return (
    <Float
      speed={2}
      rotationIntensity={0.15}
      floatIntensity={0.25}
    >
      <group>

        {/* HEAD */}

        <mesh position={[0, 1.55, 0]}>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial
            color="#050505"
            emissive="#3b82f6"
            emissiveIntensity={0.18}
            roughness={0.8}
          />
        </mesh>

        {/* BODY */}

        <mesh position={[0, 0.65, 0]}>
          <capsuleGeometry args={[0.35, 1.1, 8, 16]} />
          <meshStandardMaterial
            color="#080808"
            emissive="#3b82f6"
            emissiveIntensity={0.12}
          />
        </mesh>

        {/* LEFT ARM */}

        <mesh position={[-0.65, 0.8, 0]} rotation={[0, 0, 0.55]}>
          <capsuleGeometry args={[0.09, 0.75, 8, 8]} />
          <meshStandardMaterial
            color="#090909"
            emissive="#3b82f6"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* RIGHT ARM (PROJECT HAND) */}

        <mesh position={[0.75, 0.65, 0.35]} rotation={[0, 0, -1]}>
          <capsuleGeometry args={[0.09, 1, 8, 8]} />
          <meshStandardMaterial
            color="#090909"
            emissive="#3b82f6"
            emissiveIntensity={0.25}
          />
        </mesh>

        {/* LEFT LEG */}

        <mesh position={[-0.22, -0.75, 0]} rotation={[0, 0, 0.1]}>
          <capsuleGeometry args={[0.11, 0.95, 8, 8]} />
          <meshStandardMaterial color="#090909" />
        </mesh>

        {/* RIGHT LEG */}

        <mesh position={[0.22, -0.75, 0]} rotation={[0, 0, -0.1]}>
          <capsuleGeometry args={[0.11, 0.95, 8, 8]} />
          <meshStandardMaterial color="#090909" />
        </mesh>

      </group>
    </Float>
  );
}

export default Astronaut;