import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import ProductMiniCarousel from "../Carousels/SpecialProductsCarousel/ProductMiniCarousel";

const SpecialProductCard = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white p-5 rounded-xl relative group">
      <div className="flex gap-3">
        <div className="w-1/2 flex flex-col gap-3">
          <div>
            <img
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
              <Link to={`/`} className="text-sm text-secondary">
                {item.category}
              </Link>
            </div>
            <div>
              <Link
                to={`/`}
                className="font-semibold font-poppins hover:underline underline-offset-1"
                title={item.title}
              >
                {item.title.slice(0, 35)}...
              </Link>
            </div>
            <div className="mt-3">
              <span className="flex gap-1">
                <FaStar className="text-tertiary h-4 w-4" />
                <FaStar className="text-tertiary h-4 w-4" />
                <FaStar className="text-tertiary h-4 w-4" />
                <FaStar className="text-tertiary h-4 w-4" />
                <FaStar className="text-gray-dark h-4 w-4" />
              </span>
            </div>
            <div className="mt-2">
              <p className="font-semibold text-dark-muted">
                ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="mt-2">
              <span>day counter here</span>
            </div>
            <div className="mt-3">
              <Link
                to={"/"}
                className="text-sm font-semibold px-5 py-1.5 bg-primary text-white rounded-full inline-block transition-all duration-150 ease-linear group-hover:bg-dark"
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
