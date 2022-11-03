import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    return (
        <div className="cart-dropdown__container">
            <div className="cart-items"></div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;