import { useSelector, useDispatch } from 'react-redux';

import { selectIsUserDropdownOpen } from '../../store/user/user.selector';
import { setIsUserDropdownOpen } from '../../store/user/user.action';

import { UserIcon, UserIconContainer } from './user-icon.styles';

import UserDropdown from '../user-dropdown/user-dropdown.component';

const User = () => {
  const dispatch = useDispatch();

  const isUserDropdownOpen = useSelector(selectIsUserDropdownOpen);

  const toggleIsUserDropdownOpen = () =>
    dispatch(setIsUserDropdownOpen(!isUserDropdownOpen));

  return (
    <UserIconContainer onClick={toggleIsUserDropdownOpen}>
      <UserIcon />
      {isUserDropdownOpen && <UserDropdown/>}
    </UserIconContainer>
  );
};

export default User;
