import { homeCategoriesTabData } from "../../../../assets/data/homeSecData";
import DynamicImage from "../../../Shared/LazyLoadImage/DynamicImage";

const CategoriesTab = () => {
  return (
    <div className="h-auto sm:h-[410px] shadow-md py-1 sm:py-3 bg-white rounded sm:rounded-xl flex sm:justify-start justify-between sm:flex-col flex-row">
      {homeCategoriesTabData.map((item) => (
        <div key={item.id} className="flex flex-col">
          <button
            onClick={() => console.log("category clicked")}
            className="flex items-center gap-2 sm:gap-5 hover:bg-gray-special mx-1 px-2 sm:px-3 py-2 transition-all ease-linear duration-200"
          >
            <DynamicImage
              src={item.imgUrl}
              alt={item.name}
              dimension={{ height: 50, width: 50 }}
              className="h-8 sm:h-12 w-auto"
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
