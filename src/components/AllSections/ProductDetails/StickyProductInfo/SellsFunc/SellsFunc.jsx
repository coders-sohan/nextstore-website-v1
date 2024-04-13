import { useEffect } from "react";
import PropTypes from "prop-types";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SellsFunc = ({
  product,
  quantityValue,
  setQuantityValue,
  maxQuantity,
  setMaxQuantity,
}) => {
  // Update maxQuantity when quantityValue changes
  useEffect(() => {
    setMaxQuantity(product.quantity - quantityValue);
  }, [quantityValue, product.quantity, setMaxQuantity]);

  // increment and decrement quantity
  const increment = () => {
    if (quantityValue < product.quantity) {
      setQuantityValue((prev) => prev + 1);
    } else {
      alert("Cannot exceed available stock");
    }
  };

  const decrement = () => {
    if (quantityValue > 1) {
      setQuantityValue((prev) => prev - 1);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = Number(e.target.value);
    if (inputValue <= product.quantity && inputValue > 0) {
      setQuantityValue(inputValue);
    } else if (inputValue <= 0) {
      alert("Quantity cannot be zero");
    } else {
      alert("Cannot exceed available stock");
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
              No products left in stock
            </p>
          )
        ) : (
          <p className="text-red-500 font-semibold font-proxima">
            Out of stock
          </p>
        )}
      </div>
      {/* quantity selection and add to cart or buy now */}
      <div className="flex gap-5 items-center">
        <div>
          <p className="text-sm">
            <span className="font-bold">Quantity:</span>
          </p>
        </div>
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
        <div>
          <button
            className={`${
              product?.isActive && maxQuantity > 0
                ? "bg-black text-white"
                : "bg-gray-medium text-gray-500 cursor-not-allowed"
            } px-5 h-10 font-semibold`}
            disabled={
              !product?.isActive ||
              quantityValue > product.quantity ||
              quantityValue <= 0
            }
          >
            Add to Cart
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
  maxQuantity: PropTypes.number.isRequired,
  setMaxQuantity: PropTypes.func.isRequired,
};

export default SellsFunc;
