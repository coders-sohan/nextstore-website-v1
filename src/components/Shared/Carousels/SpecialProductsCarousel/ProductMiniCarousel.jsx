import {
  // useCallback,
  // useEffect,
  useState,
} from "react";
import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
// import { Autoplay } from "swiper/modules";
// import icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DynamicImage from "../../LazyLoadImage/DynamicImage";

const ProductMiniCarousel = ({ setSelectedImage, imagesData }) => {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // current indexing state for auto image change every 3 seconds
  // const [currentIndex, setCurrentIndex] = useState(0);

  // // Function to go to the next image
  // const nextImage = useCallback(() => {
  //   const newIndex = (currentIndex + 1) % imagesData.length;
  //   setCurrentIndex(newIndex);
  //   setSelectedImage(imagesData[newIndex]);
  // }, [currentIndex, imagesData, setSelectedImage]);

  // // autoplay the carousel every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(nextImage, 3000);
  //   return () => clearInterval(interval);
  // }, [nextImage]);

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
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        // modules={[Autoplay]}
        onSwiper={setSwiper}
        className="mySwiper"
      >
        {imagesData.map((image, index) => (
          <SwiperSlide
            key={index}
            onClick={() => setSelectedImage(image)}
            className="border"
          >
            <DynamicImage
              src={image.url}
              alt={image.name}
              dimension={{ height: 884, width: 884 }}
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
          title="Previous Image"
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
          title="Next Image"
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
