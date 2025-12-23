import React from "react";
import { motion, useInView } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 14,
  once = false, // ✅ IMPORTANT: animate again when re-entering
}) {
  const ref = React.useRef(null);

  // ✅ once=false => triggers every time it enters view
  const isInView = useInView(ref, { once, margin: "0px 0px -15% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, scale: 0.985 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y, scale: 0.985 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
