import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { bannerShowcase, bannerSlider } from "../../data/products";

const Banner = () => {
  return (
    <section className="grid grid-cols-1 gap-4 md:gap-y-0 md:grid-cols-2">
      <div className="w-full">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="h-full"
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {bannerSlider.map((banner) => {
            const { id, headline, heading, text, img } = banner;
            return (
              <SwiperSlide
                className="rounded-lg overflow-hidden relative"
                key={id}
              >
                <Link>
                  <img
                    loading="lazy"
                    src={img}
                    alt={heading}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 w-3/5">
                    <h4 className="text-red-500">{headline}</h4>
                    <h1 className="text-3xl lg:text-5xl lg:my-3 md:text-4xl">
                      {heading}
                    </h1>
                    <p className="capitalize">{text}</p>
                    <button className="btn my-2">buy now</button>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bannerShowcase.map((banner) => {
          const { id, headline, heading, text, img } = banner;
          return (
            <div className="rounded-lg overflow-hidden relative" key={id}>
              <Link to="/">
                {" "}
                <img
                  src={img}
                  alt={heading}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 -translate-y-1/2 left-4">
                  <h4 className="text-red-500 text-sm">{headline}</h4>
                  <h1 className="text-xl lg:text-2xl lg:my-1">{heading}</h1>
                  <p className="capitalize text-sm">{text}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Banner;
