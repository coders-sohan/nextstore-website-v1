import PropTypes from "prop-types";

const StickyProductInfo = ({ product }) => {
  return (
    <div>
      {/* Product title, data, and add-to-cart button content */}
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="text-gray-700 mt-2">{product.description}</p>
      {/* ... other product details ... */}
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

StickyProductInfo.propTypes = {
  product: PropTypes.object,
};

export default StickyProductInfo;
