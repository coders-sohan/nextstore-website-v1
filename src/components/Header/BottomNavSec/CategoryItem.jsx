import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import SubItem from "./SubItem";

const CategoryItem = ({ item, index, categoriesMenuData }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return item?.href ? (
    <Link
      to={item?.href}
      className={`py-3 px-4 flex justify-between items-center hover:text-amber-700 ${
        index !== categoriesMenuData.length - 1 &&
        "border-b border-0.5 border-gray-700"
      }`}
      key={item.id}
      onMouseEnter={() => setOpenSubMenu(true)}
      onMouseLeave={() => setOpenSubMenu(false)}
    >
      {item.name}
      {item?.data && (
        <ChevronRightIcon
          strokeWidth={2.5}
          className={`h-3.5 w-3.5 transition-transform ${
            openSubMenu ? "rotate-180" : ""
          }`}
        />
      )}
      <SubItem openSubMenu={openSubMenu} item={item} />
    </Link>
  ) : (
    <div
      className={`py-3 px-4 cursor-pointer flex justify-between items-center hover:text-amber-700 ${
        index !== categoriesMenuData.length - 1 &&
        "border-b border-0.5 border-gray-700"
      }`}
      key={item.id}
      onMouseEnter={() => setOpenSubMenu(true)}
      onMouseLeave={() => setOpenSubMenu(false)}
    >
      {item.name}
      {item?.data && (
        <ChevronRightIcon
          strokeWidth={2.5}
          className={`h-3.5 w-3.5 transition-transform ${
            openSubMenu ? "rotate-180" : ""
          }`}
        />
      )}
      <SubItem openSubMenu={openSubMenu} item={item} />
    </div>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  categoriesMenuData: PropTypes.array.isRequired,
};

export default CategoryItem;
