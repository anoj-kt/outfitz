import { useNavigate } from 'react-router-dom';

import { UserIcon, UserIconContainer } from './user-icon.styles';

const User = () => {
  const navigate = useNavigate();

  const goToAuth = () => navigate('/auth');

  return (
    <UserIconContainer>
      <UserIcon onClick={goToAuth} />
    </UserIconContainer>
  );
};

export default User;
