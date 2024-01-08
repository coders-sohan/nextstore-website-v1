import { useState } from "react";
import { topHeaderSecData } from "../../../assets/data/navbarData";
import { Link } from "react-router-dom";
import CustomSelect from "./CustomSelect";

const TopHeaderSec = () => {
  const [selected, setSelected] = useState({});
  console.log(selected);

  const handleChange = (id, value) => {
    setSelected((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="ns_container py-1">
      <div className="md:flex justify-between items-center hidden">
        {topHeaderSecData.map((section) => (
          <div key={section.id} className="flex gap-5 items-center">
            {section.dataList.map((item) => (
              <div key={item.id} className="-mt-0.5">
                {item.data ? (
                  <CustomSelect
                    label={item.name}
                    options={item.data.map((option) => option)}
                    onChange={(value) => handleChange(item.id, value)}
                  />
                ) : (
                  <Link to={item.href} className="text-xs -mt-0.5">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHeaderSec;
