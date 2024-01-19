import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Drawer,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { iconMenuData } from "../../../assets/data/navbarData";
import smoothScrollToTop from "../../Shared/SmoothScroll/SmoothScroll";
import ItemContent from "../../Shared/ItemContent/ItemContent";
import CartDrawer from "../../Shared/CartDrawer/CartDrawer";

const MiddelHeaderSec = () => {
  const [openRight, setOpenRight] = useState(false);

  const navigate = useNavigate();

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  let ammount = "0.00";

  return (
    <div className="ns_container">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="w-auto -mt-0.5">
          <Link
            onClick={smoothScrollToTop}
            to={"/"}
            className="text-3xl font-extrabold tracking-wider"
          >
            <span>Nextshop</span>
            <span className="text-warning">.</span>
          </Link>
        </div>
        {/* search bar */}
        <div className="w-3/6 md:block hidden">
          <div className="flex items-center bg-primary rounded">
            <input
              type="text"
              className="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tertiary text-dark-muted w-full text-sm rounded-s"
              placeholder="Search for products..."
              aria-level={"Search for products..."}
              onChange={(e) => console.log(e.target.value)}
            />
            <button className="px-3 py-1">
              <FiSearch className="text-white text-xl" />
            </button>
          </div>
        </div>
        {/* primary menu */}
        <div className="w-auto flex items-center justify-end gap-6 -mt-0.5">
          {iconMenuData.map((item) => (
            <div key={item.id}>
              {item.href && (
                <Link
                  onClick={smoothScrollToTop}
                  to={item.href}
                  className="flex items-center gap-3"
                >
                  <ItemContent icon={item.icon} name={item.name} />
                </Link>
              )}
              {item.data && (
                <Menu>
                  <MenuHandler>
                    <Button
                      variant="text"
                      className="flex items-center gap-3 text-left p-0 hover:bg-transparent font-semibold"
                    >
                      <ItemContent icon={item.icon} name={item.name} />
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    {item.data.map((subItem) => (
                      <MenuItem
                        key={subItem.id}
                        onClick={() => navigate(subItem.href)}
                      >
                        <span
                          className={`text-dark text-xs font-bold normal-case`}
                        >
                          {subItem.name}
                        </span>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              )}
            </div>
          ))}
          <div>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={openDrawerRight}
            >
              <ItemContent
                icon={AiOutlineShoppingCart}
                name={`Cart <br> $${ammount}`}
                className={"text-warning"}
                cartCount={0}
              />
            </div>
            <Drawer
              placement="right"
              size={380}
              open={openRight}
              onClose={closeDrawerRight}
            >
              <CartDrawer closeDrawerRight={closeDrawerRight} />
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddelHeaderSec;
