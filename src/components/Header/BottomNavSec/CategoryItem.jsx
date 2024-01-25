import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SubItem = ({ openSubMenu, item }) => {
  const [openSubMenuItem, setOpenSubMenuItem] = useState(false);
  return (
    <div className={`absolute w-full top-0 left-full border border-transparent rounded-b-lg rounded-lg ${!openSubMenu && 'hidden'}`}>

      {item?.data?.map((subItem, id) =>
        <Link
          to={subItem?.href}
          className={`py-3 px-4 w-full bg-dark-special flex justify-between items-center hover:text-amber-700 text-white ${id !== item.data.length - 1 ? 'border-b border-0.5 border-gray-700' : 'rounded-b-lg'}`}
          key={id}
          onMouseEnter={() => { if (!subItem.href) { setOpenSubMenuItem((prev) => !prev) } }}
          onMouseLeave={() => setOpenSubMenuItem(false)}
        >
          {subItem.name}
          {subItem?.subData &&
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`h-3.5 w-3.5 transition-transform ${openSubMenuItem ? "rotate-180" : ""
                }`}
            />}
          <div className={`absolute w-full top-0 left-full border border-transparent rounded-b-lg rounded-lg ${!openSubMenuItem && 'hidden'}`}>
            {subItem?.subData?.map((subDataItem, id) =>
              <Link
                to={subDataItem?.href}
                className={`py-3 px-4 w-full bg-dark-special flex justify-between items-center hover:text-amber-700 text-white ${id !== subItem.subData.length - 1 ? 'border-b border-0.5 border-gray-700' : 'rounded-b-lg'}`}
                key={id}
              >
                {subDataItem.name}
                {subDataItem?.subData &&
                  <ChevronRightIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${openSubMenuItem ? "rotate-180" : ""
                      }`}
                  />}
              </Link>)}
          </div>
        </Link>)}

    </div>
  )
}

SubItem.propTypes = {
  openSubMenu: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
};

const CategoryItem = ({ item, index, categoriesMenuData }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <Link
      to={item?.href}
      className={`py-3 px-4 flex justify-between items-center hover:text-amber-700 ${index !== categoriesMenuData.length - 1 && 'border-b border-0.5 border-gray-700'}`}
      key={item.id}
      onMouseEnter={() => setOpenSubMenu(true)}
      onMouseLeave={() => setOpenSubMenu(false)}
    >
      {item.name}
      {item?.data &&
        <ChevronRightIcon
          strokeWidth={2.5}
          className={`h-3.5 w-3.5 transition-transform ${openSubMenu ? "rotate-180" : ""
            }`}
        />}
      <SubItem openSubMenu={openSubMenu} item={item} />
    </Link>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  categoriesMenuData: PropTypes.array.isRequired,
};

export default CategoryItem;
