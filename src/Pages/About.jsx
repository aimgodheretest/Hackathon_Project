import { motion } from "framer-motion";
import { Leaf, ShoppingBag, Heart, Truck } from "lucide-react";
import FreshMart from "../assets/FreshMart.jpg";

const values = [
  {
    title: "Freshness",
    para: "We're committed to providing the freshest produce and products, sourced locally whenever possible.",
    logo: <Leaf className="h-8 w-8" />,
    color: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    title: "Quality",
    para: "We carefully select every product on our shelves to ensure the highest quality for our customers.",
    logo: <ShoppingBag className="h-8 w-8" />,
    color: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    title: "Community",
    para: "We're proud to support local farmers, producers, and community initiatives in every neighborhood we serve.",
    logo: <Heart className="h-8 w-8" />,
    color: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    title: "Sustainability",
    para: "We're committed to environmentally friendly practices and reducing our carbon footprint.",
    logo: <Truck className="h-8 w-8" />,
    color: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-4 mt-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-green-700">
            About FreshMart
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your neighborhood grocery store committed to providing fresh,
            quality products since 2025.
          </p>
        </motion.div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:mb-20">
          <motion.div initial="hidden" animate="visible" variants={container}>
            <motion.h2
              variants={item}
              className="text-3xl font-semibold mb-6 text-green-600"
            >
              Our Story
            </motion.h2>
            <motion.p variants={item} className="mb-4 text-gray-600">
              FreshMart began with a simple idea: to create a grocery store that
              offers the freshest produce, highest quality meats, and finest
              selection of everyday essentials at fair prices.
            </motion.p>
            <motion.p variants={item} className="mb-4 text-gray-600">
              Founded in 2025 by the Johnson family, our first store opened in
              Grocery City with just 15 employees. Today, we've grown to 25
              locations across the state, but our commitment to quality and
              community remains unchanged.
            </motion.p>
            <motion.p variants={item} className="text-gray-600">
              We work directly with local farmers and producers to bring you the
              best products while supporting our local economy. Our team members
              are passionate about food and dedicated to providing exceptional
              customer service.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariant}
            className="relative overflow-hidden rounded-lg shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src={FreshMart}
              alt="FreshMart store front"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20 mt-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-10 text-center text-green-600"
          >
            Our Values
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`rounded-lg bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300`}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
              >
                <motion.div
                  className={`${value.color} p-6 flex flex-col items-center`}
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className={`p-4 rounded-full mb-4 ${value.textColor}`}
                    whileHover={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {value.logo}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-medium mb-2"
                    whileHover={{ color: value.textColor }}
                  >
                    {value.title}
                  </motion.h3>
                </motion.div>
                <motion.div
                  className="p-6 pt-0"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  <p className="text-gray-600">{value.para}</p>
                  <motion.div
                    className="mt-4"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`h-1 ${value.color.replace(
                        "100",
                        "400"
                      )} rounded-full`}
                    ></div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Careers CTA */}
        <motion.div
          className="bg-green-50 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-600 text-center">
            Join the FreshMart Family
          </h2>
          <p className="text-center text-gray-600 mb-6">
            We're always looking for passionate individuals to join our team.
            Check out our current openings!
          </p>
          <div className="flex justify-center">
            <motion.a
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(22, 163, 74, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Career Opportunities
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
