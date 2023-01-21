import React from "react";
import {
  Accessories,
  Banner,
  Blogs,
  Brands,
  Discounted,
  Famous,
  Fashion,
  Newsletter,
  ProductCategory,
  Services,
} from "../components";

const Home = () => {
  return (
    <div className="pt-40">
      <Banner />
      <Services />
      <ProductCategory />
      <Fashion />
      <Accessories />
      <Famous />
      <Discounted />
      <Brands />
      <Blogs />
      <Newsletter />
    </div>
  );
};

export default Home;
