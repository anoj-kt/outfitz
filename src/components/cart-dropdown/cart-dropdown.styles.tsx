import styled from 'styled-components';
import { theme } from '../../styles/theme.styles';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 2px solid ${theme.colors.secondaryDark};
  border-radius: ${theme.borderRadius.general};
  background-color: ${theme.colors.background};
  top: 52.5px;
  right: 0;
  z-index: 5;

  & ::-webkit-scrollbar {
    width: 5px;
  }

  & ::-webkit-scrollbar-track {
    background: ${theme.colors.grey};
    border-radius: 5px;
  }

  & ::-webkit-scrollbar-thumb {
    background: ${theme.colors.secondaryLight};
    border-radius: 5px;
  }

  & ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.secondary};
  }

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0.1rem;
  border-top: 2px solid ${theme.colors.grey};

  & :last-child {
    font-weight: 500;
    color: ${theme.colors.primaryDark};
  }
`;
