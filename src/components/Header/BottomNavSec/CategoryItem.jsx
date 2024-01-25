import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const CategoryItem = ({ item, index, categoriesMenuData }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [openSubMenuItem, setOpenSubMenuItem] = useState(false);
  return (
    <div
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
      <div className={`absolute w-full top-0 left-full border border-transparent rounded-b-lg rounded-lg ${!openSubMenu && 'hidden'}`}>

        {item?.data?.map((subItem, id) =>
          <div
            className={`py-3 px-4 w-full bg-dark-special flex justify-between items-center hover:text-amber-700 text-white ${id !== item.data.length - 1 ? 'border-b border-0.5 border-gray-700' : 'rounded-b-lg'}`}
            key={id}
            onMouseEnter={() => { if (!subItem.href) { setOpenSubMenuItem((prev) => !prev) } }}
            onMouseLeave={() => setOpenSubMenuItem(false)}
            title={subItem.id}
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
                <div
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
                </div>)}
            </div>
          </div>)}

      </div>
    </div>
  );
};

export default CategoryItem;