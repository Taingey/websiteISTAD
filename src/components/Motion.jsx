
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


export const MotionTop = ({ children }) => (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: -10, opacity: 1 }}
    exit={{ y: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    whileTap="tap"
    whileHover="hover"
  >
    {children}
  </motion.div>
);


export const MotionBottom = ({ children }) => (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: -10, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileTap="tap"
      whileHover="hover"
    >
      {children}
    </motion.div>
  );


  export const MotionLeft = ({ children }) => (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 10, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileTap="tap"
      whileHover="hover"
    >
      {children}
    </motion.div>
  );
