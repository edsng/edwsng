import React from 'react';
import { motion } from 'framer-motion';
import '../css/LoadingScreen.css';

const LoadingScreen = () => {
  const dotVariants = {
    start: { scale: 0.2, opacity: 0.5 },
    end: { scale: 1, opacity: 1 }
  };

  const dotTransition = {
    duration: 0.8,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  };

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loading-dot"
        variants={dotVariants}
        initial="start"
        animate="end"
        transition={dotTransition}
      />
    </motion.div>
  );
};

export default LoadingScreen;
