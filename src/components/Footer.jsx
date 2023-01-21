/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { socialLinks } from "../data/products";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary mt-10">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 basis-[12rem] text-sm">
            <h1 className="text-lg my-5">contact us</h1>
            <p>ShopMart Store</p>
            <p>No. 1259 Freedom City, Kampala, 1111</p>
            <p>Uganda</p>
            <p className="my-2">+256-775-358738</p>
            <p className="my-2">shopmart@gmail.com</p>
            <div className="flex-align-center gap-4 my-4">
              {socialLinks.map((link) => (
                <div
                  key={link.id}
                  className="w-10 h-10 rounded-full bg-secondary grid place-items-center transition-a hover:bg-[#172033] sm:cursor-pointer text-[#b0b7bb]"
                >
                  {link.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 basis-[12rem]">
            <h1 className="text-lg my-5">information</h1>
            <ul>
              <li className="my-2 text-muted">
                <a href="#"> privacy policy</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">refund policy</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">shipping policy</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">terms of service</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">blogs</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[12rem]">
            <h1 className="text-lg my-5">account</h1>
            <ul>
              <li className="my-2 text-muted">
                <a href="#"> search</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">about us</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">FAQ</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">contact</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">size chart</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[12rem]">
            <h1 className="text-lg my-5">quick links</h1>
            <ul>
              <li className="my-2 text-muted">
                <a href="#"> accessories</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">laptops</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">headphones</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">smart watches</a>
              </li>
              <li className="my-2 text-muted">
                <a href="#">tablets</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[12rem] text-sm">
            <h1 className="text-lg my-5">our app</h1>
            <p>Dowload our app and get extra 15% off on your first order!</p>
            <div className="flex-center-center md:flex-align-center -ml-12 md:-ml-0">
              <img
                src="/images/others/app-store.png"
                alt=""
                className="w-[220px]"
              />
              <img
                src="/images/others/play-store.png"
                alt=""
                className="-ml-12 w-[120px]"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="flex-center-between flex-wrap gap-3 md:flex-nowrap attribution px-[4%] md:px-[6%] text-center text-14 py-3 bg-secondary">
        <img src="/images/others/payment.png" alt="" />
        <p className="!text-[#b0b7bb]">
          Created By <span className="text-accent">Wabweni Brian</span> | All
          Rights Reserved &copy;{new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default Footer;
