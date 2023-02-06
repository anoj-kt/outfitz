import { FC, memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  MinusIcon,
  PlusIcon,
  Price,
  ContentContainer,
  TrashIcon,
} from './checkout-item.styles';

import { CartItem } from '../../store/cart/cart.types';

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <ContentContainer>
        <h4>{name}</h4>
        <Quantity>
          <span>Qty: {quantity}</span>
          <MinusIcon onClick={removeItemHandler} />
          <PlusIcon onClick={addItemHandler} />
        </Quantity>
        <Price>{price}€</Price>
      </ContentContainer>
      <TrashIcon onClick={clearItemHandler} />
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
