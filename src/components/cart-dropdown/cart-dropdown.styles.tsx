import styled from "styled-components";
import { theme } from '../../styles/theme.styles';

import { 
  BaseButton,
  GoogleSignInButton, 
  InvertedButton
 } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 2px solid ${theme.colors.secondaryDark};
  border-radius: ${theme.borderRadius.general};
  background-color: ${theme.colors.background};
  top: 52.5px;
  right: 0;
  z-index: 5;

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


//   button {
//     margin-top: auto;
//   }
// }
