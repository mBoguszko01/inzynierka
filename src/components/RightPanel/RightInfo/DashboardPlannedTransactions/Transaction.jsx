import { Icon as IconifyIcon } from "@iconify/react";


const Transaction = (props) => {
  const name = props.children;
  const { paymentDate, price, icon } = props;

  console.log(icon);
  return (
    <div className="transaction-container">
      <IconifyIcon icon={icon} width={32} height={32} />
      <div className="transaction-text-info-container">
        <span className="section-header">{name}</span>
        <div className="transaction-date-and-price">
          <span className="section-small-text">Payment {paymentDate}</span>
          <span className="section-small-text expense">-{price}$</span>
        </div>
      </div>
    </div>
  );
};
export default Transaction;
