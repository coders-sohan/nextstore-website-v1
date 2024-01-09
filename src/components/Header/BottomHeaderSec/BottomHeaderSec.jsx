import { primaryMenuData } from "../../../assets/data/navbarData";
import { IoIosArrowDown } from "react-icons/io";
import menuSvg from "../../../assets/images/menu.svg";
import { Link } from "react-router-dom";

const BottomHeaderSec = () => {
  return (
    <div className="ns_container">
      <div className="flex items-center gap-5">
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
        <div className="flex items-center gap-12">
          {primaryMenuData.map((item) => (
            <div key={item.id}>
              <Link to={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomHeaderSec;
