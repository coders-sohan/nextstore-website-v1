import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";
// import css
import "../Carousel.css";
import smoothScrollToTop from "../../SmoothScroll/SmoothScroll";

const ShowcaseCarousel = ({ data }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
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
            slidesPerView: 2,
            autoplay: false,
          },
          1024: {
            slidesPerView: 4,
            autoplay: false,
          },
        }}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Link onClick={smoothScrollToTop} key={item.id} to={item.btnUrl}>
              <div className="relative h-[420px] w-full overflow-hidden rounded-xl group">
                <div
                  style={{ backgroundImage: `url('${item.imgUrl}')` }}
                  className="bg-cover bg-bottom h-full w-full transform transition-transform duration-500 group-hover:scale-105"
                ></div>
                <div className="absolute top-5 left-0 flex flex-col gap-2 px-5 ">
                  <p className="text-error font-medium text-sm uppercase">
                    {item.subTitle}
                  </p>
                  <h3
                    className={`${
                      item.className ? item.className : "text-dark"
                    } font-bold text-xl`}
                  >
                    {item.title}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.desc,
                    }}
                    className={`${
                      item.className ? item.className : "text-dark-muted"
                    } text-xs font-medium`}
                  ></p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

ShowcaseCarousel.propTypes = {
  data: PropTypes.array,
};

export default ShowcaseCarousel;
