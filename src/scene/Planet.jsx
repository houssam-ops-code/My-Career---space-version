import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Planet(){

    const planet = useRef();

    const atmosphere = useRef();

    useFrame((state)=>{

        planet.current.rotation.y += 0.002;

        planet.current.position.y =
            Math.sin(state.clock.elapsedTime*.5)*0.15;

        atmosphere.current.rotation.y -= 0.0008;

    });

    return(

        <group position={[0,-.5,-6]}>

            {/* Planet */}

            <mesh ref={planet}>

                <sphereGeometry args={[2.1,64,64]}/>

                <meshStandardMaterial

                    color="#0d2345"

                    roughness={1}

                    metalness={0.15}

                />

            </mesh>

            {/* Atmosphere */}

            <mesh ref={atmosphere}>

                <sphereGeometry args={[2.22,64,64]}/>

                <meshBasicMaterial

                    color="#4fa9ff"

                    transparent

                    opacity={0.15}

                    side={2}

                />

            </mesh>

        </group>

    )

}

export default Planet;