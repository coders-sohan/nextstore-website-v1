import { homeCategoriesTabData } from "../../../../assets/data/homeSecData";
import DynamicImage from "../../../Shared/LazyLoadImage/DynamicImage";

const CategoriesTab = () => {
  return (
    <div className="h-full py-3 bg-white rounded-xl">
      {homeCategoriesTabData.map((item) => (
        <div key={item.id} className="flex flex-col">
          <button
            onClick={() => console.log("category clicked")}
            className="flex items-center gap-5 hover:bg-gray-special px-3 py-2 transition-all ease-linear duration-200"
          >
            <DynamicImage
              src={item.imgUrl}
              alt={item.name}
              dimension={{ height: 50, width: 50 }}
              className="h-12 w-auto"
            />
            <h3 className="text-sm font-semibold text-dark-muted">
              {item.name}
            </h3>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoriesTab;
