/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../components";

const Register = () => {
  return (
    <section className="pt-40 min-h-screen">
      <Routes />
      <div className="max-w-[400px] w-full p-4 mx-auto mt-6 shadow-light rounded-lg ">
        <h1 className="text-6xl font-vivaldi  text-center my-4 opacity-70 text-shadow">
          Shopmart
        </h1>
        <form className="my-4">
          <div className="form-input relative">
            <input type="text" name="fname" className="input" required />
            <label htmlFor="fname">First Name</label>
          </div>

          <div className="form-input relative">
            <input type="text" name="lname" className="input" required />
            <label htmlFor="lname">Last Nanme</label>
          </div>

          <div className="form-input relative">
            <input type="text" name="email" className="input" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-input relative">
            <input type="password" name="password" className="input" required />
            <label htmlFor="password">Pasword</label>
          </div>

          <center>
            <button className="btn my-2">
              <Link to="/" className="!text-white">
                Register
              </Link>
            </button>
          </center>
          <div className="flex-center-between">
            <p className="text-sm text-center">
              {" "}
              Aleady have an account?{" "}
              <Link to="/account" className="text-accent">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
