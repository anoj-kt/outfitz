import styled from 'styled-components';

import { ReactComponent as UserSVG } from '../../assets/user.svg';

export const UserIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserIcon = styled(UserSVG)`
  height: 32px;
  width: 32px;
  cursor: pointer;
`;
