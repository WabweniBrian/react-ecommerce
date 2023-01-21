import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Routes } from "../components";
import { cartStore, removeItem, toggleAmount } from "../features/cartSlice";
import { motion } from "framer-motion";
import { FiHeart, FiTrash } from "react-icons/fi";
import { addToWhilist, whilistStore } from "../features/whilistSlice";
import { FaHeart } from "react-icons/fa";

const Checkout = () => {
  const { cartItems, totalAmount, totalQuantity } = useSelector(cartStore);

  const dispatch = useDispatch();

  const { whilistItems } = useSelector(whilistStore);

  return (
    <section className="pt-40 min-h-screen">
      <Routes />
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="flex-5 shadow-light border-light rounded-lg">
          {cartItems.length < 1 && (
            <h1 className="text-3xl opacity-60 text-center mt-8">
              No Items to Checkout
            </h1>
          )}
          {cartItems.map((item) => {
            const { id, quantity, name, price, mainImage, inStock, rating } =
              item;
            let ids = [...new Set(whilistItems.map((fav) => fav.id))];
            let heartIcon = ids.includes(id) ? true : false;
            return (
              <div className="flex-center-between flex-wrap sm:flex-nowrap gap-6 border-b p-4 group">
                <Link to={`/store/${id}`} className="image mx-auto sm:m-0">
                  <img
                    src={mainImage}
                    alt={name}
                    className="w-32 group-hover:scale-110 transition-a"
                  />
                </Link>
                <div className="flex-center-between w-full">
                  <div>
                    <Link to={`/store/${id}`}>
                      <h1 className="text-lg my-2">{name}</h1>
                    </Link>
                    <p className="text-xs">Shipping Only</p>
                    <div className="flex-align-center gap-1">
                      <h5 className="opacity-70 text-sm line-through">
                        $38.27
                      </h5>
                      <h5 className="opacity-70">|</h5>
                      <h5
                        className={`${
                          inStock ? "text-green-500" : "text-red-500"
                        } text-sm`}
                      >
                        {inStock ? "In Stock" : "Out Of Stock"}
                      </h5>
                    </div>
                    <div className="flex-center-between gap-3">
                      <div
                        className={`flex-align-center gap-2 py-1 px-4"  ${
                          !inStock && "opacity-50 pointer-events-none"
                        }`}
                      >
                        <p>Quantity</p>
                        <motion.div
                          className="w-8 h-8 grid place-items-center rounded-md bg-white shadow-light border-light sm:cursor-pointer"
                          whileTap={{ scale: 0.6 }}
                          onClick={() =>
                            dispatch(toggleAmount({ id, type: "decrease" }))
                          }
                        >
                          <BiMinus />
                        </motion.div>
                        <span className="select-none">{quantity}</span>
                        <motion.div
                          className="w-8 h-8 grid place-items-center rounded-md bg-white shadow-light border-light sm:cursor-pointer"
                          whileTap={{ scale: 0.6 }}
                          onClick={() =>
                            dispatch(toggleAmount({ id, type: "increase" }))
                          }
                        >
                          <BiPlus />
                        </motion.div>
                      </div>
                      <div className="flex-align-center gap-3">
                        <div
                          className="flex-align-center gap-2 hover:text-red-500 sm:cursor-pointer transition-a"
                          onClick={() =>
                            dispatch(
                              addToWhilist({
                                id,
                                name,
                                price,
                                mainImage,
                                rating,
                                inStock,
                              })
                            )
                          }
                        >
                          {heartIcon ? (
                            <FaHeart className="text-red-500" />
                          ) : (
                            <FiHeart />
                          )}
                          <span
                            className={`text-sm ${heartIcon && "text-red-500"}`}
                          >
                            {heartIcon ? "Saved" : "Save"}
                          </span>
                        </div>
                        <div
                          className="flex-align-center gap-2 hover:text-red-500 sm:cursor-pointer transition-a"
                          onClick={() => dispatch(removeItem(id))}
                        >
                          <FiTrash />
                          <span className="text-sm">Delete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-2xl -ml-24 sm:m-0">${price}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-2 h-fit border-light shadow-light p-3 rounded-lg">
          <div className="flex-center-between">
            <h1>
              Subtotal <span className="opacity-70">(Items)</span>
            </h1>
            <h1>{totalQuantity}</h1>
          </div>
          <div className="flex-center-between mt-2">
            <h1>
              Price <span className="opacity-70">(Total)</span>
            </h1>
            <h1>${totalAmount}</h1>
          </div>
          <div className="flex-center-between mt-2 pb-4">
            <h1>Shipping</h1>
            <h1>$2.5</h1>
          </div>
          <div className="flex-center-between pt-4 border-t">
            <h1>Estimated Total</h1>
            <h1 className="text-red-500">${totalAmount + 2.5}</h1>
          </div>
          <button className="w-full py-1 my-4 bg-gradient-to-tr  rounded-full from-orange-500 to-yellow-500 hover:bg-gradient-to-tl">
            <Link to="/checkout" className="!text-white">
              Proceed to Checkout
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
