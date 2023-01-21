/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../components";

const Login = () => {
  return (
    <section className="pt-40 min-h-screen">
      <Routes />

      <div className="max-w-[400px] w-full p-4 mx-auto mt-6 shadow-light rounded-lg ">
        <h1 className="text-6xl font-vivaldi  text-center my-4 opacity-70 text-shadow">
          Shopmart
        </h1>
        <form className="my-4">
          <div className="form-input relative">
            <input type="text" name="name" className="input" required />
            <label htmlFor="name">Username</label>
          </div>

          <div className="form-input relative">
            <input type="password" name="password" className="input" required />
            <label htmlFor="password">Pasword</label>
          </div>

          <div className="mt-1">
            <div className="input-check flex w-full sm:w-fit">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remeber me</label>
            </div>
          </div>
          <center>
            <button className="btn my-2">
              <Link to="/" className="!text-white">
                Login
              </Link>
            </button>
          </center>
          <div className="flex-center-between">
            <p className="text-sm text-center">
              {" "}
              No account yet?{" "}
              <Link to="/register" className="text-accent">
                Register
              </Link>
            </p>
            <p>|</p>
            <p className="text-center">
              <a href="#" className="text-sm text-accent">
                Forgotten Password?
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
