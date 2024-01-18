import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const DynamicImage = ({ src, alt, dimension, className }) => {
  return (
    <LazyLoadImage
      src={
        src
          ? src
          : `https://placehold.co/${dimension.height}x${dimension.width}/FFFFFF/5d6167?text=Error%20Load%20Image`
      }
      alt={alt ? alt : "a image is here"}
      effect="blur"
      className={className || ""}
    />
  );
};

DynamicImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  dimension: PropTypes.object,
  className: PropTypes.string,
};

export default DynamicImage;
