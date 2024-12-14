const Shop = (props) => {
    const {name, couponsAmount, showDialog} = props;

    return <div className="shop-container" onClick={()=>showDialog(name)}>
        {couponsAmount > 0 && <div className="coupons-amount">{couponsAmount}</div>}
        <img src={`${name}_logo.png`} className={`shop-logo ${couponsAmount != 0 ? '' : 'shop-logo-grey'}`} alt={`${name} logo`}></img>
        <span>{name}</span>
    </div>

}
export default Shop;