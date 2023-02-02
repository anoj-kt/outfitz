import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  signOutStart,
  setIsUserDropdownOpen,
} from '../../store/user/user.action';

import {
  UserDropdownContainer,
  UserDropdownLink,
} from './user-dropdown.styles';

import { useClickoutside } from '../../hooks/useClickOutside.hooks';

const UserDropdown = () => {
  const dispatch = useDispatch();
  const userMenu = useRef(null);
  console.log(userMenu);

  const currentUser = useSelector(selectCurrentUser);

  const toggleIsUserDropdownOpen = () => dispatch(setIsUserDropdownOpen(false));
  const signOutUser = () => dispatch(signOutStart());

  useClickoutside(userMenu, toggleIsUserDropdownOpen); // Closes User Dropdown Menu when user clicks outside

  return (
    <UserDropdownContainer ref={userMenu}>
      {currentUser && (
        <>
          <UserDropdownLink to='/'>Account</UserDropdownLink>
          <UserDropdownLink to='/'>My Orders</UserDropdownLink>
          <UserDropdownLink to='/'>My Wishlist</UserDropdownLink>
          <UserDropdownLink as='span' onClick={signOutUser}>
            Sign Out
          </UserDropdownLink>
        </>
      )}
    </UserDropdownContainer>
  );
};

export default UserDropdown;
