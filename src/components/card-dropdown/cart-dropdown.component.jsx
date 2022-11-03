import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown__container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem value={item.id} cartItem={item} />
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;