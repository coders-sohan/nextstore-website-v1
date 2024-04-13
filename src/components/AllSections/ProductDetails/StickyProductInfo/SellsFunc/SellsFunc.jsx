import PropTypes from "prop-types";

const SellsFunc = ({
  product,
  quantityValue,
  setQuantityValue,
  maxQuantity,
}) => {
  // increment and decrement quantity
  const increment = () => {
    if (quantityValue < maxQuantity) {
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
    if (inputValue <= maxQuantity && inputValue > 0) {
      setQuantityValue(inputValue);
    } else if (inputValue <= 0) {
      alert("Quantity cannot be zero");
    } else {
      alert("Cannot exceed available stock");
    }
  };

  return (
    <>
      <div className="">
        {/* in stock and out of stock message */}
        <div>
          {product?.isActive ? (
            maxQuantity > 0 ? (
              <p className="text-green-500">In stock: {maxQuantity}</p>
            ) : (
              <p className="text-red-500">Stock quantity: 0</p>
            )
          ) : (
            <p className="text-red-500">Out of stock</p>
          )}
        </div>
        <div>
          <h3>Quantity</h3>
        </div>
        <div className="flex items-center h-full">
          <button
            onClick={decrement}
            className="border border-gray-medium px-2"
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantityValue}
            onChange={handleInputChange}
            className="w-20 h-10 border border-gray-medium text-center mx-2"
            style={{
              MozAppearance: "textfield",
              WebkitAppearance: "none",
              margin: 0,
            }}
          />
          <button
            onClick={increment}
            className="border border-gray-medium px-2"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

SellsFunc.propTypes = {
  product: PropTypes.object.isRequired,
  quantityValue: PropTypes.number.isRequired,
  setQuantityValue: PropTypes.func.isRequired,
  maxQuantity: PropTypes.number.isRequired,
};

export default SellsFunc;
