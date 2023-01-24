import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import {
  UserDropdownContainer,
  UserDropdownLink,
} from './user-dropdown.styles';

const UserDropdown = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <UserDropdownContainer>
      {currentUser ? (
        <>
          <UserDropdownLink to='/auth'>Account</UserDropdownLink>
          <UserDropdownLink as='span' onClick={signOutUser}>Sign Out</UserDropdownLink>
        </>
      ) : (
        <>
          <UserDropdownLink to='/auth'>Register</UserDropdownLink>
          <UserDropdownLink to='/auth'>Sign In</UserDropdownLink>
        </>
      )}
    </UserDropdownContainer>
  );
};

export default UserDropdown;
