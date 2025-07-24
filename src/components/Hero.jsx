import React from "react";
import HeroImg from "../assets/Hero1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.section
      className="relative bg-green-600 text-white mt-12 md:mt-15"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center px-6 md:px-0 gap-7">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            Fresh <span className="text-orange-400">Groceries</span> Delivered
            to Your Door
          </motion.h1>
          <motion.p className="text-lg mb-6" variants={itemVariants}>
            Shop from our wide selection of fresh fruits, vegetables, dairy, and
            more. Get same-day delivery!
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 items-center"
            variants={itemVariants}
          >
            <Link to={"/shop"}>
              <motion.button
                className="cursor-pointer bg-white text-green-600 hover:bg-gray-100 rounded-full px-3 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>
            </Link>
            <Link to={"/about"}>
              <motion.button
                className="text-white cursor-pointer border-white bg-green-700 hover:bg-green-600 rounded-full px-3 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          variants={imageVariants}
        >
          <div className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm"></div>
          <img src={HeroImg} alt="" className="z-10" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
