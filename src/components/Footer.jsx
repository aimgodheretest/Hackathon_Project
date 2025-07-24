import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  // Animation variants
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

  const socialIcon = {
    hover: {
      y: -3,
      color: "#4ade80", // green-400
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.9,
    },
  };

  const linkItem = {
    hover: {
      x: 5,
      color: "#4ade80", // green-400
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.footer
      className="bg-gray-800 text-white py-12 px-4 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={container}
        >
          {/* Company Info */}
          <motion.div variants={item}>
            <motion.h3 className="text-xl font-bold mb-4" whileHover={{ x: 3 }}>
              FreshMart
            </motion.h3>
            <motion.p className="mb-4">
              Your one-stop shop for fresh groceries delivered to your doorstep.
            </motion.p>
            <div className="mt-3">
              <h3 className="font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.div
                  variants={socialIcon}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaFacebook className="w-5 h-5" />
                </motion.div>
                <motion.div
                  variants={socialIcon}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaInstagram className="w-5 h-5" />
                </motion.div>
                <motion.div
                  variants={socialIcon}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaTwitter className="w-5 h-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links 1 */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Contact Us", "FAQ", "Privacy Policy"].map(
                (link) => (
                  <motion.li
                    key={link}
                    className="cursor-pointer"
                    variants={linkItem}
                    whileHover="hover"
                  >
                    {link}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Quick Links 2 */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {["My Account", "Track Order", "Shipping Policy", "Returns"].map(
                (link) => (
                  <motion.li
                    key={link}
                    className="cursor-pointer"
                    variants={linkItem}
                    whileHover="hover"
                  >
                    {link}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <motion.p className="mb-2" whileHover={{ x: 3 }}>
              123 Grocery St, Food City
            </motion.p>
            <motion.p className="mb-2" whileHover={{ x: 3 }}>
              Phone: (123) 456-7890
            </motion.p>
            <motion.p className="mb-2" whileHover={{ x: 3 }}>
              Email: info@freshmart.com
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 text-center"
          variants={item}
        >
          <p>
            &copy; {new Date().getFullYear()} FreshMart. All rights reserved
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
