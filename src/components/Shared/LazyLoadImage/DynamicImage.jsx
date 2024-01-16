import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const DynamicImage = ({ src, alt, className }) => {
  return (
    <LazyLoadImage
      src={src ? src : "https://placehold.co/1300x700/070f22/070f22"}
      alt={alt ? alt : "a image is here"}
      effect="blur"
      className={className || ""}
    />
  );
};

DynamicImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default DynamicImage;
