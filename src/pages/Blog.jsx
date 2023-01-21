/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../components";
import { blogs } from "../data/products";

const Blog = () => {
  return (
    <section className="pt-40 min-h-screen">
      <Routes />
      <h1 className="my-8 text-2xl md:text-4xl opacity-70">Trending Stories</h1>
      {blogs.map((blog) => {
        const { id, title, date_published, content, featured_img } = blog;
        return (
          <div
            className="blog flex-center-center flex-wrap relative gap-10 mt-32"
            key={id}
          >
            <div className="flex-1 basis-[20rem]">
              <Link to={`/blog/${id}`}>
                {" "}
                <img
                  src={featured_img}
                  alt=""
                  className="w-full h-[22rem] object-cover rounded-lg"
                />
              </Link>
            </div>
            <div className="flex-1 basis-[20rem]">
              <h5 className="opacity-70 my-2 text-sm uppercase">
                {date_published}
              </h5>
              <Link to={`/blog/${id}`}>
                <h1 className="text-xl">{title}</h1>
              </Link>
              <p className="my-2 text-sm md:text-base">{content[0]}</p>

              <Link
                to={`/blog/${id}`}
                className="uppercase text-slate-400 relative text-sm font-bold before:absolute before:h-1 before:w-1/2 before:bg-slate-400 before:left-full before:top-1/2 before:-translate-y-1/2 before:ml-4 hover:before:bg-accent transition-a"
              >
                countinue reading
              </Link>
            </div>
            <div className="absolute -left-4 -top-20 -z-10">
              <h1 className="opacity-20 text-9xl font-roboto ">13/01</h1>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Blog;
