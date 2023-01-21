import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartStore } from "../../features/cartSlice";

const Fashion = () => {
  const { products } = useSelector(cartStore);
  const fashionProducts = products.filter(
    (product) => product.category === "clothes" || product.category === "shoes"
  );

  return (
    <section className="pt-20">
      <h1 className="text-2xl heading">new in fashion</h1>
      <div className="flex-center-center flex-wrap gap-8 my-4">
        {fashionProducts.map((product) => {
          const { id, name, price, category, mainImage } = product;
          return (
            <Link
              to={`/store/${id}`}
              className="flex-1 basis-[20rem] flex-align-center gap-3 p-4 border-light rounded-lg group"
              key={id}
            >
              <img
                src={mainImage}
                alt={name}
                className="w-20 transition-a group-hover:scale-125"
              />
              <div>
                <h1>{name.slice(0, 20)}...</h1>
                <p className="text-sm capitalize !text-accent">{category}</p>
                <h1 className="text-2xl !text-text-color">
                  ${price}{" "}
                  <span className="line-through opacity-60 text-sm">
                    $282.21
                  </span>
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Fashion;
