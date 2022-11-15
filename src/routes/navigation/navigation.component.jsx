import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/card-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as Logo } from '../../assets/main-logo.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { 
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink 
} from './navigation.styles';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet/>
        </>
  )
}

export default Navigation