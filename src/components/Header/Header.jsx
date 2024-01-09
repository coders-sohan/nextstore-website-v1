import MiddelHeaderSec from "./MiddelHeaderSec/MiddelHeaderSec";
import TopHeaderSec from "./TopHeaderSec/TopHeaderSec";

const Header = () => {
  return (
    <>
      <div>
        <div className="bg-gray-100">
          <TopHeaderSec />
        </div>
        <div className="bg-dark-special text-white py-5">
          <MiddelHeaderSec />
        </div>
      </div>
    </>
  );
};

export default Header;
