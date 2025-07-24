import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const cardHover = {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  };

  const inputFocus = {
    scale: 1.01,
    boxShadow: "0 0 0 2px rgba(22, 163, 74, 0.2)",
  };

  const buttonHover = {
    scale: 1.02,
    backgroundColor: "#16a34a",
    transition: { duration: 0.2 },
  };

  const buttonTap = {
    scale: 0.98,
  };

  const iconHover = {
    rotate: 10,
    scale: 1.1,
    transition: { duration: 0.3 },
  };

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center p-4 mt-16 md:mt-0">
        {/* Contact Form Card */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6"
          variants={itemVariants}
          whileHover={cardHover}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-2xl font-bold text-center text-green-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact Freshmart
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We would love to hear from you!
          </motion.p>

          <motion.form
            className="mt-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-4" variants={itemVariants}>
              <label className="block text-gray-700">Name</label>
              <motion.input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div className="mb-4" variants={itemVariants}>
              <label className="block text-gray-700">Email</label>
              <motion.input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
                required
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div className="mb-4" variants={itemVariants}>
              <label className="block text-gray-700">Message</label>
              <motion.textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Message"
                rows="4"
                required
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              whileHover={buttonHover}
              whileTap={buttonTap}
              variants={itemVariants}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Contact Information Card */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6"
          variants={itemVariants}
          whileHover={cardHover}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-2xl font-semibold mb-6 text-green-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact Information
          </motion.h2>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex items-start" variants={itemVariants}>
              <motion.div whileHover={iconHover}>
                <Phone className="h-5 w-5 text-green-600 mt-1 mr-3" />
              </motion.div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-gray-600">
                  (555) 765-4321 (Customer Service)
                </p>
              </div>
            </motion.div>

            <motion.div className="flex items-start" variants={itemVariants}>
              <motion.div whileHover={iconHover}>
                <Mail className="h-5 w-5 text-green-600 mt-1 mr-3" />
              </motion.div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">info@freshmart.com</p>
                <p className="text-gray-600">orders@freshmart.com</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start" variants={itemVariants}>
              <motion.div whileHover={iconHover}>
                <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
              </motion.div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">123 Fresh Avenue</p>
                <p className="text-gray-600">Produce City, PC 12345</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start" variants={itemVariants}>
              <motion.div whileHover={iconHover}>
                <Clock className="h-5 w-5 text-green-600 mt-1 mr-3" />
              </motion.div>
              <div>
                <h3 className="font-medium">Store Hours</h3>
                <div className="grid grid-cols-2 gap-x-4 text-gray-600">
                  <p>Monday - Friday:</p>
                  <p>7:00 AM - 9:00 PM</p>
                  <p>Saturday:</p>
                  <p>8:00 AM - 8:00 PM</p>
                  <p>Sunday:</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
