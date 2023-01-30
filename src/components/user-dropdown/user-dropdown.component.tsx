import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart, setIsUserDropdownOpen } from '../../store/user/user.action';

import { UserDropdownContainer } from './user-dropdown.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useClickoutside } from '../../hooks/useClickOutside.hooks';

const UserDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userMenu = useRef(null);
  console.log(userMenu)

  const currentUser = useSelector(selectCurrentUser);

  const toggleIsUserDropdownOpen = () => dispatch(setIsUserDropdownOpen(false));
  const signOutUser = () => dispatch(signOutStart());
  const goToAuth = () => {
    navigate('/auth');
  };

  useClickoutside(userMenu, toggleIsUserDropdownOpen) // Closes User Dropdown Menu when user clicks outside

  return (
    <UserDropdownContainer ref={userMenu}>
      {currentUser ? (
        <>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>My Account</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={signOutUser}
          >
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={goToAuth}>
            Register
          </Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={goToAuth}>
            Sign In
          </Button>
        </>
      )}
    </UserDropdownContainer>
  );
};

export default UserDropdown;
