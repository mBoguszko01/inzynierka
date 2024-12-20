import Coupon from "./Coupon";
const DialogCoupons = (props) => {
  const {
    suggestedCoupons,
    allCoupons,
    isDialogOpen,
    handleClose,
    shoppingListId,
  } = props;
  return (
    <div className="dialog-background fade-in">
      <dialog
        className="dialog dialog-coupons"
        open={isDialogOpen}
        style={{ width: "50%" }}
      >
        <div className="dialog-top-bar" style={{ justifyContent: "flex-end" }}>
          <button onClick={handleClose} className="close-dialog-btn">
            X
          </button>
        </div>
      
        <span style={{display: "block"}}>Suggested Coupons</span>
        {suggestedCoupons.length !== 0 &&
          suggestedCoupons.map((coupon, index) => {
            return <Coupon coupon={coupon} shoppingListId={shoppingListId} />;
          })}
        {suggestedCoupons.length === 0 && (
          <span className="coupon-no-coupon-info">There are no suggested coupons</span>
        )}
        <span>Other Coupons</span>
        {allCoupons.length !== 0 && allCoupons.map((coupon, index) => {
          return <Coupon coupon={coupon} shoppingListId={shoppingListId} />;
        })}
        {allCoupons.length === 0 && (
          <span className="coupon-no-coupon-info">There are no coupons</span>
        )}
      </dialog>
    </div>
  );
};
export default DialogCoupons;
