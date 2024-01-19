import { useRef, useState } from "react";
import { blogsData } from "../../../assets/data/blogsData";
import CarouselController from "../../Shared/Carousels/CarouselController";
import BlogCarousel from "../../Shared/Carousels/BlogCarousel/BlogCarousel";
// redux toolkit
import { useGetAllBlogsQuery } from "../../../redux/services/blogs/blogsService";

const BlogsSec = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { data, error, isLoading } = useGetAllBlogsQuery();
  console.log(data, error, isLoading);

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
          Our Latest News
        </h3>
        <CarouselController
          isBeginning={isBeginning}
          isEnd={isEnd}
          goPrev={goPrev}
          goNext={goNext}
        />
      </div>
      <div>
        <BlogCarousel
          swiperRef={swiperRef}
          slidesPerView={{
            sm: 1,
            md: 2,
            lg: 4,
          }}
          data={blogsData}
        />
      </div>
    </div>
  );
};

export default BlogsSec;
