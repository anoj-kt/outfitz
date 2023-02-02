import { useSelector, useDispatch } from 'react-redux';

import {
  selectCurrentUser,
  selectIsUserDropdownOpen,
} from '../../store/user/user.selector';
import { setIsUserDropdownOpen } from '../../store/user/user.action';

import UserDropdown from '../user-dropdown/user-dropdown.component';

import {
  UserCircleContainer,
  UserCircleWithImage,
  UserCircleWithInitial,
  PointerTriangle
} from './user-circle.styles';

const UserCircleIcon = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isUserDropdownOpen = useSelector(selectIsUserDropdownOpen);
  const currentUserImage = currentUser?.photoURL;
  const currentUserInitial = currentUser?.displayName[0];

  const toggleIsUserDropdownOpen = () =>
    dispatch(setIsUserDropdownOpen(!isUserDropdownOpen));

  return (
    <UserCircleContainer>
      {currentUserImage ? (
        <UserCircleWithImage
          src={currentUserImage}
          onClick={toggleIsUserDropdownOpen}
        />
      ) : (
        <UserCircleWithInitial onClick={toggleIsUserDropdownOpen}>
          {currentUserInitial}
        </UserCircleWithInitial>
      )}
      {isUserDropdownOpen && <><PointerTriangle /><UserDropdown/></>}
    </UserCircleContainer>
  );
};

export default UserCircleIcon;
