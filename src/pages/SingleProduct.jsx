/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addToCart, cartStore } from "../features/cartSlice";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronsRight, FiHeart } from "react-icons/fi";
import { addToWhilist } from "../features/whilistSlice";
import { useEffect } from "react";
import RelatedProducts from "../components/RelatedProducts";
import { Reviews } from "../components";

// import AboutProduct from "../components/AboutProduct";

const SingleProduct = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { products } = useSelector(cartStore);

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  const routePath = useLocation();

  const [image, setImage] = useState("");
  const [colorId, setColorId] = useState(1);

  const handleImage = (e) => {
    setImage(e.target.src);
  };

  const dispatch = useDispatch();
  const colors = [
    { id: 1, color: "bg-teal-800" },
    { id: 2, color: "bg-[#654c01]" },
    { id: 3, color: "bg-[#5d1c07]" },
  ];

  const handleColor = (id) => {
    setColorId(id);
  };

  const {
    id,
    name,
    price,
    quatityInStock,
    inStock,
    rating,
    category,
    discount,
    description,
    features,
    images,
    mainImage,
  } = product;

  useEffect(() => {
    setQuantity(quantity < 1 ? 1 : quantity);
  }, [quantity]);

  const relatedproducts = products.filter(
    (product) => product.category === category && product.id !== id
  );

  useEffect(() => {
    setImage(mainImage);
  }, [routePath]);

  return (
    <div className="pt-40">
      <section>
        <h1 className="text-3xl py-2 border-b">Product details</h1>
        <div className="mt-6 mb-4 flex-align-center gap-8 flex-wrap md:flex-nowrap border-b">
          <div className="w-full md:w-fit">
            <div className="flex-align-center gap-3 relative">
              {discount && (
                <div className="absolute top-2 md:-top-12 right-1 md:left-1 px-4 py-2 bg-red-500/30 w-fit rounded-full">
                  <h5 className=" text-red-600"> -{discount}%</h5>
                </div>
              )}
              <div
                className={`w-1/5 flex flex-col gap-y-4  ${!images && "!w-0"}`}
              >
                {images?.map((image, i) => {
                  return (
                    <div className="image" key={i}>
                      <img
                        src={image}
                        alt=""
                        className="w-32 transition-a hover:scale-110 sm:cursor-pointer"
                        onClick={handleImage}
                      />
                    </div>
                  );
                })}
              </div>
              <div className={`w-4/5 p-8 ${!images && "!w-full"}`}>
                <img
                  src={image ? image : mainImage}
                  alt={name}
                  className={`transition-a hover:scale-125 w-80 ${
                    !images && "w-96"
                  }`}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="my-2 text-xl md:text-2xl">{name}</h1>
            <h1 className="text-xl md:text-2xl">
              <span className="text-xs line-through opacity-70">$29.87</span> $
              {price}
            </h1>
            <div className="flex-align-center gap-2 my-2">
              <p>420 Customer Reviews</p>
              <div className="flex gap-2 my-2 text-slate-500 sm:cursor-pointer text-sm">
                {Array.apply(null, { length: 5 }).map((element, i) => (
                  <FaStar
                    key={i + 1}
                    className={`${rating > i && "text-yellow-500"}`}
                  />
                ))}
              </div>
            </div>
            <p>{description.slice(0, 200)}...</p>
            <div className="mt-2">
              <h5>
                Category: <span className="opacity-70">{category}</span>
              </h5>
              <h5>
                Availability:{" "}
                <span
                  className={`opacity-70 ${
                    inStock ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {inStock ? `${quatityInStock} In Stock` : "Out of Stock"}
                </span>
              </h5>
            </div>
            <div className="flex-align-center gap-3 my-2">
              {colors.map((color) => {
                let active = colorId === color.id ? "active" : "";
                return (
                  <div
                    className={`circle ${active} ${color.color}`}
                    key={color.id}
                    onClick={() => handleColor(color.id)}
                  ></div>
                );
              })}
            </div>
            <div className="flex-align-center gap-2 mt-4">
              <div
                className={`flex-align-center gap-2 py-1 px-4"  ${
                  !inStock && "opacity-50 pointer-events-none"
                }`}
              >
                <p>Quantity</p>
                <motion.div
                  className="w-8 h-8 grid place-items-center rounded-md bg-white shadow-light border-light sm:cursor-pointer"
                  whileTap={{ scale: 0.6 }}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <BiMinus />
                </motion.div>
                <span className="select-none">{quantity}</span>
                <motion.div
                  className="w-8 h-8 grid place-items-center rounded-md bg-white shadow-light border-light sm:cursor-pointer"
                  whileTap={{ scale: 0.6 }}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <BiPlus />
                </motion.div>
              </div>
              <button
                className={`btn select-none ${
                  !inStock && "opacity-50 pointer-events-none"
                }`}
                onClick={() =>
                  dispatch(
                    addToCart({
                      id,
                      name,
                      price,
                      mainImage,
                      inStock,
                      quantity,
                    })
                  )
                }
              >
                add to cart
              </button>
            </div>
            <div
              className="flex-align-center gap-2 px-4 py-1 bg-slate-100 sm:cursor-pointer w-fit my-4 hover:bg-slate-200 transition-a select-none"
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
              <FiHeart />
              <span>Add To Whilist</span>
            </div>
          </div>
        </div>
        <div className="mt-10 pb-4 border-b">
          <h1 className="my-2 text-xl">decription</h1>
          <p className="text-sm md:text-base">{description}</p>
          <h1 className="my-2 text-xl">Features</h1>
          {features.map((feature) => {
            return (
              <div className="flex-align-center gap-10 my-2">
                <FiChevronsRight className="text-sm text-accent" />
                <p className="text-sm md:text-base">{feature}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* <AboutProduct {...product} /> */}
      <RelatedProducts relatedproducts={relatedproducts} />
      <Reviews />
    </div>
  );
};

export default SingleProduct;
