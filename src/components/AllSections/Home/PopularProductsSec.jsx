import { useRef, useState } from "react";
// import { productsData } from "../../../assets/data/productsData";
import CarouselController from "../../Shared/Carousels/CarouselController";
import CategoriesTab from "./SubSections/CategoriesTab";
import PopularProductsAds from "./SubSections/PopularProductsAds";
import ProductsCarousel from "../../Shared/Carousels/ProductsCarousel/ProductsCarousel";
// redux toolkit
import { useGetAllProductsQuery } from "../../../redux/services/products/productsService";

const PopularProductsSec = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { data: productsData, error, isLoading } = useGetAllProductsQuery();
  console.log(productsData, error, isLoading);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  return (
    <div className="py-12">
      <div className="mb-5 sm:mb-10 flex justify-between items-center">
        <h3 className="text-dark-muted font-bold text-xl sm:text-3xl font-poppins">
          Our Popular Products
        </h3>
        <CarouselController
          isBeginning={isBeginning}
          isEnd={isEnd}
          goPrev={goPrev}
          goNext={goNext}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-5">
        <div className="my-2 col-span-2 sm:col-span-1">
          <CategoriesTab />
        </div>
        <div className="my-2 col-span-1">
          <PopularProductsAds />
        </div>
        <div className="col-span-1 sm:col-span-4">
          <ProductsCarousel
            swiperRef={swiperRef}
            slidesPerView={{
              sm: 1,
              md: 3,
              lg: 4,
            }}
            data={productsData?.data}
          />
        </div>
      </div>
    </div>
  );
};

export default PopularProductsSec;
