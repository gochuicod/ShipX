"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxSection({
  children,
  className = "",
  distance = 100, // how far it moves up/down
  stiffness = 120,
  damping = 8,
  mass = 0.8,
  once = false,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start entering -> start leaving
  });

  // Map scroll progress (0 to 1) to y movement
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [distance, 0, -distance],
  );
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness,
        damping,
        mass,
      }}
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
