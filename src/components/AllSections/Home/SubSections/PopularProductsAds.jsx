import DynamicImage from "../../../Shared/LazyLoadImage/DynamicImage";

const PopularProductsAds = () => {
  return (
    <div className="h-[410px] rounded-xl">
      <DynamicImage
        src={
          "https://demo-digitic.myshopify.com/cdn/shop/files/cat-product-banner-02.jpg?v=1655700573"
        }
        alt={"Popular Products Ads"}
        dimension={{ height: 263, width: 443 }}
        className="h-[410px] w-[255px] object-cover rounded-xl"
      />
    </div>
  );
};

export default PopularProductsAds;
