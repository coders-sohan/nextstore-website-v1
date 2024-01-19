import PropTypes from "prop-types";
// lodash is a utility library that provides helpful methods like 'chunk'
import { chunk } from "lodash";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import css
import "../Carousel.css";
import SpecialProductCard from "../../ProductCard/SpecialProductCard";

const SpecialProductsCarousel = ({ swiperRef, data }) => {
  const chunkedData = chunk(data, 2);

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {chunkedData?.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-5">
              {chunk?.map((item) => (
                <SpecialProductCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

SpecialProductsCarousel.propTypes = {
  swiperRef: PropTypes.object,
  data: PropTypes.array,
};

export default SpecialProductsCarousel;
