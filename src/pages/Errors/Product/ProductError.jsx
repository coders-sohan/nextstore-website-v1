import { Link, useNavigate } from "react-router-dom";

const ProductError = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center h-[70vh]">
        <div className="text-center">
          <div className="mb-10">
            <h1>Product not found</h1>
          </div>
          {/* link to go home page */}
          <div className="flex gap-10">
            <button onClick={() => navigate(-2)}>Go back</button>
            <Link to="/">
              <button>Go to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductError;
