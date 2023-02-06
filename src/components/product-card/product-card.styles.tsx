import styled from 'styled-components';
import { theme } from '../../styles/theme.styles';

export const ProductCartContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  box-shadow: 0px 10px 8px -3px rgba(0,0,0,0.1);
  border-radius: ${theme.borderRadius.general};
  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 90%;
    margin-bottom: .25rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: .5rem;
  padding: .5rem;
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 1.25rem;
  margin-bottom: .25rem;
`;

export const Price = styled.span`
  color: ${theme.colors.primaryDark};
  font-weight: 600;
  font-size: 1.75rem;
`;