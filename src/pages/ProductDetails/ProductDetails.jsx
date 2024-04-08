import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/services/products/productsService";

const ProductDetails = () => {
  const { id } = useParams();

  // get single product by id
  const { data: productData, isLoading } = useGetProductByIdQuery(id);
  const product = productData?.data;

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img
            src={
              product?.images?.length > 0
                ? product?.images[0]?.url
                : "https://via.placeholder.com/150"
            }
            className="w-96 h-96 mx-auto"
            alt={product?.title}
          />
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: product?.description }}></p>
          <p>{product?.price}</p>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
