import React from "react";
import { Link } from "react-router-dom";
import { productCategories } from "../../data/products";

const ProductCategory = () => {
  return (
    <section className="pt-20 bg-slate-50">
      <div className="rounded-md sm:border-light sm:shadow-light grid grid-cols-1fr sm:gap-10 sm:p-10 sm:bg-white">
        {productCategories.map((category) => {
          const { id, name, quantityInStock, image } = category;
          return (
            <Link
              to="/"
              className="flex-center-between sm:flex-align-center  gap-4 bg-white shadow p-4 rounded-md m-2 sm:rounded-none sm:m-0 sm:shadow-none"
              key={id}
            >
              <div>
                <h1 className="text-sm">{name}</h1>
                <p className="text-sm">{quantityInStock} items</p>
              </div>
              <img src={image} alt={name} className="w-16" />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCategory;
