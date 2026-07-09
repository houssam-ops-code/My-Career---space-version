import { motion } from "framer-motion";

function Star({

    x,

    y,

    size=3

}){

    return(

        <motion.div

            className="star"

            style={{

                left:x,

                top:y,

                width:size,

                height:size

            }}

        />

    );

}

export default Star;