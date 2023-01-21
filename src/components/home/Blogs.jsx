import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../data/products";

const Blogs = () => {
  return (
    <section className="pt-16">
      <h1 className="text-2xl heading">Our latest News</h1>
      <div className="flex-center-center flex-wrap gap-6 mt-6">
        {blogs.map((blog) => {
          const { id, title, date_published, excerpt, featured_img } = blog;
          return (
            <div
              className="flex-1 basis-[16rem] bg-white rounded-lg border-light shadow-light overflow-hidden"
              key={id}
            >
              <div className="image overflow-hidden group sm:cursor-pointer">
                <Link to={`/blog/${id}`}>
                  <img
                    src={featured_img}
                    alt={title}
                    className="w-full h-60 object-cover group-hover:scale-125 transition-a"
                  />
                </Link>
              </div>

              <div className="p-4">
                <p className="text-xs capitalize my-2">{date_published}</p>
                <Link to={`/blog/${id}`}>
                  <h1>{title}</h1>
                </Link>
                <p className="opacity-70 text-sm">{excerpt}...</p>
                <button className="btn mt-3">read more</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
