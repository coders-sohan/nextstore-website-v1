import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import smoothScrollToTop from "../SmoothScroll/SmoothScroll";
import DynamicImage from "../LazyLoadImage/DynamicImage";

const BlogCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Link
      onClick={smoothScrollToTop}
      to={"/"}
      className="flex flex-col bg-white overflow-hidden rounded-xl group shadow-md my-2"
    >
      <DynamicImage
        src={item.thumbnail}
        alt={item.title}
        className={
          "rounded-t-xl w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-200 ease-linear"
        }
        dimension={{
          width: 405,
          height: 284,
        }}
      />
      <div className="flex flex-col gap-3 p-5">
        <span className="text-secondary text-sm">
          {moment(item.createdAt).format("MMM DD, YYYY")}
        </span>
        <h3 className="text-xl font-bold text-dark-special group-hover:underline underline-offset-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-dark text-justify">
          {item.description}
        </p>
        <div className="mt-3">
          <button
            onClick={() => navigate("/")}
            className="bg-dark group-hover:bg-tertiary text-white px-5 py-2 uppercase text-sm font-poppins font-semibold 
            inline-block rounded-full transition-all duration-200 ease-linear"
          >
            Read more
          </button>
        </div>
      </div>
    </Link>
  );
};

BlogCard.propTypes = {
  item: PropTypes.object,
};

export default BlogCard;
