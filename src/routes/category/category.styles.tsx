import styled from 'styled-components';
import { theme } from '../../styles/theme.styles';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 0 20px;
`;

export const Title = styled.h2`
  margin-top: ${theme.navbarHeight};
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;