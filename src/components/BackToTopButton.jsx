import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });
  return (
    <button
      className={`fixed bottom-0 right-0 z-50 grid mb-4 mr-4  rounded-full shadow back-to-top-btn w-9 h-9 place-items-center cursor-none sm:cursor-pointer !bg-accent !text-white ${
        showButton && "active"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <FiChevronUp />
    </button>
  );
};

export default BackToTopButton;
