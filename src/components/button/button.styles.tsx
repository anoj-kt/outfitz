import styled from 'styled-components';
import { theme } from '../../styles/theme.styles';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 2rem;
  margin: 0.25rem 0;
  font-size: 1rem;
  background-color: ${theme.colors.secondaryDark};
  border-radius: ${theme.borderRadius.button};
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${theme.colors.secondary};
    /* color: ${theme.colors.secondaryDark}; */
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const PrimaryColorButton = styled(BaseButton)`
  background-color: ${theme.colors.primary};
  color: white;

  &:hover {
    background-color: ${theme.colors.primaryDark};
    color: white;
    border: none;
  }

  &:active {
    background-color: ${theme.colors.primary};
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;

  &:hover {
    background-color: ${theme.colors.secondary};
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  height: 30px;
  width: 30px;
`;