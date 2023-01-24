import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import {
  UserDropdownContainer,
  UserDropdownLink,
} from './user-dropdown.styles';

const UserDropdown = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <UserDropdownContainer>
      {currentUser ? (
        <>
          <UserDropdownLink to='/auth'>Account</UserDropdownLink>
          <UserDropdownLink to='/auth'>Sign Out</UserDropdownLink>
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
