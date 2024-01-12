import { productsData } from "../../../assets/data/productsData";
import ProductsCarousel from "../../Shared/Carousels/ProductsCarousel/ProductsCarousel";

const FeaturedSec = () => {
  return (
    <div className="py-12">
      <div className="mb-10">
        <h3 className="text-dark-muted font-bold text-3xl font-poppins">
          Featured Collection
        </h3>
      </div>
      <div>
        <ProductsCarousel data={productsData} />
      </div>
    </div>
  );
};

export default FeaturedSec;
