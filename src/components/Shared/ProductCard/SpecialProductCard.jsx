import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import ProductMiniCarousel from "../Carousels/SpecialProductsCarousel/ProductMiniCarousel";
import DynamicImage from "../LazyLoadImage/DynamicImage";

const SpecialProductCard = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white p-5 rounded-xl relative group">
      <div className="flex gap-3">
        <div className="w-1/2 flex flex-col gap-3">
          <div>
            <DynamicImage
              src={selectedImage ? selectedImage.url : item.images[0].url}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            {item.images.length > 1 ? (
              <ProductMiniCarousel
                setSelectedImage={setSelectedImage}
                imagesData={item.images}
              />
            ) : null}
          </div>
        </div>
        <div className="w-1/2 px-1">
          <div className="flex flex-col gap-2">
            <div>
              <Link to={`/`} className="text-xs sm:text-sm text-secondary">
                {item.category}
              </Link>
            </div>
            <div>
              <Link
                to={`/`}
                className="text-sm sm:text-base font-semibold font-poppins hover:underline underline-offset-1"
                title={item.title}
              >
                {item.title.slice(0, 35)}...
              </Link>
            </div>
            <div className="mt-3">
              <span className="flex gap-1">
                <FaStar className="h-3 sm:h-4 w-3 sm:w-4 text-tertiary" />
                <FaStar className="h-3 sm:h-4 w-3 sm:w-4 text-tertiary" />
                <FaStar className="h-3 sm:h-4 w-3 sm:w-4 text-tertiary" />
                <FaStar className="h-3 sm:h-4 w-3 sm:w-4 text-tertiary" />
                <FaStar className="h-3 sm:h-4 w-3 sm:w-4 text-gray-dark" />
              </span>
            </div>
            <div className="mt-2">
              <p className="text-xs sm:text-sm font-semibold text-dark-muted">
                ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="mt-2">
              <span className="text-xs sm:text-sm">day counter here</span>
            </div>
            <div className="mt-3 text-center sm:text-left">
              <Link
                to={"/"}
                className="text-xs sm:text-sm font-semibold px-3 sm:px-5 py-1 sm:py-1.5 bg-primary text-white rounded-full inline-block transition-all duration-150 ease-linear group-hover:bg-dark"
              >
                Option
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-3 left-5">
        <span
          className="bg-tertiary text-white group-hover:bg-secondary px-2 py-0.5 text-xs rounded-full 
        transition-all ease-linear duration-200"
        >
          10%
        </span>
      </div>
    </div>
  );
};

SpecialProductCard.propTypes = {
  item: PropTypes.object,
};

export default SpecialProductCard;
