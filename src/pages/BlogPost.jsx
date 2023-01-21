import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/products";

const BlogPost = () => {
  const { blogId } = useParams();

  const blogPost = blogs.find((blog) => blog.id === parseInt(blogId));

  const { title, content, featured_img, category } = blogPost;

  const recentBlogs = blogs.filter((blog) => blog.id !== parseInt(blogId));

  return (
    <section className="pt-40 flex flex-col md:flex-row gap-6">
      <article className="flex-5">
        <img
          src={featured_img}
          alt={title}
          className="w-full md:h-[400px] object-cover"
        />
        <button className="rounded-md px-4 py-1 mt-4 bg-primary text-white capitalize">
          {category}
        </button>
        <h1 className="my-4 text-2xl md:text-4xl">{title}</h1>
        <div className="flex-align-center gap-5 flex-col md:flex-row">
          <Link className="flex-align-center gap-3">
            <FiHeart />
            <p>Make favorite</p>
          </Link>
          <div className="flex-align-center gap-1">
            <button className="btn text-sm !capitalize flex-align-center gap-x-2 shrink-0 !bg-[#1352d1]">
              <FaFacebook /> Share
            </button>
            <button className="btn text-sm !capitalize flex-align-center gap-x-2 shrink-0 !bg-[#1ca9ce]">
              <FaTwitter /> Tweet
            </button>
            <button className="btn text-sm !capitalize flex-align-center gap-x-2 shrink-0 !bg-[#ff174f]">
              <FaInstagram /> Share
            </button>
          </div>
        </div>
        {content.map((p) => (
          <p className="my-4">{p}</p>
        ))}
      </article>

      <aside className="flex-2 border-light px-4 py-2 h-fit sticky top-0">
        <h1 className="text-xl my-2 ml-2">Search</h1>
        <div className="shadow-light border-light rounded grid place-center px-2 py-2 search">
          <input
            type="search"
            name=""
            id=""
            className="form-control"
            placeholder="Search for posts.."
          />
        </div>
        <h1 className="text-xl my-2 ml-2">Our Social medial handles</h1>
        <div className="flex-center-center gap-1">
          <button className="btn text-sm !capitalize shrink-0 !bg-[#1352d1]">
            Facebook
          </button>
          <button className="btn text-sm !capitalize shrink-0 !bg-[#1ca9ce]">
            Twitter
          </button>
          <button className="btn text-sm !capitalize  shrink-0 !bg-[#ff174f]">
            Instagram
          </button>
        </div>
        <h1 className="text-xl mt-8 mb-3 ml-2">Recent Posts</h1>
        {recentBlogs.map((blog) => {
          const { id, title, date_published, featured_img } = blog;
          return (
            <Link to={`/blog/${id}`} key={id} className="flex gap-x-3 my-4">
              <img src={featured_img} alt={title} className="w-20" />
              <div>
                <h1 className="text-base">{title}</h1>
                <h5 className="text-sm capitalize opacity-70 !text-secondary">
                  {date_published}
                </h5>
              </div>
            </Link>
          );
        })}
      </aside>
    </section>
  );
};

export default BlogPost;
