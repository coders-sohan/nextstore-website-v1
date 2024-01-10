import TopFooter from "./TopFooter/TopFooter";
import MiddleFooter from "./MiddleFooter/MiddleFooter";
import BottomFooter from "./BottomFooter/BottomFooter";

const Footer = () => {
  return (
    <>
      <div className="bg-dark-special text-white py-8 border-b border-gray-dark">
        <TopFooter />
      </div>
      <div className="bg-dark-special text-white py-16 border-b border-gray-dark">
        <MiddleFooter />
      </div>
      <div className="bg-dark-special text-white py-4">
        <BottomFooter />
      </div>
    </>
  );
};

export default Footer;
