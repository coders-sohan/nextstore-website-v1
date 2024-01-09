import React from "react";
import PropTypes from "prop-types";

const ItemContent = ({ icon, name, className }) => (
  <>
    <span>
      {icon &&
        React.createElement(icon, {
          className: `${className ? className : "text-white"} h-7 w-7`,
          strokeWidth: 1,
        })}
    </span>
    <span
      dangerouslySetInnerHTML={{ __html: name }}
      className={`${
        className ? className : "text-white"
      } text-xs font-bold normal-case`}
    ></span>
  </>
);

ItemContent.propTypes = {
  icon: PropTypes.elementType,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default ItemContent;
