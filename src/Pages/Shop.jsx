import React, { useState, useRef } from "react";
import { products } from "../Utils/Data";
import ProductCard from "../components/ProductCard";
import empty from "../assets/empty.jpg";
import { FaFilter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const rangeRef = useRef(null);

  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handleThumbDrag = (e, info, thumbType) => {
    if (!rangeRef.current) return;

    const rect = rangeRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(info.point.x - rect.left, 0), rect.width);
    const percentage = x / rect.width;
    const newValue = Math.round(percentage * 500);

    if (thumbType === "min") {
      setPriceRange([Math.min(newValue, priceRange[1] - 10), priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], Math.max(newValue, priceRange[0] + 10)]);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const filterPanel = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  const PriceRangeSlider = () => {
    const minVal = priceRange[0];
    const maxVal = priceRange[1];
    const minPos = (minVal / 500) * 100;
    const maxPos = (maxVal / 500) * 100;

    return (
      <div className="mb-4">
        <label className="block mb-2">
          Price Range: ₹{minVal} - ₹{maxVal}
        </label>

        <div className="relative h-8 w-full" ref={rangeRef}>
          {/* Background track */}
          <div className="absolute top-1/2 w-full h-1 bg-gray-200 rounded-full transform -translate-y-1/2"></div>

          {/* Progress bar */}
          <div
            className="absolute top-1/2 h-1 bg-green-500 rounded-full transform -translate-y-1/2"
            style={{
              left: `${minPos}%`,
              width: `${maxPos - minPos}%`,
            }}
          ></div>

          {/* Min thumb */}
          <motion.div
            className="absolute top-1/2 w-4 h-4 bg-green-600 rounded-full transform -translate-y-1/2 -translate-x-1/2 cursor-pointer z-10"
            style={{ left: `${minPos}%` }}
            drag="x"
            dragConstraints={rangeRef}
            dragElastic={0}
            dragMomentum={false}
            onDrag={(e, info) => handleThumbDrag(e, info, "min")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />

          {/* Max thumb */}
          <motion.div
            className="absolute top-1/2 w-4 h-4 bg-green-600 rounded-full transform -translate-y-1/2 -translate-x-1/2 cursor-pointer z-10"
            style={{ left: `${maxPos}%` }}
            drag="x"
            dragConstraints={rangeRef}
            dragElastic={0}
            dragMomentum={false}
            onDrag={(e, info) => handleThumbDrag(e, info, "max")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto flex flex-col lg:gap-6 my-7 lg:mt-28 mt-24 h-max"
    >
      {/* Desktop filter section */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="col-span1 p-4 bg-gray-100 h-max rounded-lg fixed w-[280px] mb-10 hidden md:block shadow-lg"
        whileHover={{
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          y: -5,
        }}
      >
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <motion.input
          placeholder="Search..."
          className="mb-4 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          whileFocus={{ scale: 1.02 }}
        />
        <motion.select
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setCategory(e.target.value)}
          whileHover={{ scale: 1.01 }}
          whileFocus={{ scale: 1.02 }}
        >
          <option value="">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
        </motion.select>

        <PriceRangeSlider />

        <motion.button
          className="bg-red-500 px-3 py-1 rounded-md text-white cursor-pointer w-full"
          onClick={() => {
            setSearch("");
            setCategory("");
            setPriceRange([0, 500]);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reset Filters
        </motion.button>
      </motion.div>

      {/* Mobile filter */}
      <motion.div
        className={`md:hidden bg-gray-100 flex justify-between items-center mx-4 px-4 py-3 ${
          openFilter ? "rounded-t-md" : "rounded-md"
        } shadow-md`}
        whileTap={{ scale: 0.98 }}
      >
        <h1 className="font-semibold text-lg">Filters</h1>
        <motion.div whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }}>
          <FaFilter
            onClick={toggleFilter}
            className="text-gray-800 cursor-pointer text-xl"
          />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {openFilter && (
          <motion.div
            className="bg-gray-100 p-4 mx-4 rounded-b-md md:hidden shadow-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={filterPanel}
            transition={{ duration: 0.3 }}
          >
            <motion.input
              placeholder="Search..."
              className="mb-4 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.select
              className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setCategory(e.target.value)}
              whileHover={{ scale: 1.01 }}
            >
              <option value="">All Categories</option>
              <option value="Fruits">Fruits</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Meat">Meat</option>
            </motion.select>

            <PriceRangeSlider />

            <motion.button
              className="bg-red-500 px-3 py-1 rounded-md text-white cursor-pointer w-full"
              onClick={() => {
                setSearch("");
                setCategory("");
                setPriceRange([0, 500]);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset Filters
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products section */}
      {filteredProducts.length > 0 ? (
        <motion.div
          className="col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-[300px] px-4 md:px-0 mt-6 md:mt-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="lg:ml-[300px] flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.img
            src={empty}
            alt="No products found"
            className="w-[500px]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Shop;
