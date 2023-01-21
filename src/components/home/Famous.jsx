import { Link } from "react-router-dom";
import { famousProducts } from "../../data/products";

const Famous = () => {
  return (
    <section className="pt-16">
      <h1 className="text-2xl heading">best sellers</h1>
      <div className="grid grid-cols-1fr gap-4 mt-4">
        {famousProducts.map((product) => {
          const { id, category, name, description, img } = product;
          return (
            <Link
              to="/"
              className="rounded-lg bg-primary p-4 border-light shadow text-slate-200 group"
              key={id}
            >
              <h4 className="text-xs opacity-70 !text-slate-200">{category}</h4>
              <h1 className="my-1 text-lg">{name}</h1>
              <h3 className="text-sm capitalize !text-slate-400">
                {description}
              </h3>
              <img
                src={img}
                alt={name}
                className="w-48 mx-auto mt-4 transition-a group-hover:scale-125"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Famous;
