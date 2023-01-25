import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as Logo } from '../../assets/main-logo.svg';

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinksCenter,
  NavLinksRight,
  NavigationBar,
} from './navigation.styles';

import UserCircle from '../../components/user-circle/user-circle.component';
import User from '../../components/user-icon/user-icon.component';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <NavigationBar>
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
            {currentUser ? <UserCircle /> : <User />}
            <CartIcon />
          </NavLinksRight>
        </NavigationContainer>
      </NavigationBar>
      <Outlet />
    </>
  );
};

export default Navigation;
