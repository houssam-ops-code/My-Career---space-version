import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Glow() {

    const glow = useRef();

    useFrame((state)=>{

        glow.current.rotation.y += 0.001;

        glow.current.scale.x =
            1 + Math.sin(state.clock.elapsedTime)*0.02;

        glow.current.scale.y =
            1 + Math.sin(state.clock.elapsedTime)*0.02;

        glow.current.scale.z =
            1 + Math.sin(state.clock.elapsedTime)*0.02;

    });

    return(

        <mesh
            ref={glow}
            position={[0,-0.5,-6]}
        >

            <sphereGeometry args={[2.45,64,64]}/>

            <meshBasicMaterial

                color="#58a6ff"

                transparent

                opacity={0.08}

                side={2}

            />

        </mesh>

    )

}

export default Glow;