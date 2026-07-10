import { Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function HologramRing() {

    const ring = useRef();

    useFrame((state)=>{

        ring.current.rotation.z += 0.004;

        ring.current.rotation.x =
            Math.sin(state.clock.elapsedTime)*0.15;

    });

    return(

        <Torus

            ref={ring}

            args={[1.15,0.03,24,120]}

            rotation={[Math.PI/2,0,0]}

            position={[0,-1.15,0]}

        >

            <meshBasicMaterial

                color="#58a6ff"

                transparent

                opacity={0.55}

            />

        </Torus>

    )

}

export default HologramRing;