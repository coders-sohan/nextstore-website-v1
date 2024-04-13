import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FeaturesInfo from "./FeaturesInfo/FeaturesInfo";
import ProductMetaInfo from "./ProductMetaInfo/ProductMetaInfo";

const StickyProductInfo = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setselectedSize] = useState(product?.sizes[0]?.size);

  useEffect(() => {
    console.log(selectedColor);
    console.log(selectedSize);
  }, [selectedColor, selectedSize]);

  return (
    <div className="flex flex-col gap-3 pb-5">
      <ProductMetaInfo product={product} />
      {/* features info */}
      <FeaturesInfo
        product={product}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setselectedSize={setselectedSize}
      />
    </div>
  );
};

StickyProductInfo.propTypes = {
  product: PropTypes.object,
};

export default StickyProductInfo;
