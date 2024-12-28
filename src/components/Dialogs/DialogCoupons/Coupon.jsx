import { useDispatch } from "react-redux";
import { addShoppingListItem } from "../../../store/shoppingLists";
import { fetchCoupons } from "../../../store/coupons";
import "./Coupon.css";

const Coupon = (props) => {
  const dispatch = useDispatch();
  const { coupon, shoppingListId } = props;
  const handleAddToList = () => {
    const newItem = {
      name: coupon.name,
      quantity: 1,
      unit: "",
      category: coupon.category,
    };
    dispatch(addShoppingListItem({shoppingListId, item:newItem}));
    dispatch(fetchCoupons(shoppingListId));
  };
  return (
    <div className="coupon-container">
      <img src={`${coupon.category.toLowerCase()}.svg`} width={"30px"} />
      <div className="coupon-name-container">
        <span>{coupon.name}</span>
        <span style={{ color: "#b4b4b4", fontSize: "0.8em" }}>
          {coupon.manufacturer} {coupon.store}
        </span>
      </div>
      <div style={{ display: "flex", width: "35%" }}>
        <div className="coupon-prices">
          <span className="coupon-price-before">
            {coupon.price_before_discount}
          </span>
          <span className="coupon-price-after">
            {coupon.price_after_discount}
          </span>
        </div>
        <button className="coupon-add-btn" onClick={handleAddToList}>
          + Add to list
        </button>
      </div>
    </div>
  );
};
export default Coupon;
