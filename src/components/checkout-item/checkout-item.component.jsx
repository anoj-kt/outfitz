
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className="checkout-item__container">
            <div className="image__container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckoutItem; 