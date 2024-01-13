import PropTypes from "prop-types";

const SpecialProductCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div>Special Product Card</div>
    </div>
  );
};

SpecialProductCard.propTypes = {
  item: PropTypes.object,
};

export default SpecialProductCard;
