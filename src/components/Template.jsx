import React from "react";
import { motion } from "framer-motion";

const Template = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const button = {
    hover: {
      scale: 1.05,
      backgroundColor: "#16a34a", // green-700
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.section
      className="py-12 bg-green-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <div className="container px-4 mx-auto text-center">
        <motion.h2 className="text-3xl font-bold mb-4" variants={item}>
          Free Delivery on Your First Order
        </motion.h2>

        <motion.p className="text-lg mb-6 max-w-2xl mx-auto" variants={item}>
          Use code FRESH10 at checkout for free delivery on orders over $30
        </motion.p>

        <motion.button
          className="rounded-full bg-green-600 text-white px-3 py-2"
          variants={[item, button]}
          whileHover="hover"
          whileTap="tap"
        >
          Shop Now
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Template;
