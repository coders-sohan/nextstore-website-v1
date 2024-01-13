import BannerSec from "../../components/AllSections/Home/BannerSec";
import CategoriesSec from "../../components/AllSections/Home/CategoriesSec";
import FeaturedSec from "../../components/AllSections/Home/FeaturedSec";
import ServiceTypeSec from "../../components/AllSections/Home/ServiceTypeSec";
import ShowcaseSec from "../../components/AllSections/Home/ShowcaseSec";

const Home = () => {
  return (
    <div>
      <div className="ns_container py-8 sm:py-12">
        <BannerSec />
      </div>
      <div className="ns_container py-3 sm:py-5 bg-gray-special">
        <ServiceTypeSec />
        <CategoriesSec />
        <FeaturedSec />
        <ShowcaseSec />
      </div>
    </div>
  );
};

export default Home;
