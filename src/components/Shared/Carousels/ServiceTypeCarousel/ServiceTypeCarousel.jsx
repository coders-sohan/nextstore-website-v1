// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";
// import css
import "../Carousel.css";
// import others import
import { homeServiceTypeData } from "../../../../assets/data/homeSecData";

const ServiceTypeCarousel = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            autoplay: false,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
            autoplay: false,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
            autoplay: false,
          },
        }}
        className="mySwiper"
      >
        <div className="flex items-center justify-between">
          {homeServiceTypeData.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="flex items-center gap-5">
                <div>
                  <img src={item.imgUrl} alt={item.title} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-dark-special">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-dark">{item.subTitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default ServiceTypeCarousel;
