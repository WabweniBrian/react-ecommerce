import React from "react";
import { useState } from "react";

const AboutProduct = ({ description, features }) => {
  const [index, setindex] = useState(0);

  const productInfo = [
    {
      id: 1,
      title: "description",
      content: description,
    },
    {
      id: 2,
      title: "features",
      content: features,
    },
    {
      id: 3,
      title: "reviews",
      content: [
        {
          id: 1,
          userImage: "",
          rating: 3.6,
          comment:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi magni vero debitis dolorum cum ipsum veniam officiis quae, deleniti nam!",
        },
        {
          id: 1,
          userImage: "",
          rating: 3.6,
          comment:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi magni vero debitis dolorum cum ipsum veniam officiis quae, deleniti nam!",
        },
        {
          id: 1,
          userImage: "",
          rating: 3.6,
          comment:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi magni vero debitis dolorum cum ipsum veniam officiis quae, deleniti nam!",
        },
      ],
    },
  ];

  return (
    <section className="pt-20">
      <div className="max-w-[800px] w-[90%] mx-auto grid md:grid-cols-5 gap-6">
        {/* Tab Buttons */}
        <div className="flex-center-center gap-6 md:flex-col md:items-start md:justify-start">
          {productInfo.map((product, productIndex) => {
            return (
              <div
                className={`tab-btn cursor-pointer hover:text-teal-500 ${
                  productIndex === index && "active"
                }`}
                key={product.id}
                onClick={() => setindex(productIndex)}
              >
                {product.title}
              </div>
            );
          })}
        </div>
        {/* Tab Panels */}
        <div className="my-4 md:col-span-4 md:my-0">
          <p className="mb-3 opacity-60">{}</p>
          <span className="bg-teal-500/20 text-teal-800 px-4 py-1 rounded text-sm">
            {}
          </span>
          <div className="duties">
            {productInfo.content.map((duty, index) => {
              return (
                <div key={index} className="flex my-4">
                  {/* <BsChevronDoubleRight className="text-xl text-teal-500" /> */}
                  <p className="text-sm ml-8 text-slate-500">{duty}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
