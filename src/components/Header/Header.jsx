import TopHeaderSec from "./TopHeaderSec/TopHeaderSec";
import MiddelHeaderSec from "./MiddelHeaderSec/MiddelHeaderSec";
import BottomHeaderSec from "./BottomHeaderSec/BottomHeaderSec";

const Header = () => {
  return (
    <>
      <div>
        <div className="bg-gray">
          <TopHeaderSec />
        </div>
        <div className="bg-dark-special text-white py-5 border-b border-gray-dark">
          <MiddelHeaderSec />
        </div>
        <div className="bg-dark-special text-white py-3">
          <BottomHeaderSec />
        </div>
      </div>
    </>
  );
};

export default Header;
