import { useState } from "react";
import { Link } from "react-router-dom";
import CustomSelect from "./CustomSelect";
import {
  accountRelatedData,
  informationRelatedData,
} from "../../../assets/data/navbarData";

const TopHeaderSec = () => {
  const [selected, setSelected] = useState({});
  console.log(selected);

  const handleChange = (id, value) => {
    setSelected((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="ns_container py-1">
      <div className="flex md:justify-between justify-center items-center">
        <div className="md:flex items-center gap-5 -mt-0.5 hidden">
          {accountRelatedData.map((item) => (
            <div key={item.id}>
              <Link to={item.href} className="text-xs">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5 -mt-0.5">
          <Link to={"/order-tracking"} className="text-xs">
            Order Tracking
          </Link>
          {informationRelatedData.map((item) => (
            <div key={item.id}>
              <CustomSelect
                label={item.name}
                options={item.data.map((option) => option)}
                onChange={(value) => handleChange(item.id, value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopHeaderSec;
