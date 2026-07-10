import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Nebula() {

    const nebula = useRef();

    useFrame((state)=>{

        nebula.current.rotation.z =
            state.clock.elapsedTime * 0.01;

    });

    return(

        <mesh
            ref={nebula}
            position={[0,0,-20]}
        >

            <planeGeometry args={[70,70]} />

            <meshBasicMaterial
                color="#3f2b96"
                transparent
                opacity={0.12}
            />

        </mesh>

    )

}

export default Nebula;