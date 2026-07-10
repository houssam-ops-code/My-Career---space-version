import { Float } from "@react-three/drei";
import Astronaut from "./Astronaut";
import PlayerLight from "./PlayerLight";
import HologramRing from "./HologramRing";

function Player() {
  return (
    <group position={[0, -1.4, 0]}>

      <Float
        speed={1.2}
        rotationIntensity={0.2}
        floatIntensity={0.35}
      >

        <Astronaut />

        <HologramRing/>

      </Float>

      <PlayerLight />

    </group>
  );
}

export default Player;