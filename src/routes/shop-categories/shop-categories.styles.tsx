import styled from 'styled-components';

import { theme } from '../../styles/theme.styles';

export const ShopContainer = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px;

  & :first-child {
    grid-area: 1 / 1 / 2 / 4;
  }

  & :nth-child(2) {
    grid-area: 1 / 4 / 2 / 7;
  }

  & :nth-child(3) {
    grid-area: 2 / 1 / 3 / 3;
  }

  & :nth-child(4) {
    grid-area: 2 / 3 / 3 / 5;
  }

  & :nth-child(5) {
    grid-area: 2 / 5 / 3 / 7;
  }
`;
