// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// import css
import "./BannerCarousel.css";
import { bannerSliderData } from "../../../assets/data/homeSecData";
import { Link } from "react-router-dom";

const BannerCarousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} w-3 h-3 mx-1 rounded-full"></span>`;
    },
  };

  return (
    <div className="h-full w-full overflow-auto rounded-xl">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bannerSliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-full w-full overflow-hidden group">
              <div
                style={{ backgroundImage: `url('${item.imgUrl}')` }}
                className="bg-cover bg-center h-full w-full transform transition-transform duration-500 group-hover:scale-110"
              ></div>
              <div className="absolute top-0 left-0 flex flex-col gap-5 px-10 py-16">
                <p className="text-error font-medium text-sm uppercase">
                  {item.subTitle}
                </p>
                <h3 className="font-bold text-dark text-5xl">{item.title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.desc,
                  }}
                  className="text-dark-muted text-base font-medium"
                ></p>
                <div className="mt-5">
                  <Link
                    to={item.btnUrl}
                    className="uppercase bg-dark-muted text-white px-8 py-3 text-xs font-medium rounded-full hover:bg-primary transition-all ease-linear duration-150"
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
