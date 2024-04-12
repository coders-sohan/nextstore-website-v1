import { useState } from "react";
import PropTypes from "prop-types";
// import ReactImageZoom from "react-image-zoom";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { IoIosCloseCircle } from "react-icons/io";

const ScrollableProductImages = ({ images, title }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  const handleZoomClick = (image) => {
    setPopupImage(image);
    setShowPopup(true);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex justify-center border w-full h-full relative">
        {/* <ReactImageZoom
          {...{
            img: images[0]?.url,
            width: 600,
            zoomPosition: "original",
          }}
        /> */}
        <img src={images[0]?.url} alt="Product" className="w-[600px] h-auto" />
        <div
          className="absolute top-5 left-5 cursor-pointer"
          onClick={() => handleZoomClick(images[0]?.url)}
        >
          <LiaSearchPlusSolid className="h-8 w-8" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {images.map((image, index) => {
          if (index === 0) return null;
          return (
            <div key={index} className="border relative">
              {/* <ReactImageZoom
                {...{
                  img: image?.url,
                  width: 400,
                  zoomPosition: "original",
                }}
              /> */}
              <img
                src={image?.url}
                alt="Product"
                className="w-[400px] h-auto"
              />
              <div
                className="absolute top-5 left-5"
                onClick={() => handleZoomClick(image?.url)}
              >
                <LiaSearchPlusSolid className="h-6 w-6" />
              </div>
            </div>
          );
        })}
      </div>
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
          style={{
            backdropFilter: "blur(5px)",
          }}
          onClick={() => setShowPopup(false)}
        >
          <div className="relative bg-white mx-5">
            <div className="flex flex-col">
              <img src={popupImage} alt="Zoomed" className="w-[650px] h-auto" />
              <h2 className="text-base font-poppins font-semibold text-center pb-5">
                {title}
              </h2>
            </div>

            <button
              className="absolute -top-5 -right-5 cursor-pointer bg-white rounded-full"
              onClick={() => {
                setShowPopup(false);
                document.body.style.overflow = "auto";
              }}
            >
              <IoIosCloseCircle className="h-12 w-12 text-red-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ScrollableProductImages.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
};

export default ScrollableProductImages;
