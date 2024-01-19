import { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="ns_container py-12">
      <div>Shop</div>
    </div>
  );
};

export default Shop;
