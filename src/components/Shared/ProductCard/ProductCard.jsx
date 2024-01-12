import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaStar, FaRegHeart } from "react-icons/fa6";
import { PiShuffle } from "react-icons/pi";
import { BiShowAlt } from "react-icons/bi";
import { TbShoppingBag } from "react-icons/tb";

const ProductCard = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(item.images[0].url);

  const handleMouseEnter = () => {
    if (item.images[1]) {
      setCurrentImage(item.images[1].url);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImage(item.images[0].url);
  };

  return (
    <div
      className="my-2 bg-white rounded-xl shadow-md group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col relative">
        {/* card images */}
        <Link to={"/"}>
          <img
            src={currentImage}
            alt={item.title}
            className="h-56 w-auto mx-auto transition-opacity duration-500"
          />
        </Link>
        {/* card icons */}
        <div>
          <div className="absolute top-2 right-2">
            <button
              onClick={() => {
                console.log("clicked add to wishlist");
              }}
              className="bg-white hover:bg-primary text-dark-muted hover:text-white rounded-full p-2 
              transition-all duration-150 ease-linear"
            >
              <FaRegHeart className="h-5 w-5" />
            </button>
          </div>
          <div
            className="flex flex-col gap-2 absolute top-14 right-2 opacity-0 group-hover:opacity-100 
          transition-all ease-linear duration-300"
          >
            <button
              onClick={() => {
                console.log("clicked add to compare");
              }}
              className="bg-white hover:bg-primary text-dark-muted hover:text-white rounded-full p-2 
              transition-all duration-150 ease-linear"
            >
              <PiShuffle className="h-5 w-5" />
            </button>
            <button
              onClick={() => {
                console.log("clicked show quick view");
              }}
              className="bg-white hover:bg-primary text-dark-muted hover:text-white rounded-full p-2 
              transition-all duration-150 ease-linear"
            >
              <BiShowAlt className="h-5 w-5" />
            </button>
            <button
              onClick={() => {
                console.log("clicked add to cart");
              }}
              className="bg-white hover:bg-primary text-dark-muted hover:text-white rounded-full p-2 
              transition-all duration-150 ease-linear"
            >
              <TbShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
        {/* card info */}
        <div className="flex flex-col gap-4 px-4 py-3">
          <p className="text-sm text-secondary">{item.category}</p>
          <Link
            to={"/"}
            className="font-semibold text-dark-special text-base font-poppins hover:underline underline-offset-2"
            title={item.title}
          >
            {item.title.slice(0, 40)}...
          </Link>
          <div>
            <span className="flex gap-1">
              <FaStar className="text-tertiary h-4 w-4" />
              <FaStar className="text-tertiary h-4 w-4" />
              <FaStar className="text-tertiary h-4 w-4" />
              <FaStar className="text-tertiary h-4 w-4" />
              <FaStar className="text-gray-dark h-4 w-4" />
            </span>
          </div>
          <p className="font-semibold text-dark-muted">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object,
};

export default ProductCard;
