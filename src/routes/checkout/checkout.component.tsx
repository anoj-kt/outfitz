import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutContainer, TotalContainer } from './checkout.styles';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const goToPaymentFormHandler = () => {
    navigate('/payment');
  };

  return (
    <CheckoutContainer>
      <h2>Your Items</h2>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <span>Total: </span>
        <span>{cartTotal}€</span>
      </TotalContainer>
      <Button buttonType={BUTTON_TYPE_CLASSES.primary} onClick={goToPaymentFormHandler}>Pay Now</Button>
    </CheckoutContainer>
  );
};

export default Checkout;
