import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

function Magnetic({
  children,
  strength = 0.25,
  className = "",
}) {

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 15,
  });

  function handleMouseMove(e) {

    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  }

  function handleMouseLeave() {

    x.set(0);
    y.set(0);

  }

  return (

    <motion.div

      ref={ref}

      className={className}

      style={{
        x: springX,
        y: springY,
      }}

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}

    >

      {children}

    </motion.div>

  );

}

export default Magnetic;