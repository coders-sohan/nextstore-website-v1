import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useGetProductBySlugQuery } from "../../redux/services/products/productsService";
import ScrollableProductImages from "../../components/AllSections/ProductDetails/ScrollableProductImages/ScrollableProductImages";
import StickyProductInfo from "../../components/AllSections/ProductDetails/StickyProductInfo/StickyProductInfo";
import FeaturedSec from "../../components/AllSections/Home/FeaturedSec";

const ProductDetails = () => {
  const { slug } = useParams();

  // state for scrolling
  const [isScrollingLeft, setIsScrollingLeft] = useState(false);
  const leftSectionRef = useRef(null);

  const handleLeftSectionScroll = () => {
    setIsScrollingLeft(leftSectionRef.current.scrollTop > 0);
  };

  // get single product by id
  const { data: productData, isLoading } = useGetProductBySlugQuery(slug);
  const product = productData?.data;

  return (
    <>
      {isLoading ? (
        <Helmet>
          <title>Loading...</title>
        </Helmet>
      ) : (
        <Helmet>
          <title>{product?.title}</title>
          {/* meta infos */}
          <meta name="description" content={product?.description} />
          <meta
            property="og:image"
            content={
              product?.images?.length > 0
                ? product?.images[0]?.url
                : "https://via.placeholder.com/150"
            }
          />
        </Helmet>
      )}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="ns_container">
          <div className="flex flex-row pt-10 gap-14">
            <div
              ref={leftSectionRef}
              className={`w-full h-full overflow-y-scroll md:w-1/2 transition-all duration-300 ease-in-out ${
                isScrollingLeft ? "overflow-hidden" : ""
              }`}
              onScroll={handleLeftSectionScroll}
            >
              <ScrollableProductImages images={product.images} />
            </div>
            <div
              className={`w-full h-full sticky top-10 right-0 p-5 md:w-1/2 bg-white border shadow-md transition-all duration-300 
              ease-in-out ${window.innerWidth >= 768 ? "fixed" : ""}`}
            >
              <StickyProductInfo product={product} />
            </div>
          </div>
          <div className="py-10">
            <h2 className="text-2xl font-bold text-center mt-8 mb-4">
              Featured Products
            </h2>
            <FeaturedSec />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
