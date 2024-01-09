import React from "react";
import PropTypes from "prop-types";

const ItemContent = ({ icon, name, className, cartCount }) => (
  <>
    {icon && (
      <div className="relative">
        {icon &&
          React.createElement(icon, {
            className: `${
              className ? className : "text-white"
            } md:h-7 md:w-7 h-6 w-6`,
          })}
        {cartCount >= 0 && (
          <span className="absolute md:-top-1.5 md:-right-1 -top-2 -right-1.5 bg-error text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </div>
    )}
    <span
      dangerouslySetInnerHTML={{ __html: name }}
      className={`${
        className ? className : "text-white"
      } text-xs font-bold normal-case md:block hidden`}
    ></span>
  </>
);

ItemContent.propTypes = {
  icon: PropTypes.elementType,
  name: PropTypes.string,
  className: PropTypes.string,
  cartCount: PropTypes.number,
};

export default ItemContent;
