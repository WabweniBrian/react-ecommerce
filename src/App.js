import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  AutoScrollToTop,
  CartItems,
  Footer,
  Loader,
  Navbar,
} from "./components";
import BackToTopButton from "./components/BackToTopButton";
import { cartStore, closeCartModal, getTotals } from "./features/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import {
  Blog,
  BlogPost,
  Checkout,
  CompareProducts,
  Contact,
  Home,
  Login,
  Register,
  SingleProduct,
  Store,
  Whilist,
} from "./pages";
import PageNotFound from "./pages/PageNotFound.jsx";
import { whilistStore } from "./features/whilistSlice";
import {
  closeCategoriesMenu,
  closeMainMenu,
  getRoutes,
} from "./features/uiSlice";
import { useState } from "react";
import { compareStore } from "./features/compareSlice";

const App = () => {
  const { cartItems } = useSelector(cartStore);
  const { whilistItems } = useSelector(whilistStore);
  const { compareItems } = useSelector(compareStore);
  const [showLoader, setShowLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    localStorage.setItem("shop-mart-cart", JSON.stringify(cartItems));
    localStorage.setItem("shop-mart-whilist", JSON.stringify(whilistItems));
    localStorage.setItem("shop-mart-compare", JSON.stringify(compareItems));
  }, [cartItems, whilistItems, compareItems]);

  const routePath = useLocation();

  const routes = routePath.pathname.split("/");

  useEffect(() => {
    dispatch(getRoutes(routes));
    dispatch(closeCartModal());
    dispatch(closeMainMenu());
    dispatch(closeCategoriesMenu());
  }, [routePath]);

  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <>
      <BackToTopButton />
      {showLoader && <Loader />}
      <Navbar />
      <CartItems />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/whilist" element={<Whilist />} />
        <Route path="/compare-products" element={<CompareProducts />} />
        <Route path="/store/:productId" element={<SingleProduct />} />
        <Route path="/blog/:blogId" element={<BlogPost />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <AutoScrollToTop />
    </>
  );
};

export default App;
