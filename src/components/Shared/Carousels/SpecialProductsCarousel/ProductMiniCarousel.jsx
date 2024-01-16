import { useState } from "react";
import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductMiniCarousel = ({ setSelectedImage, imagesData }) => {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  return (
    <div className="relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        onSwiper={setSwiper}
        className="mySwiper"
      >
        {imagesData.map((image, index) => (
          <SwiperSlide
            key={index}
            onClick={() => setSelectedImage(image)}
            className="border"
          >
            <img
              src={image.url}
              alt={image.name}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-y-0 left-0 flex items-center z-50 -ml-3">
        <button
          disabled={isBeginning}
          onClick={goPrev}
          className={`p-0.5 text-dark-muted border ${
            isBeginning ? "bg-gray-medium" : "bg-white"
          }`}
        >
          <IoIosArrowBack className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-50 -mr-3">
        <button
          disabled={isEnd}
          onClick={goNext}
          className={`p-0.5 text-dark-muted border ${
            isEnd ? "bg-gray-medium" : "bg-white"
          }`}
        >
          <IoIosArrowForward className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

ProductMiniCarousel.propTypes = {
  setSelectedImage: PropTypes.func,
  imagesData: PropTypes.array,
};

export default ProductMiniCarousel;
