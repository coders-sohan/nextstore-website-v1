import { Link } from "react-router-dom";
// lodash is a utility library that provides helpful methods like 'chunk'
import { chunk } from "lodash";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Autoplay } from "swiper/modules";
// import css
import "../Carousel.css";
import { homeCategoriesData } from "../../../../assets/data/homeSecData";
import smoothScrollToTop from "../../SmoothScroll/SmoothScroll";
import DynamicImage from "../../LazyLoadImage/DynamicImage";

const CategoriesSecCarousel = () => {
  const chunkedData = chunk(homeCategoriesData, 2);

  return (
    <>
      <Swiper
        spaceBetween={10}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            autoplay: false,
          },
          768: {
            slidesPerView: 4,
            autoplay: false,
          },
          1024: {
            slidesPerView: 5,
            autoplay: false,
          },
        }}
        grabCursor={true}
        className="mySwiper"
      >
        {chunkedData.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col">
              {chunk.map((item, index) => (
                <Link
                  onClick={smoothScrollToTop}
                  key={item.id}
                  to={"/"}
                  className="group"
                >
                  <div
                    className={`flex items-center justify-between border-l border-r p-5 ${
                      index === 0 ? "border-t border-b" : ""
                    } ${
                      index === chunk.length - 1 && index !== 0
                        ? "border-b"
                        : ""
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-dark-special text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-secondary group-hover:to-tertiary transition-all ease-linear duration-100">
                        {item.name}
                      </h4>
                      <p className="text-gray-dark text-sm">
                        {item.quantity} items
                      </p>
                    </div>
                    <div>
                      <DynamicImage
                        src={item.imgUrl}
                        alt={item.name}
                        dimension={{ height: 110, width: 110 }}
                        className="h-20 w-auto"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategoriesSecCarousel;
