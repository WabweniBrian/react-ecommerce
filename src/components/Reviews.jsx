import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { reviews } from "../data/reviews";
import ReviewProgress from "./ReviewProgress";

const Reviews = () => {
  return (
    <section className="pt-14">
      <h1 className="text-lg py-3 border-t">customer reviews</h1>
      <div className="flex flex-col sm:flex-row sm:flex-center-between gap-4">
        <div className="flex1">
          <div className="flex-align-center gap-3">
            <h1 className="text-8xl font-extrabold">4.7</h1>
            <div>
              <h1 className="text-sm">4.7 out of 5</h1>
              <div className="flex-align-center gap-2 my-2 text-sm">
                {Array.apply(null, { length: 5 }).map((element, i) => {
                  return i < 4 ? (
                    <FaStar
                      key={i + 1}
                      className={`${4 > i && "text-accent"}`}
                    />
                  ) : (
                    <FaStarHalfAlt className="text-accent" />
                  );
                })}
              </div>
              <h2 className="opacity-70 text-sm">
                Based on <span className="font-bold opacity-100">23,837</span>{" "}
                global ratings
              </h2>
            </div>
          </div>
          <button className="px-4 py-1 rounded-md bg-accent text-white hover:bg-[#ee9510] transition-a">
            Write a customer review
          </button>
        </div>
        <div className="flex1">
          <ReviewProgress percentage="83" stars={5} />
          <ReviewProgress percentage="27" stars={4} />
          <ReviewProgress percentage="12" stars={3} />
          <ReviewProgress percentage="4" stars={2} />
          <ReviewProgress percentage="1" stars={1} />
        </div>
      </div>
      <div className="flex-center-center gap-4 flex-wrap mt-10">
        {reviews.map((review) => {
          const {
            id,
            userImage,
            username,
            rating,
            location,
            review_date,
            title,
            reviewText,
          } = review;
          return (
            <div
              className="flex-1 basis-[16rem] bg-white shadow-light border-light rounded-lg p-4"
              key={id}
            >
              <div className="flex-align-center gap-3">
                <img
                  src={userImage}
                  alt={username}
                  className="w-8 h-8 rounded-full"
                />

                <h1 className="text-sm">{username}</h1>
              </div>
              <div className="flex-align-center gap-3 capitalize mt-3">
                <h5 className="text-sm opacity-70">{location}</h5>
                <h5 className="text-lg opacity-70">.</h5>
                <h5 className="text-sm opacity-70">on {review_date}</h5>
              </div>
              <div className="flex gap-2 my-2 text-slate-500 sm:cursor-pointer text-sm">
                {Array.apply(null, { length: 5 }).map((element, i) => (
                  <FaStar
                    key={i + 1}
                    className={`${rating > i && "text-accent"}`}
                  />
                ))}
              </div>
              <h1 className="text-sm">{title}</h1>
              <p className="text-sm">{reviewText}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
