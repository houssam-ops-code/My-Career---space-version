import { motion } from "framer-motion";
import { scaleIn } from "../utils/animationVariants";

function ScaleIn({ children }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default ScaleIn;