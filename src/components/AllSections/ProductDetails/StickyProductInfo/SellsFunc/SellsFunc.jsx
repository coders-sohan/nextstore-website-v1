import PropTypes from "prop-types";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiHeart, FiRefreshCw } from "react-icons/fi";

const SellsFunc = ({ product, quantityValue, setQuantityValue }) => {
  // max quantity
  const maxQuantity = product?.quantity;

  // increment and decrement quantity
  const increment = () => {
    setQuantityValue((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantityValue > 1) {
      setQuantityValue((prev) => prev - 1);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = Number(e.target.value);
    if (inputValue > 0) {
      setQuantityValue(inputValue);
    } else if (inputValue <= 0) {
      alert("Quantity cannot be zero");
    }
  };

  return (
    <div className="mt-3 flex flex-col gap-3">
      {/* in stock and out of stock message */}
      <div>
        {product?.isActive ? (
          maxQuantity > 0 ? (
            <p className="text-green-500 font-semibold font-proxima">
              {product?.quantity} products in stock
            </p>
          ) : (
            <p className="text-red-500 font-semibold font-proxima">
              Out of stock
            </p>
          )
        ) : (
          <p className="text-red-500 font-semibold font-proxima">
            This product is currently unavailable
          </p>
        )}
      </div>
      {/* quantity selection and add to cart or buy now */}
      <div className="flex gap-5 items-center">
        {/* level */}
        <div>
          <p className="text-sm">
            <span className="font-bold">Quantity:</span>
          </p>
        </div>
        {/* quantity, increment and decrement field */}
        <div className="flex items-center">
          <div>
            <button
              onClick={decrement}
              className="border border-r-0 border-gray-medium px-2 h-8"
            >
              <AiOutlineMinus />
            </button>
          </div>
          <div>
            <input
              type="number"
              min="1"
              value={quantityValue}
              onChange={handleInputChange}
              className="w-16 h-8 border border-gray-medium text-center mx-2"
              style={{
                MozAppearance: "textfield",
                WebkitAppearance: "none",
                margin: 0,
              }}
            />
          </div>
          <div>
            <button
              onClick={increment}
              className="border border-l-0 border-gray-medium px-2 h-8"
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        {/* add to cart button */}
        <div>
          <button
            className={`${
              product?.isActive &&
              maxQuantity > 0 &&
              !(quantityValue > maxQuantity)
                ? "bg-primary hover:bg-dark text-white transition-all duration-300 ease-in-out cursor-pointer"
                : "bg-gray-medium text-gray-500 cursor-not-allowed"
            } px-6 h-10 font-medium text-sm`}
            disabled={
              !product?.isActive || quantityValue > maxQuantity ? true : false
            }
          >
            Add to cart
          </button>
        </div>
        {/* buy now button*/}
        <div>
          <button
            className={`${
              product?.isActive &&
              maxQuantity > 0 &&
              !(quantityValue > maxQuantity)
                ? "bg-tertiary hover:bg-dark text-white transition-all duration-300 ease-in-out cursor-pointer"
                : "bg-gray-medium text-gray-500 cursor-not-allowed"
            } px-6 h-10 font-medium text-sm`}
            disabled={
              !product?.isActive || quantityValue > maxQuantity ? true : false
            }
          >
            Buy it now
          </button>
        </div>
      </div>
      {/* add to wishlist and add to comapre buttons */}
      <div className="flex gap-3 items-center mt-3">
        {/* add to wishlist button */}
        <div>
          <button className="p-2 flex gap-2 items-center text-sm font-semibold font-proxima">
            <span>
              <FiHeart />
            </span>
            <span>Add to wishlist</span>
          </button>
        </div>
        {/* compare button */}
        <div>
          <button className="p-2 flex gap-2 items-center text-sm font-semibold font-proxima">
            <span>
              <FiRefreshCw />
            </span>
            <span>Add to compare</span>
          </button>
        </div>
      </div>
    </div>
  );
};

SellsFunc.propTypes = {
  product: PropTypes.object.isRequired,
  quantityValue: PropTypes.number.isRequired,
  setQuantityValue: PropTypes.func.isRequired,
};

export default SellsFunc;
