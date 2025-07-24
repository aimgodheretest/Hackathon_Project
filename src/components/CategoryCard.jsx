import React from "react";
import { motion } from "framer-motion";

const CategoryCard = ({ name, image }) => {
  // Animation variants that sync with parent components
  const cardVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="overflow-hidden border border-gray-200 rounded-xl bg-white"
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
    >
      <div className="aspect-square relative bg-gray-200 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
          variants={imageVariants}
          whileHover="hover"
        />
      </div>
      <div className="p-4 text-center">
        <motion.h3
          className="font-medium"
          whileHover={{ color: "#16a34a" }} // green-600
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
