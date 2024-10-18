import Asset from "./Asset";
const TotalAssets = () => {
    return  <div className='assets-container'>
    <span className='section-header'>Total Assets</span>
    <span className='asset-balance section-large-text' style={{marginBottom: 40}}>+12,300$</span>
        <Asset imgSrc={'/ING_icon.jpg'} balance={'+10,300$'}>Ing</Asset>
        <Asset imgSrc={'/Revolut_icon.jpg'} balance={'+1000$'}>Revlout</Asset>
        <Asset imgSrc={'/Cash_icon.jpg'} balance={'+500$'}>Cash</Asset>
    <div className='separator'></div>
    <div className='show-more'>
            <button target="_blank">Show more</button>
    </div>
</div>
}
export default TotalAssets;