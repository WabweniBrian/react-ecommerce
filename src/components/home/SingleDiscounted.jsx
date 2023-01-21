import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiHeart, FiRefreshCcw, FiShoppingCart } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, rateProduct } from "../../features/cartSlice";
import { FaCheckCircle, FaHeart, FaStar } from "react-icons/fa";
import CountDown from "./CountDown";
import { addToWhilist, whilistStore } from "../../features/whilistSlice";
import { addToCompare, compareStore } from "../../features/compareSlice";

const SingleDiscounted = ({
  id,
  name,
  price,
  category,
  rating,
  mainImage,
  images,
  quatityInStock,
  discount,
  inStock,
}) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const handleRating = (id, rating) => {
    dispatch(rateProduct({ id, rating }));
  };

  const handleImage = (e) => {
    setImage(e.target.src);
  };
  const { whilistItems } = useSelector(whilistStore);
  const { compareItems } = useSelector(compareStore);

  let ids = [...new Set(whilistItems.map((fav) => fav.id))];
  let heartIcon = ids.includes(id) ? true : false;

  let compareIds = [...new Set(compareItems.map((item) => item.id))];
  let checkIcon = compareIds.includes(id) ? true : false;

  return (
    <div className="relative select-none">
      {!inStock && (
        <h1 className="text-3xl text-bold  text-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 z-10 pointer-events-none">
          out of stock
        </h1>
      )}

      <div
        className={`border-light shadow-light rounded-lg p-4 group relative ${
          !inStock && "opacity-50 pointer-events-none"
        }`}
      >
        <div className="flex gap-4">
          <div className="absolute top-1 left-1 px-2 py-[0.1rem] bg-yellow-500/30  rounded-full">
            <h5 className="text-xs text-yellow-600"> -{discount}%</h5>
          </div>
          <div className="image overflow-hidden p-2 relative">
            <Link to={`/store/${id}`}>
              <img
                src={image ? image : mainImage}
                alt={name}
                className="w-48 p-4 transition-a group-hover:scale-125 sm:cursor-pointer -ml-4"
              />
            </Link>

            <div className="absolute -right-1 top-2">
              <div
                className="sm:cursor-pointer p-2 hover:text-accent transition-a"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id,
                      name,
                      price,
                      mainImage,
                      inStock,
                      rating,
                      quantity: 1,
                    })
                  )
                }
              >
                <FiShoppingCart />
              </div>

              <div
                className="product-icons"
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
                {heartIcon ? <FaHeart className="text-red-500" /> : <FiHeart />}
              </div>
              <div
                className="product-icons"
                style={{ transitionDelay: "0.2s" }}
              >
                <Link to={`/store/${id}`}>
                  <FiEye />
                </Link>
              </div>
              <div
                className="product-icons"
                style={{ transitionDelay: "0.3s" }}
                onClick={() =>
                  dispatch(
                    addToCompare({
                      id,
                      name,
                      price,
                      mainImage,
                      inStock,
                    })
                  )
                }
              >
                {checkIcon ? (
                  <FaCheckCircle className="text-red-500" />
                ) : (
                  <FiRefreshCcw />
                )}
              </div>
              <div></div>
            </div>
            <div className="mt-4 flex gap-x-4">
              {images?.slice(0, 2).map((image, i) => {
                return (
                  <img
                    src={image}
                    alt=""
                    className="w-14 p-2 border-light sm:cursor-pointer"
                    key={i}
                    onClick={handleImage}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-accent text-xs capitalize">{category}</p>
            <Link to={`/store/${id}`}>
              <h1 className="my-2">{name.slice(0, 25)}...</h1>
            </Link>
            <div className="flex gap-2 mt-1 text-slate-500 sm:cursor-pointer text-sm">
              {Array.apply(null, { length: 5 }).map((element, i) => (
                <FaStar
                  onClick={() => handleRating(id, i + 1)}
                  key={i + 1}
                  className={`${rating > i && "text-accent"}`}
                />
              ))}
            </div>
            <h1 className="text-2xl !text-text-color my-4">
              ${price}{" "}
              <span className="line-through opacity-60 text-sm">$282.21</span>
            </h1>
            <p className="text-sm">{quatityInStock} items left</p>
            <div className="progressbar w-full h-1 bg-gray-200 rounded-full overflow-hidden my-2">
              <div
                className="bg-green-500 h-full w-1/2"
                style={{ width: `${(quatityInStock / 60) * 100}%` }}
              ></div>
            </div>
            {images && <CountDown inStock={inStock} />}
          </div>
        </div>
        {!images && <CountDown inStock={inStock} />}
      </div>
    </div>
  );
};

export default SingleDiscounted;
