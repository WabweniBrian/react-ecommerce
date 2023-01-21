import React from "react";
import { useSelector } from "react-redux";
import { cartStore } from "../../features/cartSlice";
import SingleDiscounted from "./SingleDiscounted";

const Discounted = () => {
  const { products } = useSelector(cartStore);

  const discountedProducts = products.filter(
    (product) =>
      product.category === "mobile-gadgets" || product.category === "other"
  );

  return (
    <section className="pt-20">
      <h1 className="text-2xl heading">Tech Discounts</h1>
      <div className="my-4 grid grid-cols-2fr gap-4">
        {discountedProducts?.map((product) => {
          return <SingleDiscounted {...product} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default Discounted;
