import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { 
    ShoppingIcon, 
    CartIconContainer, 
    ItemCount 
} from './cart-icon.styles';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer>
            <ShoppingIcon onClick={toggleIsCartOpen}/>
            {cartCount > 0 
            ? <ItemCount>{cartCount}</ItemCount>
            : null
            }
            {isCartOpen && <CartDropDown/>}
        </CartIconContainer>
    )
}

export default CartIcon;