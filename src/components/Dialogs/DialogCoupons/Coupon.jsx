import "./Coupon.css";

const Coupon = (props) => {
  const { coupon } = props;
  console.log(coupon.category.toLowerCase());
  const couponCategoryImgSrc = 1;
  return (
    <div className="coupon-container">
      <img src={`${coupon.category.toLowerCase()}.svg`} width={"30px"} />
      <div className="coupon-name-container">
        <span>{coupon.name}</span>
        <span style={{ color: "#b4b4b4", fontSize: "0.8em" }}>
          {coupon.manufacturer}
        </span>
      </div>
      <div style={{display:"flex", width:"35%"}}>
        <div className="coupon-prices">
          <span className="coupon-price-before">
            {coupon.price_before_discount}
          </span>
          <span className="coupon-price-after">
            {coupon.price_after_discount}
          </span>
        </div>
        <button className="coupon-add-btn">+ Add to list</button>
      </div>
    </div>
  );
};
export default Coupon;
