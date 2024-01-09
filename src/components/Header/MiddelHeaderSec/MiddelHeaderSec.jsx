import { Link } from "react-router-dom";
import { primaryMenuData } from "../../../assets/data/navbarData";
import { FiSearch } from "react-icons/fi";

const MiddelHeaderSec = () => {
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
              className="border border-gray-300 px-3 py-1 focus:outline-none text-dark-muted w-full text-sm rounded-s"
              placeholder="Search for products..."
              aria-level={"Search for products..."}
              onChange={(e) => console.log(e.target.value)}
            />
            <span className="px-3 py-1">
              <FiSearch className="text-white text-xl" />
            </span>
          </div>
        </div>
        {/* primary menu */}
        <div className="flex items-center gap-5 -mt-0.5">
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

export default MiddelHeaderSec;
