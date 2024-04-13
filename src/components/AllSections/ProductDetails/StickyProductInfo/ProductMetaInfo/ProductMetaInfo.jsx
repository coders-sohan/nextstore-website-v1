import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const ProductMetaInfo = ({ product }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* product title */}
      <div className="border-b border-gray-medium">
        <h2 className="text-2xl font-poppins font-semibold border-gray-medium mb-3 text-dark-special">
          {product?.title}
        </h2>
      </div>
      {/* price */}
      <div>
        <p className="font-poppins font-medium text-lg text-dark">
          $ {product?.price}.00
        </p>
      </div>
      {/* reviews overview */}
      <div className="border-b border-gray-medium">
        <div className="flex gap-3 items-center">
          {/* all stars */}
          <div className="flex gap-1">
            <FaStar className="text-tertiary h-3.5 w-3.5" />
            <FaStar className="text-tertiary h-3.5 w-3.5" />
            <FaStar className="text-tertiary h-3.5 w-3.5" />
            <FaStar className="text-tertiary h-3.5 w-3.5" />
            <FaStar className="text-tertiary h-3.5 w-3.5" />
          </div>
          {/* reviews count */}
          <div>
            <p className=" text-gray-dark text-sm">(8 reviews)</p>
          </div>
        </div>
        {/* go to write a review */}
        <div className="my-3">
          <p className="text-sm text-gray-dark">Write a review</p>
        </div>
      </div>
    </div>
  );
};

ProductMetaInfo.propTypes = {
  product: PropTypes.object,
};

export default ProductMetaInfo;
