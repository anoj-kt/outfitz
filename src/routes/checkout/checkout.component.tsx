import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
    CheckoutContainer,
    Total,
  } from './checkout.styles';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <h2>Your Items</h2>
                {
                    cartItems.map((cartItem) => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    ))
                }
            <Total>Total: {cartTotal}€</Total>
            <PaymentForm/>
        </CheckoutContainer>
    )
}

export default Checkout;