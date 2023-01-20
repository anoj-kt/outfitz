import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';

import {
  UserCircleContainer,
  UserCircleWithImage,
  UserCircleWithInitial,
} from './user-circle.styles';

const UserCircleIcon = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentUserImage = currentUser?.photoURL;
  const currentUserInitial = currentUser?.displayName[0];

  return (
    <UserCircleContainer>
      {currentUserImage ? (
        <UserCircleWithImage src={currentUserImage} />
      ) : (
        <UserCircleWithInitial>{currentUserInitial}</UserCircleWithInitial>
      )}
    </UserCircleContainer>
  );
};

export default UserCircleIcon;
