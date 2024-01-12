import PropTypes from "prop-types";

const ProductsCarousel = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>Hello</div>
    </>
  );
};

ProductsCarousel.propTypes = {
  data: PropTypes.array,
};

export default ProductsCarousel;
