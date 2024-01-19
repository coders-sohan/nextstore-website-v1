import { NavLink } from "react-router-dom";
import { Menu, MenuHandler, MenuList, Button } from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import {
  categoriesMenuData,
  primaryMenuData,
} from "../../../assets/data/navbarData";
import menuSvg from "../../../assets/images/menu.svg";
import smoothScrollToTop from "../../Shared/SmoothScroll/SmoothScroll";
import CategoryItem from "./CategoryItem";

const BottomHeaderSec = () => {
  return (
    <div className="ns_container">
      <div className="flex items-center gap-5">
        <div>
          <Menu
            placement="bottom-start"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            offset={15}
          >
            <MenuHandler>
              <Button className="p-0 text-white" variant="text">
                <div className="border-r border-gray-dark pr-5 flex items-center gap-16">
                  <div className="flex items-center gap-5">
                    <span>
                      <img src={menuSvg} alt="svg" className="h-6 w-6" />
                    </span>
                    <span className="uppercase text-sm font-semibold">
                      Shop categories
                    </span>
                  </div>
                  <div className="mt-0.5">
                    <IoIosArrowDown />
                  </div>
                </div>
              </Button>
            </MenuHandler>
            <MenuList className="w-64">
              {categoriesMenuData.map((item) => (
                <CategoryItem key={item.id} item={item} />
              ))}
            </MenuList>
          </Menu>
        </div>
        <div>
          <div className="flex items-center gap-12">
            {primaryMenuData.map((item) => (
              <div key={item.id}>
                <NavLink onClick={smoothScrollToTop} to={item.href}>
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeaderSec;
