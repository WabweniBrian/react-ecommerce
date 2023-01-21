import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  rateProduct,
  removeItem,
  whilistStore,
} from "../features/whilistSlice";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../features/cartSlice";

import { Routes } from "../components";

const Whilist = () => {
  const { whilistItems } = useSelector(whilistStore);
  const dispatch = useDispatch();

  const handleRating = (id, rating) => {
    dispatch(rateProduct({ id, rating }));
  };

  return (
    <section className="pt-40 min-h-screen lg:px-[12%]">
      <Routes />
      <h1 className="text-center text-2xl md:text-4xl my-3 opacity-70">
        Your Whilist Items
      </h1>
      {whilistItems.map((item) => {
        const { id, name, price, mainImage, rating, inStock } = item;
        return (
          <div className="group py-4 border-b mt-6 sm:mt-0" key={id}>
            <div className="flex-center-between flex-wrap sm:flex-nowrap gap-6">
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
                  <div className="flex gap-2 mt-1 text-slate-500 sm:cursor-pointer text-sm">
                    {Array.apply(null, { length: 5 }).map((element, i) => (
                      <FaStar
                        onClick={() => handleRating(id, i + 1)}
                        key={i + 1}
                        className={`${rating > i && "text-accent"}`}
                      />
                    ))}
                    <span className="opacity-70">(256)</span>
                  </div>
                  <h5
                    className={`${
                      inStock ? "text-green-500" : "text-red-500"
                    } text-sm`}
                  >
                    {inStock ? "In Stock" : "Out Of Stock"}
                  </h5>
                </div>

                <div className="text-right">
                  <h1 className="text-xl">${price}</h1>
                  <span className="text-xs line-through opacity-60">
                    $282.21
                  </span>
                  <p className="text-xs">Added December 25, 2022</p>
                </div>
              </div>
            </div>

            <div className="flex-center-between">
              <h5
                className="underline text-red-500 sm:cursor-pointer"
                onClick={() => dispatch(removeItem(id))}
              >
                Remove
              </h5>
              <button
                className="px-5 py-1 bg-accent hover:bg-yellow-600 text-white transition-a capitalize rounded"
                onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
              >
                add to cart
              </button>
            </div>
          </div>
        );
      })}
      {whilistItems.length < 1 && (
        <div className="min-h-screen flex justify-center">
          <h1 className="text-4xl opacity-60">No Items in Whilist</h1>
        </div>
      )}
    </section>
  );
};

export default Whilist;
