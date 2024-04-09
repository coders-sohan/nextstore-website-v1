import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { BiShowAlt } from "react-icons/bi";
import { PiShuffle } from "react-icons/pi";
import { TbShoppingBag } from "react-icons/tb";
import smoothScrollToTop from "../SmoothScroll/SmoothScroll";
import DynamicImage from "../LazyLoadImage/DynamicImage";
import ProductMiniCarousel from "../Carousels/SpecialProductsCarousel/ProductMiniCarousel";
import ProductTimeCounter from "../TimeCounter/ProductTimeCounter";

const SpecialProductCard = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white p-5 rounded-xl relative group">
      <div className="flex gap-3">
        <div className="w-1/2 flex flex-col gap-3 relative">
          <Link onClick={smoothScrollToTop} to={"/product/" + `${item.slug}`}>
            <DynamicImage
              src={selectedImage ? selectedImage.url : item.images[0].url}
              alt={item.title}
              dimension={{ height: 884, width: 884 }}
              className="h-full w-full object-cover"
            />
          </Link>
          {/* card icons */}
          <div>
            <div className="absolute top-0 right-2">
              <button
                onClick={() => {
                  console.log("clicked add to wishlist");
                }}
                className="bg-white hover:bg-secondary text-secondary hover:text-white rounded-full p-2 
              transition-all duration-150 ease-linear"
              >
                <FaRegHeart className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div
              className="flex flex-col gap-0 sm:gap-2 absolute top-8 sm:top-11 right-2 opacity-100 sm:opacity-0 group-hover:opacity-100 
          transition-all ease-linear duration-300"
            >
              <button
                onClick={() => {
                  console.log("clicked add to compare");
                }}
                className="bg-white hover:bg-primary text-dark-muted hover:text-white rounded-full p-2 
              transition-all duration-150 ease-linear"
              >
                <PiShuffle className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={() => {
                  console.log("clicked show quick view");
                }}
                className="bg-white hover:bg-primary text-dark-muted hover:text-white rounded-full p-2 
              transition-all duration-150 ease-linear"
              >
                <BiShowAlt className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={() => {
                  console.log("clicked add to cart");
                }}
                className="bg-white hover:bg-primary text-dark-muted hover:text-white rounded-full p-2 
              transition-all duration-150 ease-linear"
              >
                <TbShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
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
              <Link
                onClick={smoothScrollToTop}
                to={`/`}
                className="text-xs sm:text-sm text-secondary"
              >
                {item.category}
              </Link>
            </div>
            <div>
              <Link
                onClick={smoothScrollToTop}
                to={"/product/" + `${item.slug}`}
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
              <span className="text-xs sm:text-sm">
                <ProductTimeCounter date="2026-06-04T16:49:49.142Z" />
              </span>
            </div>
            <div className="mt-3 text-center sm:text-left">
              <Link
                onClick={smoothScrollToTop}
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
