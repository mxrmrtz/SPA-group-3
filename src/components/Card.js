const Card = ({ itemData }) => {
    // console.log("this is card", itemData);
    const { brand, image } = itemData;
    return (
        <div className="cardStyle">
            <img className="imgStyle" src={image} />
            <h3>{itemData.productName}</h3>
            <p>{itemData.price} {itemData.unit}</p>
            <p>{brand}</p>
        </div>
    )
}
export default Card;