import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { brands } from "../../data/products";

const Brands = () => {
  const [isScroll, setisScroll] = useState(false);
  const scrollRef = useRef();

  const scrollBrands = (direction) => {
    setisScroll(true);
    direction === "right"
      ? (scrollRef.current.scrollLeft += 200)
      : (scrollRef.current.scrollLeft -= 200);
    scrollRef.current.scrollLeft > 0 ? setisScroll(true) : setisScroll(false);
  };

  return (
    <section className="pt-6">
      <div className="flex-align-center space-x-2 w-full pt-8 relative">
        <div
          className={`${isScroll ? "md:flex" : "hidden"} sm:cursor-pointer`}
          onClick={() => scrollBrands("left")}
        >
          <FaChevronLeft className="text-xl" />
        </div>
        <div
          className="flex items-center justify-evenly flex-1 overflow-auto hide-scrollbar scroll-smooth space-x-8 px-4"
          ref={scrollRef}
        >
          {brands.map((brand, i) => (
            <img src={brand} alt="" className="w-20 md:w-28" key={i} />
          ))}
        </div>
        <div
          className="sm:cursor-pointer  hidden sm:block"
          onClick={() => scrollBrands("right")}
        >
          <FaChevronRight className="text-xl" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
