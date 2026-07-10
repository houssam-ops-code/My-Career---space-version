import { EffectComposer, Bloom } from "@react-three/postprocessing";

function PostProcessing(){

    return(

        <EffectComposer>

            <Bloom

                intensity={1.2}

                luminanceThreshold={0.2}

                luminanceSmoothing={0.9}

            />

        </EffectComposer>

    )

}

export default PostProcessing;