import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser, selectIsUserDropdownOpen } from '../../store/user/user.selector';
import UserDropdown from '../user-dropdown/user-dropdown.component';

import {
  UserCircleContainer,
  UserCircleWithImage,
  UserCircleWithInitial,
} from './user-circle.styles';

const UserCircleIcon = () => {
  const currentUser = useSelector(selectCurrentUser);
  const drop = useSelector(selectIsUserDropdownOpen);
  const currentUserImage = currentUser?.photoURL;
  const currentUserInitial = currentUser?.displayName[0];

  return (
    <UserCircleContainer>
      {currentUserImage ? (
        <UserCircleWithImage src={currentUserImage} />
      ) : (
        <UserCircleWithInitial>{currentUserInitial}</UserCircleWithInitial>
      )}
      {
        drop && <UserDropdown />
      }
    </UserCircleContainer>
  );
};

export default UserCircleIcon;
