import React from "react";
import { products } from "../utils/Data";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const FeaturedProducts = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const title = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const button = {
    hover: {
      scale: 1.05,
      backgroundColor: "#16a34a", // green-600
      color: "#ffffff",
      borderColor: "#16a34a",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.section
      className="py-12 px-3 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-bold mb-8" variants={title}>
          Featured Products
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 md:px-8"
          variants={container}
        >
          <AnimatePresence>
            {products.slice(0, 5).map((product) => (
              <motion.div
                key={product.id}
                variants={item}
                whileHover={{ y: -5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div className="mt-8 text-center" variants={item}>
          <Link to={"/shop"}>
            <motion.button
              className="rounded-full cursor-pointer border py-2 px-3 border-gray-500"
              variants={button}
              whileHover="hover"
              whileTap="tap"
            >
              View all Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedProducts;
