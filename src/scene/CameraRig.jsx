import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function CameraRig() {

  const { mouse, camera } = useThree();

  const target = useRef({
    x: 0,
    y: 0
  });

  useFrame(() => {

    target.current.x +=
      (mouse.x * 1.5 - target.current.x) * 0.05;

    target.current.y +=
      (mouse.y * 1.2 - target.current.y) * 0.05;

    camera.position.x = target.current.x;

    camera.position.y = target.current.y;

    camera.lookAt(0, 0, 0);

  });

  return null;
}

export default CameraRig;