import { Link } from "react-router-dom";
import { bannerCardSectionData } from "../../../assets/data/homeSecData";
import smoothScrollToTop from "../../Shared/SmoothScroll/SmoothScroll";
import BannerCarousel from "../../Shared/Carousels/BannerCarousel/BannerCarousel";

const BannerSec = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center gap-5">
        <div className="w-full sm:w-1/2 h-64 sm:h-auto flex-shrink-0 relative">
          <div className="h-full w-full absolute">
            <BannerCarousel />
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="grid grid-cols-2 gap-5">
            {bannerCardSectionData.map((item) => (
              <Link onClick={smoothScrollToTop} key={item.id} to={item.btnUrl}>
                <div className="relative h-36 w-auto sm:h-56 sm:w-full overflow-hidden rounded-xl group">
                  <div
                    style={{ backgroundImage: `url('${item.imgUrl}')` }}
                    className="bg-cover bg-center h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                  ></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-0 flex flex-col gap-1 sm:gap-2 px-2 sm:px-5">
                    <p className="text-error font-medium text-xs sm:text-sm uppercase">
                      {item.subTitle}
                    </p>
                    <h3 className="font-semibold sm:font-bold text-dark text-sm sm:text-xl">
                      {item.title}
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.desc,
                      }}
                      className="text-dark-muted text-xs sm:text-xs font-medium hidden sm:block"
                    ></p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSec;
