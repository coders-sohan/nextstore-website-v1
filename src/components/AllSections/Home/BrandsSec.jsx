import Marquee from "react-fast-marquee";
import DynamicImage from "../../Shared/LazyLoadImage/DynamicImage";
import { homeBrandsData } from "../../../assets/data/homeSecData";

const BrandsSec = () => {
  return (
    <div className="bg-white py-2 sm:py-3 px-1 rounded-xl">
      <Marquee>
        {homeBrandsData.map((brand) => (
          <DynamicImage
            key={brand.id}
            src={brand.imageUrl}
            alt={brand.name}
            dimension={{
              width: 150,
              height: 150,
            }}
            className="w-20 sm:w-32 h-auto mx-10"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default BrandsSec;
