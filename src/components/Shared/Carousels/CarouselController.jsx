import PropTypes from "prop-types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarouselController = ({ isBeginning, isEnd, goPrev, goNext }) => {
  return (
    <div className="flex gap-2 items-center">
      <button
        disabled={isBeginning}
        onClick={goPrev}
        className={`p-1 text-dark-muted ${
          isBeginning ? "bg-gray-medium" : "bg-white"
        }`}
      >
        <IoIosArrowBack className="h-5 w-5" />
      </button>
      <button
        disabled={isEnd}
        onClick={goNext}
        className={`p-1 text-dark-muted ${
          isEnd ? "bg-gray-medium" : "bg-white"
        }`}
      >
        <IoIosArrowForward className="h-5 w-5" />
      </button>
    </div>
  );
};

CarouselController.propTypes = {
  isBeginning: PropTypes.bool,
  isEnd: PropTypes.bool,
  goPrev: PropTypes.func,
  goNext: PropTypes.func,
};

export default CarouselController;
