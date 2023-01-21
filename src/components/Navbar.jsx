/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import ReactTooltip from "react-tooltip";
import {
  FiHeart,
  FiRefreshCcw,
  FiShoppingCart,
  FiSearch,
  FiMenu,
  FiGrid,
  FiChevronDown,
} from "react-icons/fi";
import { categories, mainLinks } from "../data/products";
import { motion } from "framer-motion";
import Category from "./Category";
import {
  toggleCategoriesMenu,
  toggleMainMenu,
  uiStore,
} from "../features/uiSlice";
import { cartStore, openCartModal } from "../features/cartSlice";
import { whilistStore } from "../features/whilistSlice";

const Navbar = () => {
  const { isMainMenuOpen, isCategoriesMenuopen } = useSelector(uiStore);
  const { totalQuantity } = useSelector(cartStore);
  const { whilistItems } = useSelector(whilistStore);
  const dispatch = useDispatch();

  return (
    <header className="fixed w-full z-20 top-0 left-0 text-[#b0b7bb]">
      <div className="hidden md:flex-center-between py-1 text-sm bg-primary border-b border-slate-600 px-[4%] md:px-[6%]">
        <p className="capitalize !text-[#b0b7bb]">
          free shipping over $100 & free returns
        </p>
        <div className="flex-align-center gap-4">
          <p>hotline (+256) 775 358738</p>
          <div className="w-[1px] .h-5 bg-slate-600"></div>
          <div className="left-nav flex-align-center gap-2">
            <select
              name=""
              id=""
              className="sm:cursor-pointer bg-primary outline-none border-none"
            >
              <option value="USD $">USD $</option>
              <option value="UGX SH">UGX SH</option>
              <option value="EU &euro;">EU &euro;</option>
            </select>

            <select
              name=""
              id=""
              className="sm:cursor-pointer bg-primary outline-none border-none"
            >
              <option value="ENGLISH">ENGLISH</option>
              <option value="FRENCH">FRENCH</option>
              <option value="CHINESE">CHINESE</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex-center-between py-3 bg-primary gap-x-10 px-[4%] md:px-[6%] relative">
        <div className="flex-align-center sm:gap-x-2 w-fit">
          <Link to="/">
            <img src="/logo.png" alt="" className="md:w-24" />
          </Link>
          <Link to="/">
            <h1 className="text-2xl hidden sm:block font-vivaldi">shopmart.</h1>
          </Link>
        </div>
        <div className="h-8 w-full rounded-md bg-white overflow-hidden relative hidden md:block">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 h-full w-20 grid place-items-center bg-accent hover:bg-accent/80 sm:cursor-pointer text-primary">
            <FiSearch className="text-white" />
          </div>

          <input
            type="text"
            className="w-full h-full px-4 outline-none text-secondary"
            placeholder="search products here..."
          />
        </div>
        <div className="flex-align-center gap-x-2">
          <NavLink
            to="/compare-products"
            className="icon-box"
            activeClassName="active"
          >
            <FiRefreshCcw />
          </NavLink>
          <NavLink
            to="/whilist"
            className="relative icon-box"
            activeClassName="active"
          >
            <FiHeart />
            <span className="count">{whilistItems.length}</span>
          </NavLink>
          <div
            to="/cart"
            className="relative icon-box"
            onClick={() => dispatch(openCartModal())}
          >
            <FiShoppingCart />
            <span className="count">{totalQuantity}</span>
          </div>
          <Link to="/account" className="w-8 h-8 rounded-full">
            <img src="/avatar.png" alt="" />
          </Link>
          <div
            className="icon-box md:!hidden"
            onClick={() => dispatch(toggleMainMenu())}
          >
            <FiMenu />
          </div>
        </div>
      </div>
      <div className="px-[4%] md:px-[6%] bg-primary py-2 md:hidden">
        <div className="h-8 w-full rounded-md  overflow-hidden relative">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 h-full w-14 md:w-20 grid place-items-center bg-accent hover:bg-accent/80 sm:cursor-pointer text-primary">
            {" "}
            <FiSearch className="text-white" />
          </div>

          <input
            type="text"
            className="w-full h-full px-4 outline-none text-secondary rounded-md bg-white"
            placeholder="search products here..."
          />
        </div>
      </div>
      <div className="flex-center-center py-2 gap-x-10  px-[4%] md:px-[6%] bg-secondary">
        <div className="relative transition-a">
          <div
            className="flex-align-center gap-2 group "
            onClick={() => dispatch(toggleCategoriesMenu())}
          >
            <FiGrid className="group-hover:text-accent" />
            <a className="uppercase">shop categories</a>
            <FiChevronDown className="group-hover:text-accent" />
          </div>

          {/* categories */}
          {isCategoriesMenuopen && (
            <motion.ul
              className="bg-white shadow-lg p-3 rounded absolute top-full mt-1 w-60 overflow-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {categories.map((category) => (
                <Category key={category.id} {...category} />
              ))}
            </motion.ul>
          )}
        </div>

        {/* Desktop & Tablet */}
        <div className="hidden sm:flex-align-center space-x-8">
          {mainLinks.map((link) => (
            <NavLink key={link.id} to={link.url} end activeClassName="active">
              <li className="uppercase list-none">{link.linkText}</li>
            </NavLink>
          ))}
        </div>
        {/* Mobile */}
        {isMainMenuOpen && (
          <motion.div
            className={`md:hidden space-x-8 absolute top-14 right-4 bg-secondary p-4 drop-shadow-2xl w-32`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            {mainLinks.map((link) => (
              <Link key={link.id} to={link.url}>
                <li className="uppercase block list-none">{link.linkText}</li>
              </Link>
            ))}
            <div className="flex flex-col gap-y-4 mt-5">
              <select
                name=""
                id=""
                className="sm:cursor-pointer bg-secondary outline-none border-none -ml-9"
              >
                <option value="USD $">USD $</option>
                <option value="UGX SH">UGX SH</option>
                <option value="EU &euro;">EU &euro;</option>
              </select>

              <select
                name=""
                id=""
                className="sm:cursor-pointer bg-secondary outline-none border-none -ml-9 mt-2"
              >
                <option value="ENGLISH">ENGLISH</option>
                <option value="FRENCH">FRENCH</option>
                <option value="CHINESE">CHINESE</option>
              </select>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
