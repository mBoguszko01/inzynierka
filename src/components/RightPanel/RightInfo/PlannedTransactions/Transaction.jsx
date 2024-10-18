const Transaction = (props) => {
  const name = props.children;
  const { paymentDate, price, imgSrc } = props;
  return (
    <div className="transaction-container">
      <img src={imgSrc} alt="profile picture" width={25} />
      <div className="transaction-text-info-container">
        <span className="section-header">{name}</span>
        <div className="transaction-date-and-price">
          <span className='section-small-text'>Payment {paymentDate}</span>
          <span className='section-small-text expense'>{price}</span>
        </div>
      </div>
    </div>
  );
};
export default Transaction;
