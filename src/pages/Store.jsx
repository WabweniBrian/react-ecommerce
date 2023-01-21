import { Pagination, ProductFilters, Routes } from "../components";
import { useSelector, useDispatch } from "react-redux";
// import ReactTooltip from "react-tooltip";
import {
  FiEye,
  FiFilter,
  FiGrid,
  FiHeart,
  FiRefreshCcw,
  FiShoppingCart,
} from "react-icons/fi";
import { FaCheckCircle, FaHeart, FaList, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToCart, cartStore, rateProduct } from "../features/cartSlice";
import { addToWhilist, whilistStore } from "../features/whilistSlice";
import { addToCompare, compareStore } from "../features/compareSlice";
import { useState } from "react";

const Store = () => {
  const { products } = useSelector(cartStore);
  const { whilistItems } = useSelector(whilistStore);
  const { compareItems } = useSelector(compareStore);

  const [showFilter, setShowFilter] = useState(false);

  const dispatch = useDispatch();

  const handleRating = (id, rating) => {
    dispatch(rateProduct({ id, rating }));
  };

  return (
    <section className="pt-40 min-h-screen">
      <Routes />
      <div className="my-8 flex gap-x-4">
        <div
          className={`flex1 h-screen overflow-auto md:h-fit md:sticky hidden md:block top-0 left-0 md:top-0 z-50 md:z-0 fixed  bg-white shadow-light rounded-lg border-light p-3 ${
            showFilter && "!block"
          }`}
        >
          <ProductFilters setShowFilter={setShowFilter} />
        </div>
        <div className="flex-5 w-full md:w-fit">
          <div className="flex-center-between gap-4 border-light shadow-light rounded-lg p-2">
            <div className="flex-align-center gap-3">
              <select
                name=""
                id=""
                className="sm:cursor-pointer outline-none bg-transparent border rounded !p-2"
              >
                <option value="">Sort by</option>
                <option value="Best selling">Best selling</option>
                <option value="Highly Rated">Highly Rated</option>
                <option value="Newest">Newest</option>
                <option value="Lowest price">Lowest price</option>
                <option value="Highest price">Highest price</option>
              </select>
              <div
                className="w-10 h-10 rounded-xl grid place-items-center md:hidden bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a"
                onClick={() => setShowFilter(true)}
              >
                <FiFilter />
              </div>
            </div>
            <div className="flex-align-center gap-2">
              <div className="w-10 h-10 rounded-xl grid place-items-center bg-primary text-white sm:cursor-pointer hover:bg-secondary transition-a">
                <FiGrid />
              </div>
              <div className="w-10 h-10 rounded-xl grid place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a">
                <FaList />
              </div>
            </div>
          </div>
          <h1 className="mt-4">(13) Products</h1>
          <div className="grid grid-cols-200 gap-4 mt-4">
            {products.map((product) => {
              const { id, name, price, category, mainImage, rating, inStock } =
                product;
              let ids = [...new Set(whilistItems.map((fav) => fav.id))];
              let heartIcon = ids.includes(id) ? true : false;
              let compareIds = [
                ...new Set(compareItems.map((item) => item.id)),
              ];
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
                      className="w-full md:w-36 mb-4 mx-auto transition-a group-hover:scale-125"
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
                    <span className="line-through opacity-60 text-sm">
                      $282.21
                    </span>
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
          <div className="flex-center-center flex-col gap-3 sm:flex-center-between md:flex-row p-3 mt-4 bg-white shadow-light border-light rounded-lg">
            <p>Showing 21 out of 58 products</p>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
