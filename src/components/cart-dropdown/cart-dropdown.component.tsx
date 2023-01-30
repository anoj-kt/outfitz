import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useClickoutside } from '../../hooks/useClickOutside.hooks';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


const CartDropDown = () => {
  const cartDropdownMenu = useRef(null);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  const toggleIsCartDropdownOpen = () => dispatch(setIsCartOpen(false));

  useClickoutside(cartDropdownMenu, toggleIsCartDropdownOpen) // Closes Cart Dropdown Menu when user clicks outside

  return (
    <CartDropdownContainer ref={cartDropdownMenu}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty!</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
