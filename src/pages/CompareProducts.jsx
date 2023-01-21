import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Routes } from "../components";
import { compareStore, removeItem } from "../features/compareSlice";

const CompareProducts = () => {
  const { compareItems } = useSelector(compareStore);
  const dispatch = useDispatch();

  console.log(compareItems);

  return (
    <section className="pt-40 min-h-screen">
      <Routes />
      <div className="my-4 flex-align-center flex-wrap gap-3">
        {compareItems.length < 1 && (
          <h1 className="text-3xl text-center mt-8 opacity-70">
            No Items To Compare
          </h1>
        )}
        {compareItems.map((item) => {
          const { id, name, mainImage, price, inStock } = item;
          return (
            <div className="w-full sm:w-[300px]" key={id}>
              <div className="image-bg-white rounded-lg border-light shadow-light p-3 relative group">
                <Link to={`/store/${id}`}>
                  <img
                    src={mainImage}
                    alt={name}
                    className="w-40 transition-a group-hover:scale-110 mx-auto"
                  />
                </Link>

                <div
                  className="absolute sm:cursor-pointer top-2 right-2 w-8 h-8 grid place-items-center rounded-full hover:bg-slate-100 transition-a"
                  onClick={() => dispatch(removeItem(id))}
                >
                  <FaTimes />
                </div>
              </div>
              <Link to={`/store/${id}`}>
                {" "}
                <h1 className="my-2">{name}</h1>
              </Link>
              <h1 className="border-b py-2">${price}</h1>
              <div className="flex-center-between py-2 border-b">
                <p>Brand:</p>
                <h5 className="text-sm opacity-70">Samsung</h5>
              </div>
              <div className="flex-center-between py-2 border-b">
                <p>Type:</p>
                <h5 className="text-sm opacity-70">Computers</h5>
              </div>
              <div className="flex-center-between py-2 border-b">
                <p>Availability:</p>
                <h5 className="text-sm opacity-70">
                  {inStock ? "In Stock" : "Out of Stock"}
                </h5>
              </div>
              <div className="flex-center-between py-2 border-b">
                <p>Color:</p>
                <div className="flex-align-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-600"></div>
                  <div className="w-4 h-4 rounded-full bg-teal-600"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CompareProducts;
