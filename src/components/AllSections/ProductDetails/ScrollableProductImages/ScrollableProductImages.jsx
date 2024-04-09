import { useState } from "react";
import PropTypes from "prop-types";
import ReactImageZoom from "react-image-zoom";

const ScrollableProductImages = ({ images }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  const handleZoomClick = (image) => {
    setPopupImage(image);
    setShowPopup(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center py-10 border relative">
        <ReactImageZoom
          {...{
            img: images[0]?.url,
            width: 500,
            zoomPosition: "original",
          }}
        />
        <div
          className="absolute top-5 left-5 bg-red-400"
          onClick={() => handleZoomClick(images[0]?.url)}
        >
          <p>zoom icon</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {images.map((image, index) => {
          if (index === 0) return null;
          return (
            <div key={index} className="flex justify-center border relative">
              <ReactImageZoom
                {...{
                  img: image.url,
                  width: 400,
                  zoomPosition: "original",
                }}
              />
              <div
                className="absolute top-5 left-5 bg-red-400"
                onClick={() => handleZoomClick(image.url)}
              >
                <p>zoom icon</p>
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
