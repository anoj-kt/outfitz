import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as Logo } from '../../assets/main-logo.svg';

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinksCenter,
  NavLinksRight
} from './navigation.styles';

import UserCircle from '../../components/user-circle/user-circle.component';
import User from '../../components/user-icon/user-icon.component';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>
        <NavLinksCenter>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/shop'>SHOP</NavLink>
          <NavLink to='/'>ABOUT US</NavLink>
        </NavLinksCenter>
        <NavLinksRight>
          {currentUser ? (
            <UserCircle />
          ) : (
            <User />
          )}
          <CartIcon />
        </NavLinksRight>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
