import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter my-4 py-10 bg-newsLetterBg bg-cover bg-no-repeat bg-center">
      <div className="flex-center-center text-center md:text-left md:flex-center-between flex-wrap gap-2">
        <div className="info text-white">
          <h1 className="opacity-80 text-xl">sign up for newsletters</h1>
          <h5>
            Get E-mail updates on our latest shops and{" "}
            <span className="text-accent">special offers</span>{" "}
          </h5>
        </div>
        <form action="" className="flex-align-center">
          <input
            type="text"
            name=""
            id=""
            className="form-control rounded-none"
            placeholder="Enter your email address..."
          />
          <button className="btn !bg-accent w-40 !rounded-none !py-[0.35rem] border border-accent">
            sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
