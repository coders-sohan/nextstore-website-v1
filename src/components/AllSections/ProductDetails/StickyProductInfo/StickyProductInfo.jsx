import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const StickyProductInfo = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  useEffect(() => {
    console.log(selectedColor);
  }, [selectedColor]);

  return (
    <div className="flex flex-col gap-3 pb-5">
      {/* Product title, data, and add-to-cart button content */}
      <div className="border-b border-gray-medium">
        <h2 className="text-2xl font-poppins font-semibold border-gray-medium mb-3 text-dark-special">
          {product?.title}
        </h2>
      </div>
      <div>
        <p className="font-poppins font-medium text-lg text-dark">
          $ {product?.price}.00
        </p>
      </div>
      <div className="border-b border-gray-medium">
        <div className="flex gap-3 items-center">
          <div className="flex gap-1">
            <FaStar className="text-tertiary h-3.5 w-3.5" />
            <FaStar className="text-tertiary h-3.5 w-3.5" />
            <FaStar className="text-tertiary h-3.5 w-3.5" />
            <FaStar className="text-tertiary h-3.5 w-3.5" />
            <FaStar className="text-tertiary h-3.5 w-3.5" />
          </div>
          <div>
            <p className=" text-gray-dark text-sm">(8 reviews)</p>
          </div>
        </div>
        <div className="my-3">
          <p className="text-sm text-gray-dark">Write a review</p>
        </div>
      </div>
      <div>
        <p className="text-sm flex gap-2">
          <span className="font-bold">Brand:</span>
          <span className="text-gray-dark">{product?.brand}</span>
        </p>
      </div>
      {/* all tags */}
      {product?.tags.length > 0 && (
        <div>
          <p className="text-sm flex gap-2">
            <span className="font-bold">Tags:</span>
            <span>
              {product?.tags?.map((tag, index, arr) => (
                <React.Fragment key={tag}>
                  <span className="text-gray-dark">{tag}</span>
                  {index !== arr.length - 1 && (
                    <span className="text-gray-dark"> , </span>
                  )}
                </React.Fragment>
              ))}
            </span>
          </p>
        </div>
      )}
      {/* colors selection */}
      {product?.colors.length > 0 && (
        <div>
          <div className="text-sm flex flex-col gap-5">
            <span className="font-bold">Colors:</span>
            <div className="flex gap-5">
              {product?.colors?.map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full border border-gray-medium relative cursor-pointer flex items-center justify-center ${
                    color === selectedColor
                      ? "ring-2 ring-black ring-offset-2 ring-offset-white"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    setSelectedColor(color);
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

StickyProductInfo.propTypes = {
  product: PropTypes.object,
};

export default StickyProductInfo;
