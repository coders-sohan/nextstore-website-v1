import TopHeaderSec from "./TopHeaderSec/TopHeaderSec";
import MiddelHeaderSec from "./MiddelHeaderSec/MiddelHeaderSec";
import BottomHeaderSec from "./BottomHeaderSec/BottomHeaderSec";

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
        <div>
          <BottomHeaderSec />
        </div>
      </div>
    </>
  );
};

export default Header;
