import styled from 'styled-components';
import { theme } from '../../styles/theme.styles';

export const UserCircleContainer = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const UserCircleWithImage = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  outline: 1px solid black;
  cursor: pointer;
`;

export const UserCircleWithInitial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  outline: 1px solid black;
  background-color: ${theme.colors.tertiaryLight};
  color: white;
  font-weight: 700;
  cursor: pointer;
`;