/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaClock, FaMap, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Routes } from "../components";

const Contact = () => {
  return (
    <section className="pt-40 min-h-screen">
      <Routes />
      <div className="w-full  flex-center-center">
        <h1>Map to go here</h1>
      </div>
      <div className="flex-center-center flex-wrap  gap-4 mt-10">
        <div className="flex-1 basis-[16rem]">
          <h4 className="opacity-60 uppercase">get in touch</h4>
          <h1 className="text-3xl my-4">
            visit one of our head offices or contact us today
          </h1>
          <h4>Head Office</h4>
          <p className="pt-2">
            {" "}
            <a href="#" className="flex-align-center gap-2">
              <FaMap /> Kampala, Luwumu Street, Plot 56 Floor 6
            </a>
          </p>
          <p className="pt-3">
            <a
              href="mailto:wabwenib66@gmail.com"
              className="lowercase flex-align-center gap-2"
            >
              <FiMail />
              wabwenib66@gmail.com
            </a>
          </p>
          <p className="pt-3">
            {" "}
            <a href="tel:+256775358738" className="flex-align-center gap-2">
              <FaPhone />
              +256-775-358738
            </a>
          </p>
          <p className="pt-3 flex-align-center gap-2">
            <FaClock /> Monday to Saturday: 9:00am to 16pm
          </p>
        </div>

        <div className="flex-1 basis-[16rem]">
          {/* Form */}
          <form className="my-4  border-light shadow-light p-6 rounded-lg">
            <div className="form-input relative">
              <input type="text" name="name" className="input" required />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-input relative">
              <input type="text" name="email" className="input" required />
              <label htmlFor="password">Email</label>
            </div>

            <div className="form-input relative">
              <input type="number" name="phone" className="input" required />
              <label htmlFor="password">Phone Number</label>
            </div>

            <div className="form-input relative">
              <textarea className="input !h-40 py-4" required></textarea>
              <label htmlFor="comment">Comment</label>
            </div>

            <center>
              <button className="btn my-2">Submit</button>
            </center>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
