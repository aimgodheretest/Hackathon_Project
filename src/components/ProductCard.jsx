import { ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardHover = {
    y: -5,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  };

  const buttonHover = {
    scale: 1.02,
    backgroundColor: "#16a34a",
    transition: { duration: 0.2 },
  };

  const buttonTap = {
    scale: 0.98,
  };

  const imageHover = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  const iconHover = {
    rotate: -5,
    scale: 1.2,
    transition: { duration: 0.3 },
  };

  const addToCart = (product) => {
    const productExists = cart.some((item) => item.id === product.id);
    if (productExists) {
      let newUnit = product.unit;
      newUnit += 1;
      dispatch(setCart([...cart])); //Return the same cart without adding duplicate product
      toast("Product is already in the cart!");
    } else {
      dispatch(setCart([...cart, product])); //Add product if not already in cart
      toast.success("Product is added to cart!");
    }
  };

  return (
    <motion.div
      className="overflow-hidden transition-all hover:shadow-md border border-gray-200 rounded-lg bg-white"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={cardHover}
    >
      <div>
        <motion.div className="aspect-square relative bg-gray-200 overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-[195px]"
            whileHover={imageHover}
          />
        </motion.div>
        <div className="px-3">
          <p className="text-sm mt-1 text-gray-500">{product.category}</p>
          <h3 className="font-semibold text-sm mt-1 h-[40px] text-gray-800 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{product.quantity}</p>
          <p className="font-bold mt-1 text-gray-700">
            ₹{product.price?.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="p-4 pt-1">
        <motion.button
          onClick={() => addToCart(product)}
          className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center py-2 rounded-lg cursor-pointer"
          whileHover={buttonHover}
          whileTap={buttonTap}
        >
          <motion.span whileHover={iconHover}>
            <ShoppingCart className="w-4 h-4 mr-2" />
          </motion.span>
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
