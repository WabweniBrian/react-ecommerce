import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartStore,
  clearCart,
  closeCartModal,
  removeItem,
  toggleAmount,
} from "../features/cartSlice";
import { FiArrowLeft, FiDelete } from "react-icons/fi";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const CartItems = () => {
  const { totalAmount, cartItems, isCartModalOpen } = useSelector(cartStore);
  const dispatch = useDispatch();

  return (
    isCartModalOpen && (
      <motion.div
        className="fixed w-80 bg-white z-50 top-0 right-0 h-screen"
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        style={{ boxShadow: "4px 4px 30px rgba(0,0,0,0.3)" }}
      >
        <div className="flex-center-between px-4 py-2">
          <FiArrowLeft
            className="sm:cursor-pointer"
            onClick={() => dispatch(closeCartModal())}
          />
          <h1 className="text font-bold">Cart</h1>
          <motion.div
            className="py-[0.1rem] px-4 bg-slate-100 rounded-full flex-align-center gap-2 hover:bg-slate-200 sm:cursor-pointer"
            whileTap={{ scale: 0.6 }}
            onClick={() => dispatch(clearCart())}
          >
            <span>Clear</span>
            <FiDelete />
          </motion.div>
        </div>

        {cartItems.length < 1 && (
          <div className="flex-center-center h-full flex-col">
            <h1 className="text-4xl opacity-30 text-center mb-12">
              Cart Is Empty
            </h1>
            <img src="./images/emptyCart.svg" alt="" className="w-72 -mt-10" />
          </div>
        )}

        <div className="my-2 bg-primary rounded-tl-3xl rounded-tr-3xl">
          <div className="p-4 h-[50vh] overflow-auto hide-scrollbar">
            {cartItems.map((item) => {
              const { id, quantity, name, price, mainImage } = item;
              return (
                <div
                  className="bg-secondary p-2 mb-3 rounded-lg flex-align-center gap-x-3 sm:cursor-pointer text-slate-100 relative group"
                  key={id}
                >
                  <div
                    className="md:hidden w-5 h-5 md:group-hover:grid place-items-center rounded-full absolute -top-1 -left-1 text-[#949494] sm:cursor-pointer"
                    onClick={() => dispatch(removeItem(id))}
                  >
                    <FaTimesCircle />
                  </div>
                  <img
                    src={mainImage}
                    alt={name}
                    className="w-8 hover:scale-150 transition-a select-none"
                  />
                  <div>
                    <h1 className="text font-bold capitalize select-none">
                      {name.slice(0, 15)}...
                    </h1>
                    <h5 className="text-sm opacity-60 select-none">${price}</h5>
                  </div>
                  <div className="flex-align-center gap-x-2 ml-auto">
                    <motion.div
                      className="w-5 h-5 grid place-items-center rounded-md bg-primary"
                      whileTap={{ scale: 0.6 }}
                      onClick={() =>
                        dispatch(toggleAmount({ id, type: "decrease" }))
                      }
                    >
                      <BiMinus />
                    </motion.div>
                    <span className="select-none">{quantity}</span>
                    <motion.div
                      className="w-5 h-5 grid place-items-center rounded-md bg-primary"
                      whileTap={{ scale: 0.6 }}
                      onClick={() =>
                        dispatch(toggleAmount({ id, type: "increase" }))
                      }
                    >
                      <BiPlus />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="rounded-tr-3xl p-6 rounded-tl-3xl bg-secondary text-slate-300 h-[42vh]">
            <div className="pb-10">
              <div className="flex-center-between">
                <h5 className="text-muted">Sub Total</h5>
                <span className="text-muted">${totalAmount}</span>
              </div>
              <div className="flex-center-between mt-3">
                <h5 className="text-muted">Delivery</h5>
                <span className="text-muted">$2.5</span>
              </div>
            </div>

            <div className="flex-center-between pt-5 border-t border-slate-700">
              <h1 className="text-lg">Total</h1>
              <h1 className="text-lg text-muted">${totalAmount + 2.5}</h1>
            </div>
            <button className="w-full py-1 my-3 bg-gradient-to-tr  rounded-full from-orange-500 to-yellow-500 hover:bg-gradient-to-tl">
              <Link to="/checkout" className="!text-white py-1 px-20">
                Check Out
              </Link>
            </button>
          </div>
        </div>
      </motion.div>
    )
  );
};

export default CartItems;
