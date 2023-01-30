import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme.styles';
import { Link } from 'react-router-dom';

const borderAnim = keyframes` //Animation for the line under navlinks when hovered
  0% {width: 0%}
  100% {width: 100%}
`;

export const UserDropdownContainer = styled.div`
  position: absolute;
  min-width: 9rem;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.25rem;
  border: 2px solid ${theme.colors.secondaryDark};
  border-radius: ${theme.borderRadius.general};
  background-color: ${theme.colors.background};
  top: 52.5px;
  right: 0;
  z-index: 5;
`;

export const UserDropdownLink = styled(Link)`
  font-weight: 700;
  text-transform: uppercase;
  /* background-color: white; */
  width: auto;
  padding: 0.25rem 0.3rem;
  margin: 0.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;

  &:hover {
    position: relative;

    ::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      border-bottom: 2px solid ${theme.colors.primary};
      animation: ${borderAnim} 0.2s linear forwards;
    }
  }
`;
