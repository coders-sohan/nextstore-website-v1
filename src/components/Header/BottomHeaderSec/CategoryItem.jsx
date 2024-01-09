import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const CategoryItem = forwardRef(({ item }, ref) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <div ref={ref}>
      {item.data && (
        <Menu
          placement="right-start"
          open={openMenu}
          handler={setOpenMenu}
          allowHover
          offset={15}
        >
          <MenuHandler className="flex items-center justify-between">
            <MenuItem>
              {item.name}
              <ChevronRightIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </MenuHandler>
          <MenuList>
            {item.data.map((subItem) => (
              <>
                {subItem.subData ? (
                  <>
                    <Menu
                      placement="right-start"
                      open={openSubMenu}
                      handler={setOpenSubMenu}
                      allowHover
                      offset={15}
                    >
                      <MenuHandler className="flex items-center justify-between">
                        <MenuItem>
                          {subItem.name}
                          <ChevronRightIcon
                            strokeWidth={2.5}
                            className={`h-3.5 w-3.5 transition-transform ${
                              openSubMenu ? "rotate-180" : ""
                            }`}
                          />
                        </MenuItem>
                      </MenuHandler>
                      <MenuList>
                        {subItem.subData.map((subSubItem) => (
                          <MenuItem key={subSubItem.id}>
                            {subSubItem.name}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  </>
                ) : (
                  <MenuItem key={subItem.id}>{subItem.name}</MenuItem>
                )}
              </>
            ))}
          </MenuList>
        </Menu>
      )}
      {item.href && <MenuItem>{item.name}</MenuItem>}
    </div>
  );
});

CategoryItem.displayName = "CategoryItem";

CategoryItem.propTypes = {
  item: PropTypes.object,
};

export default CategoryItem;
