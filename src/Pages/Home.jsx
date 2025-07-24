import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Category from "../components/Category";
import FeaturedProducts from "../components/FeaturedProducts";
import Template from "../components/Template";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Hero />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={sectionVariants}>
          <Category />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <FeaturedProducts />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Template />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
