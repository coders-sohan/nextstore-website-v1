import BannerSec from "../../components/AllSections/Home/BannerSec";
import CategoriesSec from "../../components/AllSections/Home/CategoriesSec";
import ServiceTypeSec from "../../components/AllSections/Home/ServiceTypeSec";

const Home = () => {
  return (
    <div>
      <div className="ns_container py-8 sm:py-12">
        <BannerSec />
      </div>
      <div className="ns_container py-3 sm:py-5 bg-gray-special">
        <ServiceTypeSec />
        <CategoriesSec />
      </div>
    </div>
  );
};

export default Home;
