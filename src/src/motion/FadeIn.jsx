import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";

function FadeIn({ children }) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;