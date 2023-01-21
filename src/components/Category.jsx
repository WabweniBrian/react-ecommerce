/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Category = ({ name, subCategories, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const linksContainer = useRef(null);
  const linksWrapper = useRef(null);

  useEffect(() => {
    const linksHeight = linksWrapper.current.getBoundingClientRect().height;
    linksContainer.current.style.height = isOpen ? linksHeight + "px" : "0px";
  }, [isOpen]);

  return (
    <>
      <li className="category list-none py-2">
        <a
          href="#"
          className="flex-center-between capitalize text-secondary"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          <div className="flex-align-center gap-x-2">
            <img src={icon} alt={name} width={20} />
            <span>{name}</span>
          </div>
          {isOpen ? (
            <FiMinus className="text-secondary" />
          ) : (
            <FiPlus className="text-secondary" />
          )}
        </a>
        <div className="transition-a overflow-hidden" ref={linksContainer}>
          <div ref={linksWrapper}>
            {subCategories.map((subCategory, index) => (
              <a
                className="block text-secondary capitalize opacity-60 ml-8 py-1 sm:cursor-pointer"
                key={index}
              >
                {subCategory}
              </a>
            ))}
          </div>
        </div>
      </li>
    </>
  );
};

export default Category;
