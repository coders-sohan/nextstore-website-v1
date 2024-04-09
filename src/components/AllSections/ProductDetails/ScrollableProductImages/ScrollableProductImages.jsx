import { useState } from "react";
import PropTypes from "prop-types";
import ReactImageZoom from "react-image-zoom";
import { BiSearchAlt } from "react-icons/bi";

const ScrollableProductImages = ({ images }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  const handleZoomClick = (image) => {
    setPopupImage(image);
    setShowPopup(true);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex justify-center border w-full h-full relative">
        <ReactImageZoom
          {...{
            img: images[0]?.url,
            width: 500,
            zoomWidth: 600,
            zoomPosition: "original",
          }}
        />
        <div
          className="absolute top-5 left-5 cursor-pointer"
          onClick={() => handleZoomClick(images[0]?.url)}
        >
          <BiSearchAlt className="h-8 w-8" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {images.map((image, index) => {
          if (index === 0) return null;
          return (
            <div key={index} className="border relative">
              <ReactImageZoom
                {...{
                  img: image.url,
                  width: 400,
                  zoomPosition: "original",
                }}
              />
              <div
                className="absolute top-5 left-5"
                onClick={() => handleZoomClick(image.url)}
              >
                <BiSearchAlt className="h-6 w-6" />
              </div>
            </div>
          );
        })}
      </div>
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0 z-50"
          style={{
            backdropFilter: "blur(5px)",
          }}
          onClick={() => setShowPopup(false)}
        >
          <div className="relative inline-flex">
            <img src={popupImage} alt="Zoomed" />
            <button
              className="absolute -top-3 -right-3 bg-red-500"
              onClick={() => {
                setShowPopup(false);
                document.body.style.overflow = "auto";
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ScrollableProductImages.propTypes = {
  images: PropTypes.array,
};

export default ScrollableProductImages;
