import Coupon from "./Coupon";
const DialogCoupons = (props) => {
  const { suggestedCoupons, allCoupons, isDialogOpen, handleClose } = props;
  console.log(suggestedCoupons);
  return (
    <div className="dialog-background fade-in">
      <dialog className="dialog dialog-coupons" open={isDialogOpen} style={{ width: "50%" }}>
        <div className="dialog-top-bar" style={{justifyContent:"flex-end"}}>
          <button onClick={handleClose} className="close-dialog-btn">
            X
          </button>
        </div>
        <span>Suggested Coupons</span>
        {suggestedCoupons.map((coupon, index) => {
          return <Coupon coupon={coupon} />;
        })}
        <span>Other Coupons</span>
        {allCoupons.map((coupon, index) => {
          return <Coupon coupon={coupon} />;
        })}
      </dialog>

    </div>
  );
};
export default DialogCoupons;
