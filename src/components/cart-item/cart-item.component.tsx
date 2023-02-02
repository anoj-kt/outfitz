import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartItemContainer, ItemDetails, TrashIcon } from './cart-item.styles';

import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItemFromCart } from '../../store/cart/cart.action';

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>{price}€</span>
        <span>Qty: {quantity}</span>
      </ItemDetails>
      <TrashIcon onClick={clearItemHandler}/>
    </CartItemContainer>
  );
});

export default CartItem;
