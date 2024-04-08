import { useState } from "react";

import {
  // Menu,
  // MenuHandler,
  // MenuList,
  Button,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
// import { ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  categoriesMenuData,
  primaryMenuData,
} from "../../../assets/data/navbarData";
import menuSvg from "../../../assets/images/menu.svg";
import smoothScrollToTop from "../../Shared/SmoothScroll/SmoothScroll";
import CategoryItem from "./CategoryItem";

const BottomNavSec = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className="ns_container">
            <div className="flex items-center gap-5">
                <div>
                    <div className="relative">
                        <div>
                            <Button onClick={() => setOpenMenu((prev) => !prev)} className="p-0 text-white" variant="text">
                                <div className="border-r border-gray-dark pr-5 flex items-center gap-16 ">
                                    <div className="flex items-center gap-5">
                                        <span>
                                            <img src={menuSvg} alt="svg" className="h-6 w-6" />
                                        </span>
                                        <span className="uppercase text-sm font-semibold">
                                            Shop categories
                                        </span>
                                    </div>
                                    <div className={`mt-0.5 transition-all duration-300 ease-in-out ${openMenu ? '-rotate-180' : 'rotate-0'}`}>
                                        <IoIosArrowDown />
                                    </div>

                                </div>
                            </Button>
                        </div>
                        <div className={`w-full rounded-b-lg absolute top-9 bg-dark-special z-20 overflow-hidden hover:overflow-visible transition-all duration-700 ease-linear ${openMenu ? ' max-h-screen' : 'max-h-0'}`}>
                            {categoriesMenuData.map((item, index) => (
                                <CategoryItem key={item.id} item={item} index={index} categoriesMenuData={categoriesMenuData} />
                            ))}
                        </div>
                    </div>
                </div>
              </Button>
            </div>
            {/* <div className="w-full rounded-b-lg absolute top-9 bg-gray-700 z-20">
              {categoriesMenuData.map((item) => (
                <div className="py-3 px-4" key={item.id}>
                  {item.name}
                </div>
              ))}
            </div> */}
            <div
              className={`w-full rounded-b-lg absolute top-9 bg-dark-special z-20 ${
                openMenu ? "" : "hidden"
              }`}
            >
              {categoriesMenuData.map((item, index) => (
                <CategoryItem
                  key={item.id}
                  item={item}
                  index={index}
                  categoriesMenuData={categoriesMenuData}
                />
                // <div
                //     className={`py-3 px-4 flex justify-between items-center ${index !== categoriesMenuData.length - 1 && 'border-b border-0.5 border-gray-700'}`}
                //     key={item.id}
                // >
                //     {item.name}
                //     <ChevronRightIcon
                //         strokeWidth={2.5}
                //         className={`h-3.5 w-3.5 transition-transform ${openSubMenu ? "rotate-180" : ""
                //             }`}
                //     />
                // </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-12">
            {primaryMenuData.map((item) => (
              <div key={item.id}>
                <div onClick={smoothScrollToTop} to={item.href}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavSec;
