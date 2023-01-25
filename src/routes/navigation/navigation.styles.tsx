import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme.styles';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  background-color: ${theme.colors.background};
  height: ${theme.navbarHeight};
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0px 10px 16px -16px ${theme.colors.secondaryDark};
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 7.5px;

  svg {
    height: 100%;
    width: fit-content;
  }
`;

const borderAnim = keyframes`
  0% {width: 0%}
  100% {width: 100%}
`;

export const NavLinksCenter = styled.div` //Contains 'Home', 'Shop' and 'About Us'
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & a:hover {
    position: relative;

    ::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      border-bottom: 2px solid ${theme.colors.primary};
      animation: ${borderAnim} .2s linear forwards;
    }
  }
`;

export const NavLinksRight = styled.div` //Contains 'User', 'Cart' and 'WishList'
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const NavLink = styled(Link)`
  padding: 0.25rem 0.3rem;
  margin: 0.75rem 0.75rem;
  cursor: pointer;
  font-weight: 700;
`;
