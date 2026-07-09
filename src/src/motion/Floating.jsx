import { motion } from "framer-motion";

function Floating({ 
                    children,
                    duration = 4,
                    delay = 0
                }) {

    return (

        <motion.div

            animate={{
                y: [0, -10, 0],
            }}

            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}

        >

            {children}

        </motion.div>

    );

}

export default Floating;