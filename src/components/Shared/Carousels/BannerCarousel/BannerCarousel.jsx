import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
// import css
import "../Carousel.css";
import { bannerSliderData } from "../../../../assets/data/homeSecData";
import smoothScrollToTop from "../../SmoothScroll/SmoothScroll";

const BannerCarousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return `<span class="${className} w-3 h-3 mx-1 rounded-full"></span>`;
    },
  };

  return (
    <div className="h-full w-full overflow-auto rounded-xl">
      <Swiper
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {bannerSliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-full w-full overflow-hidden group">
              <div
                style={{ backgroundImage: `url('${item.imgUrl}')` }}
                className="bg-cover bg-center h-full w-full transform transition-transform duration-500 group-hover:scale-110"
              ></div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-0 flex flex-col gap-2 sm:gap-5 px-4 sm:px-10">
                <p className="text-error font-medium text-xs sm:text-sm uppercase">
                  {item.subTitle}
                </p>
                <h3 className="font-bold text-dark text-3xl sm:text-5xl">
                  {item.title}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.desc,
                  }}
                  className="text-dark-muted text-sm sm:text-base font-medium"
                ></p>
                <div className="mt-3 sm:mt-5">
                  <Link
                    onClick={smoothScrollToTop}
                    to={item.btnUrl}
                    className="uppercase bg-dark-muted text-white px-4 sm:px-8 py-2 sm:py-3 text-xs font-medium rounded-full hover:bg-primary transition-all ease-linear duration-150"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
