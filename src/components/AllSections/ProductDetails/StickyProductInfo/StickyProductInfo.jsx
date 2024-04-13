import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FeaturesInfo from "./FeaturesInfo/FeaturesInfo";
import ProductMetaInfo from "./ProductMetaInfo/ProductMetaInfo";
import SellsFunc from "./SellsFunc/SellsFunc";

const StickyProductInfo = ({ product }) => {
  // selected color and size
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setselectedSize] = useState(product?.sizes[0]?.size);
  // Sells Functionality
  const [quantityValue, setQuantityValue] = useState(1);

  // cart info
  const cartInfo = {
    productId: product?._id,
    selectedColor,
    selectedSize,
    quantityValue,
  };

  console.log(cartInfo);

  // change detection for selectedColor, selectedSize and quantityValue
  useEffect(() => {
    console.log(selectedColor);
    console.log(selectedSize);
    console.log(quantityValue);
  }, [selectedColor, selectedSize, quantityValue]);

  return (
    <div className="flex flex-col gap-3 pb-5">
      {/* product basic meta info */}
      <ProductMetaInfo product={product} />
      {/* features info */}
      <FeaturesInfo
        product={product}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setselectedSize={setselectedSize}
      />
      {/* quantity, stock and add to cart  */}
      <SellsFunc
        product={product}
        quantityValue={quantityValue}
        setQuantityValue={setQuantityValue}
      />
    </div>
  );
};

StickyProductInfo.propTypes = {
  product: PropTypes.object,
};

export default StickyProductInfo;
