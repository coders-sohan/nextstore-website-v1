import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import css
import "../Carousel.css";
import ProductCard from "../../ProductCard/ProductCard";

const ProductsCarousel = ({ swiperRef, slidesPerView, data }) => {
  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: slidesPerView["sm"],
          },
          768: {
            slidesPerView: slidesPerView["md"],
          },
          1024: {
            slidesPerView: slidesPerView["lg"],
          },
        }}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide key={item._id}>
            <ProductCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

ProductsCarousel.propTypes = {
  swiperRef: PropTypes.object,
  slidesPerView: PropTypes.object,
  data: PropTypes.array,
};

export default ProductsCarousel;
