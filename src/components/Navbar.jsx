import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import CartComp from "./CartComp";
import { useSelector } from "react-redux";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { cart } = useSelector((store) => store.cart);

  const onClose = () => {
    setIsOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  // Animation variants
  const navItem = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      color: "#f97316", // orange-400
      transition: { duration: 0.2 },
    },
  };

  const overlay = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenu = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div>
      <motion.div
        className="mx-auto flex justify-between items-center px-6 py-3 fixed top-0 z-20 bg-green-100 w-full border border-gray-100 shadow-xl lg:px-[180px]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* logo section */}
        <Link to={"/"}>
          <motion.img
            src={Logo}
            alt=""
            className="md:w-52 w-40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        {/* menu section */}
        <nav className="flex gap-5">
          <ul className="text-xl font-semibold md:flex items-center gap-7 hidden">
            <Link to={"/"}>
              <motion.li
                variants={navItem}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                Home
              </motion.li>
            </Link>
            <Link to={"/shop"}>
              <motion.li
                variants={navItem}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                Shop
              </motion.li>
            </Link>
            <Link to={"/about"}>
              <motion.li
                variants={navItem}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                About
              </motion.li>
            </Link>
            <Link to={"/contact"}>
              <motion.li
                variants={navItem}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                Contact
              </motion.li>
            </Link>
          </ul>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link onClick={() => setIsOpen(true)}>
              <ShoppingCart className="w-6 h-6" />
              <motion.span
                className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={cart.length}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                {cart.length}
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
          >
            {isNavOpen ? (
              <HiMenuAlt3 className="h-7 w-7" onClick={toggleNav} />
            ) : (
              <HiMenuAlt1 className="h-7 w-7" onClick={toggleNav} />
            )}
          </motion.div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {isNavOpen && (
          <ResponsiveMenu
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
            variants={mobileMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black/70 z-40"
            onClick={() => setIsOpen(false)}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlay}
          />
        )}
      </AnimatePresence>

      <CartComp isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Navbar;
