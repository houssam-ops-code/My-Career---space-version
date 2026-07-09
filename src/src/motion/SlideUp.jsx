import { motion } from "framer-motion";
import { slideUp } from "../utils/animationVariants";

function SlideUp({ children }) {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default SlideUp;