import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import fruits from "../assets/fruits.png";
import vegetables from "../assets/vegetabels.png";
import dairy from "../assets/dairy.png";
import bakery from "../assets/bakery.png";
import meat from "../assets/meat.png";
import beverages from "../assets/beverages.png";
import CategoryCard from "./CategoryCard";

const categoryItems = [
  { name: "Fruits", image: fruits },
  { name: "Vegetables", image: vegetables },
  { name: "Dairy", image: dairy },
  { name: "Bakery", image: bakery },
  { name: "Meat", image: meat },
  { name: "Beverages", image: beverages },
];

const Category = () => {
  // Animation variants (consistent with FeaturedProducts)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <motion.section
      className="py-12 bg-gray-50 px-6 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          variants={title}
        >
          Shop by Category
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={container}
        >
          <AnimatePresence>
            {categoryItems.map((item, index) => (
              <motion.div key={index} variants={item} whileHover="hover">
                <CategoryCard name={item.name} image={item.image} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Category;
