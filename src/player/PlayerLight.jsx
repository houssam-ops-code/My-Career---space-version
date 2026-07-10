import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function PlayerLight() {

  const light = useRef();

  useFrame((state) => {

    light.current.intensity =
      8 + Math.sin(state.clock.elapsedTime * 2) * 0.8;

  });

  return (

    <pointLight

      ref={light}

      color="#58a6ff"

      intensity={8}

      distance={8}

      position={[0, 2, 1]}

    />

  );

}

export default PlayerLight;