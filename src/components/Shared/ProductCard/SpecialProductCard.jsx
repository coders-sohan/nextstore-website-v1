import PropTypes from "prop-types";

const SpecialProductCard = ({ item }) => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <div>Special Product Card {item.id}</div>
    </div>
  );
};

SpecialProductCard.propTypes = {
  item: PropTypes.object,
};

export default SpecialProductCard;
