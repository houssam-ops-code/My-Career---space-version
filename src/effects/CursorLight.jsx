import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function CursorLight() {
  const light = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (!light.current) return;

    light.current.position.x +=
      (mouse.x * 8 - light.current.position.x) * 0.08;

    light.current.position.y +=
      (mouse.y * 5 - light.current.position.y) * 0.08;

    light.current.position.z = 4;
  });

  return (
    <pointLight
      ref={light}
      intensity={15}
      distance={20}
      color="#66ccff"
    />
  );
}

export default CursorLight;