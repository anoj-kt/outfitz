import styled from 'styled-components';
import { theme } from '../../styles/theme.styles';

export const ProductCartContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.grey};
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  padding: 5px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 100%;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 12px;
  padding: 10px;
`;

export const Name = styled.span`

`;

export const Price = styled.span`
  color: ${theme.colors.primaryDark};
  font-weight: 600;
`;