import './ShoppingListItem.css';
const ShoppingListItem = (props) => {
    const {itemName, itemQuantity,itemCategory} = props;
    return <>
        <div className='shopping-list-item-container'>
            <input type='radio'></input>
            <span>{itemName}</span>
            {itemQuantity > 0 && <span>{itemQuantity}</span>}
        </div>
    </>
}
export default ShoppingListItem;