import React from "react";
import PropTypes from "prop-types";

const ItemContent = ({ icon, name }) => (
  <>
    <span>
      {icon &&
        React.createElement(icon, {
          className: "text-white h-7 w-7",
          strokeWidth: 1,
        })}
    </span>
    <span
      dangerouslySetInnerHTML={{ __html: name }}
      className="text-white text-xs font-semibold normal-case"
    ></span>
  </>
);

ItemContent.propTypes = {
  icon: PropTypes.elementType,
  name: PropTypes.string,
};

export default ItemContent;
