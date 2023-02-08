import styled from 'styled-components';
import { theme } from '../../styles/theme.styles';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 2rem;

  h2 {
    text-transform: uppercase;
  }

  button {
    margin: .5rem 0;
    align-self: end;
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  margin-top: .5rem;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;

  & :last-child {
    color: ${theme.colors.primaryDark};
    font-weight: 600;
    font-size: 1.75rem;
  }
`;
