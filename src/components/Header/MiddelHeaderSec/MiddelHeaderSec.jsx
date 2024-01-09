import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ItemContent from "../../Shared/ItemContent/ItemContent";
import { iconMenuData } from "../../../assets/data/navbarData";

const MiddelHeaderSec = () => {
  const navigate = useNavigate();
  let ammount = "0.00";

  return (
    <div className="ns_container">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="-mt-0.5">
          <Link to={"/"} className="text-3xl font-extrabold tracking-wider">
            <span>Nextshop</span>
            <span className="text-warning">.</span>
          </Link>
        </div>
        {/* search bar */}
        <div className="w-2/6">
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
        <div className="w-2/6 flex items-center justify-end gap-6 -mt-0.5">
          {iconMenuData.map((item) => (
            <div key={item.id}>
              {item.href && (
                <Link to={item.href} className="flex items-center gap-3">
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
                        color="lightBlue"
                        ripple="light"
                        onClick={() => navigate(subItem.href)}
                      >
                        <ItemContent
                          name={subItem.name}
                          className={"text-dark"}
                        />
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              )}
            </div>
          ))}
          <div>
            <Link to={"/cart"} className="flex items-center gap-3">
              <ItemContent
                icon={AiOutlineShoppingCart}
                name={`Cart <br> $${ammount}`}
                className={"text-warning"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddelHeaderSec;
