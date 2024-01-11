import BannerCarousel from "../../Shared/Carousels/BannerCarousel";

const BannerSec = () => {
  return (
    <div>
      <div className="flex justify-center gap-5">
        <div className="w-1/2 ">
          <BannerCarousel />
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2 gap-5">
            <div className="h-56 bg-green-500 w-full">item 1</div>
            <div className="h-56 bg-yellow-500 w-full">item 2</div>
            <div className="h-56 bg-red-500 w-full">item 3</div>
            <div className="h-56 bg-purple-500 w-full">item 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSec;
