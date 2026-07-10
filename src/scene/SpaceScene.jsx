import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Particles from "../effects/Particles";
import CursorLight from "../effects/CursorLight";
import Stars from "./Stars";
import Planet from "./Planet";
import Nebula from "./Nebula";
import CameraRig from "./CameraRig";
import Glow from "../effects/Glow";
import PostProcessing from "../effects/PostProcessing";
import Player from "../player/Player";

function SpaceScene() {
  return (
    <div className="space-scene">
      <Canvas
            shadows
            gl={{ antialias:true }}
        >

        <color attach="background" args={["#02030d"]} />

        <ambientLight intensity={0.18}/>

        <pointLight
            position={[5,5,5]}
            intensity={45}
            color="#59a8ff"
        />

        <pointLight
            position={[-5,-3,-4]}
            intensity={8}
            color="#642bff"
        />

        <directionalLight
            intensity={1}
            position={[10,5,3]}
        />

        <Suspense fallback={null}>

          <CameraRig />

          <Stars />

          <Nebula />

          <CursorLight />

          <Particles />

          <Stars />

          <Nebula />

          <Glow />

          <Planet />

          <Player />

          <PostProcessing />

        </Suspense>

        

      </Canvas>

    </div>
  );
}

export default SpaceScene;