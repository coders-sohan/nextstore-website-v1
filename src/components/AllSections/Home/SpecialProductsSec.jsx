import { useRef, useState } from "react";
// import { productsData } from "../../../assets/data/productsData";
import CarouselController from "../../Shared/Carousels/CarouselController";
import SpecialProductsCarousel from "../../Shared/Carousels/SpecialProductsCarousel/SpecialProductsCarousel";
// redux toolkit
import { useGetAllProductsQuery } from "../../../redux/services/products/productsService";

const SpecialProductsSec = () => {
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
          Special Products
        </h3>
        <CarouselController
          isBeginning={isBeginning}
          isEnd={isEnd}
          goPrev={goPrev}
          goNext={goNext}
        />
      </div>
      <div>
        <SpecialProductsCarousel
          swiperRef={swiperRef}
          data={productsData?.data}
        />
      </div>
    </div>
  );
};

export default SpecialProductsSec;
