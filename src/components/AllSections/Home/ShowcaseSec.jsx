import { homeShowcaseProductsData } from "../../../assets/data/homeSecData";
import ShowcaseCarousel from "../../Shared/Carousels/ShowcaseCarousel/ShowcaseCarousel";

const ShowcaseSec = () => {
  return (
    <div className="py-12">
      <ShowcaseCarousel data={homeShowcaseProductsData} />
    </div>
  );
};

export default ShowcaseSec;
