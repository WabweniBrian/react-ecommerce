import React from "react";
import { services } from "../../data/products";

const Services = () => {
  return (
    <section className="pt-20 flex-center-center gap-8 flex-wrap bg-slate-50 pl-6 sm:ml-0">
      {services.map((service) => {
        const { id, title, description, img } = service;
        return (
          <div className="flex gap-6 w-full sm:w-fit text-sm" key={id}>
            <img src={img} alt={title} className="w-6 h-6" />
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
