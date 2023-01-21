import React from "react";
import { FaStar, FaTimes } from "react-icons/fa";

const ProductFilters = ({ setShowFilter }) => {
  const colors = [
    "bg-slate-800",
    "bg-teal-800",
    "bg-green-800",
    "bg-blue-500",
    "bg-red-700",
    "bg-indigo-500",
    "bg-yellow-600",
    "bg-purple-600",
    "bg-teal-400",
    "bg-orange-400",
    "bg-slate-300",
    "bg-[cyan]",
    "bg-[orangered]",
    "bg-[maroon]",
    "bg-green-200",
  ];

  return (
    <>
      <div className="flex-center-between">
        <h1 className="my-2">Filter By:</h1>
        <div
          className="p-2 ml-4 md:hidden"
          onClick={() => setShowFilter(false)}
        >
          <FaTimes />
        </div>
      </div>
      <h1 className="mt-4  mb-1">Price</h1>
      <div className="flex-align-center gap-x-2">
        <p>$</p>
        <input
          type="text"
          className="border-0 outline-none px-3 py-1 rounded-md bg-slate-100 w-20"
          placeholder="From"
        />
        <p>$</p>
        <input
          type="text"
          className="border-0 outline-none px-3 py-1 rounded-md bg-slate-100 w-20"
          placeholder="To"
        />
      </div>
      <h1 className="mt-8 mb-1">Availability</h1>
      <div className="input-check flex w-full sm:w-fit">
        <input type="checkbox" id="inStock" checked />
        <label htmlFor="inStock">In Stock(15)</label>
      </div>
      <div className="input-check flex w-full sm:w-fit mt-2">
        <input type="checkbox" id="outOfStock" />
        <label htmlFor="outOfStock">Out of Stock(6)</label>
      </div>

      <h1 className="mt-8 mb-1">Release</h1>
      <div className="input-radio flex w-full sm:w-fit">
        <input type="radio" name="release" id="newest" checked />
        <label htmlFor="newest">Newest</label>
      </div>
      <div className="input-radio flex w-full sm:w-fit mt-2">
        <input type="radio" name="release" id="recent" />
        <label htmlFor="recent">Recent</label>
      </div>

      <h1 className="mt-8 mb-1">Rating</h1>

      <div className="input-check flex w-full sm:w-fit mt-2">
        <input type="checkbox" id="4" />
        <label htmlFor="4">
          {Array.apply(null, { length: 5 }).map((element, i) => (
            <FaStar key={i + 1} className={`${4 > i && "text-accent"}`} />
          ))}
          <span className="ml-2">& Up</span>
        </label>
      </div>

      <div className="input-check flex w-full sm:w-fit mt-2">
        <input type="checkbox" id="3" checked />
        <label htmlFor="3">
          {Array.apply(null, { length: 5 }).map((element, i) => (
            <FaStar key={i + 1} className={`${3 > i && "text-accent"}`} />
          ))}
          <span className="ml-2">& Up</span>
        </label>
      </div>

      <div className="input-check flex w-full sm:w-fit mt-2">
        <input type="checkbox" id="2" />
        <label htmlFor="2">
          {Array.apply(null, { length: 5 }).map((element, i) => (
            <FaStar key={i + 1} className={`${2 > i && "text-accent"}`} />
          ))}
          <span className="ml-2">& Up</span>
        </label>
      </div>

      <div className="input-check flex w-full sm:w-fit mt-2">
        <input type="checkbox" id="1" />
        <label htmlFor="1">
          {Array.apply(null, { length: 5 }).map((element, i) => (
            <FaStar key={i + 1} className={`${1 > i && "text-accent"}`} />
          ))}
          <span className="ml-2">& Up</span>
        </label>
      </div>

      <h1 className="mt-8 mb-1">Color</h1>
      <div className="flex-align-center flex-wrap gap-2">
        {colors.map((color, i) => (
          <div className={`color-box ${color}`} key={i}></div>
        ))}
      </div>
      <h1 className="mt-4 mb-1">Size</h1>
      <div className="input-check flex w-full sm:w-fit">
        <input type="checkbox" id="s" checked />
        <label htmlFor="s">S(13)</label>
      </div>
      <div className="input-check flex w-full sm:w-fit mt-3">
        <input type="checkbox" id="m" />
        <label htmlFor="m">M(12)</label>
      </div>
      <div className="input-check flex w-full sm:w-fit mt-3">
        <input type="checkbox" id="l" checked />
        <label htmlFor="l">L(3)</label>
      </div>
      <div className="input-check flex w-full sm:w-fit mt-3">
        <input type="checkbox" id="xl" />
        <label htmlFor="xl">XL(5)</label>
      </div>
      <button
        className="my-3 w-full rounded-md py-1 bg-accent text-white hover:bg-yellow-500 transition-a"
        onClick={() => setShowFilter(false)}
      >
        Apply
      </button>
    </>
  );
};

export default ProductFilters;
