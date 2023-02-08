import styled from 'styled-components';
import { theme } from '../../styles/theme.styles';

export const FooterContainer = styled.div`
  width: 100%;
  height: 10rem;
  margin: 0;
  color: ${theme.colors.background};
  position: absolute;
  left: 0;
  background-color: ${theme.colors.primaryDark};
  display: flex;
  align-items: center;
`;

export const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  span {
    font-weight: 500;
    padding: .25rem 0;
  }

  div {
    display: flex;
    width: fit-content;

    a {
      height: 32px;
      width: 32px;
      margin: 0 .25rem;

      path {
        fill: ${theme.colors.background}
      }
    }
  }
`;
