import React from "react";
import PropTypes from "prop-types";

const FeaturesInfo = ({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setselectedSize,
}) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        {/* brand */}
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
        {/* size selections */}
        {product?.sizes.length > 0 && (
          <div>
            <div className="text-sm flex flex-col gap-5">
              <span className="font-bold">Sizes:</span>
              <div className="flex gap-5">
                {product?.sizes?.map((size, index) => (
                  <div
                    key={index}
                    className={`px-3 py-1 border border-gray-medium cursor-pointer ${
                      size.size === selectedSize
                        ? "bg-gray-medium text-dark"
                        : ""
                    }`}
                    onClick={() => {
                      setselectedSize(size.size);
                    }}
                  >
                    {size.size}
                  </div>
                ))}
              </div>
            </div>
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
                    className={`w-8 h-8 rounded-full border border-gray-medium relative cursor-pointer flex items-center
                  justify-center ${
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
    </>
  );
};

FeaturesInfo.propTypes = {
  product: PropTypes.object,
  selectedColor: PropTypes.string,
  setSelectedColor: PropTypes.func,
  selectedSize: PropTypes.string,
  setselectedSize: PropTypes.func,
};

export default FeaturesInfo;
