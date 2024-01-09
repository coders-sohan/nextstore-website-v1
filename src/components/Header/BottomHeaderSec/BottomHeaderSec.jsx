import { IoIosArrowDown } from "react-icons/io";
import menuSvg from "../../../assets/images/menu.svg";

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
        <div>Header Sec</div>
      </div>
    </div>
  );
};

export default BottomHeaderSec;
