import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/card-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as Logo } from '../../assets/main-logo.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { 
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink 
} from './navigation.styles';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

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