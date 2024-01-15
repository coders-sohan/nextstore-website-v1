import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import css
import "../Carousel.css";
import SpecialProductCard from "../../ProductCard/SpecialProductCard";

const SpecialProductsCarousel = ({ swiperRef, data }) => {
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
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <SpecialProductCard item={item} />
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
