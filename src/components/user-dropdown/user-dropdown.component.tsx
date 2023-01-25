import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import {
  UserDropdownContainer,
  UserDropdownLink,
} from './user-dropdown.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const UserDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);

  const signOutUser = () => dispatch(signOutStart());

  const goToAuth = () => {
    navigate('/auth');
  };

  return (
    <UserDropdownContainer>
      {currentUser ? (
        <>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={goToAuth}
          ></Button>
          <UserDropdownLink to='/auth'>Account</UserDropdownLink>
          <UserDropdownLink as='span' onClick={signOutUser}>
            Sign Out
          </UserDropdownLink>
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
