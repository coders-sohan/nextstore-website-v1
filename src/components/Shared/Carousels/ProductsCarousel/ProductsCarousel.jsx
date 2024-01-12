import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
// import { Navigation } from "swiper/modules";
// import css
import "../Carousel.css";
import ProductCard from "../../ProductCard/ProductCard";

const ProductsCarousel = ({ swiperRef, data }) => {
  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

ProductsCarousel.propTypes = {
  swiperRef: PropTypes.object,
  data: PropTypes.array,
};

export default ProductsCarousel;
