import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import smoothScrollToTop from "../SmoothScroll/SmoothScroll";

const CartDrawer = ({ closeDrawerRight }) => {
  return (
    <>
      <div className="text-center pt-10 px-5 text-dark relative">
        <div className="absolute top-2.5 left-2.5">
          <IoMdCloseCircleOutline
            className="w-7 h-7 cursor-pointer text-secondary"
            onClick={closeDrawerRight}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p>Your cart is currently empty.</p>
          </div>
          <div>
            <Link
              onClick={smoothScrollToTop}
              to={"/shop"}
              className="hover:text-primary underline transition-all ease-linear duration-150"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

CartDrawer.propTypes = {
  closeDrawerRight: PropTypes.func,
};

export default CartDrawer;
