import React from "react";
import NotFoundImg from "../404.png";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex-center-center text-center flex-col">
      <img src={NotFoundImg} alt="" className="w-[400px]" />
      <h1 className="-mt-8 text-6xl font-bold opacity-50">Page Not Found!!</h1>
    </div>
  );
};

export default PageNotFound;
