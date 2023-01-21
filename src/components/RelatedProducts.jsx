import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaCheckCircle, FaHeart, FaStar } from "react-icons/fa";
import {
  FiChevronLeft,
  FiChevronRight,
  FiEye,
  FiHeart,
  FiRefreshCcw,
  FiShoppingCart,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, rateProduct } from "../features/cartSlice";
import { addToCompare, compareStore } from "../features/compareSlice";
import { addToWhilist, whilistStore } from "../features/whilistSlice";

const RelatedProducts = ({ relatedproducts }) => {
  const { whilistItems } = useSelector(whilistStore);
  const { compareItems } = useSelector(compareStore);
  const productContainer = useRef(null);
  const [isScroll, setIsscroll] = useState(false);
  const scrollContainer = (direction) => {
    direction === "right"
      ? (productContainer.current.scrollLeft += 200)
      : (productContainer.current.scrollLeft -= 200);
    productContainer.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  };

  const dispatch = useDispatch();

  const handleRating = (id, rating) => {
    dispatch(rateProduct({ id, rating }));
  };

  return (
    <section className="pt-20">
      <div className="flex-center-between justify-end">
        <h1 className="text-2xl heading">you may also like</h1>
        <div className="hidden sm:flex-align-center gap-3">
          <button
            className={`p-2 text-slate-100 bg-accent hover:bg-accent transition-a rounded-lg shadow-lg ${
              !isScroll && "opacity-50 cursor-not-allowed"
            }`}
            onClick={() => scrollContainer("left")}
          >
            <FiChevronLeft />
          </button>
          <button
            className="p-2 text-slate-100 bg-accent hover:bg-accent transition-a rounded-lg shadow-lg"
            onClick={() => scrollContainer("right")}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div
        className="flex gap-x-4 overflow-auto hide-scrollbar scroll-smooth pt-10 py-8"
        ref={productContainer}
      >
        {relatedproducts.map((relatedproduct) => {
          const { id, name, price, category, mainImage, rating, inStock } =
            relatedproduct;
          let ids = [...new Set(whilistItems.map((fav) => fav.id))];
          let heartIcon = ids.includes(id) ? true : false;
          let compareIds = [...new Set(compareItems.map((item) => item.id))];
          let checkIcon = compareIds.includes(id) ? true : false;
          return (
            <div
              className="bg-white rounded-md shadow-light p-4 border-light shrink-0 group relative overflow-hidden"
              key={id}
            >
              <Link to={`/store/${id}`}>
                <img
                  src={mainImage}
                  alt={name}
                  className="w-28 mb-4 mx-auto transition-a group-hover:scale-125"
                />
                <p className="text-sm capitalize text-accent">{category}</p>
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
              <div className="absolute right-2 top-2">
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
                <div>
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
                    {heartIcon ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FiHeart />
                    )}
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
