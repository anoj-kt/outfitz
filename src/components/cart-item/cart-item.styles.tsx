import styled from 'styled-components';
import { theme } from '../../styles/theme.styles';

import { ReactComponent as TrashSVG } from '../../assets/trash.svg';

export const CartItemContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.grey};
  width: 100%;
  padding: .25rem 0;
  display: flex;
  height: 80px;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  padding: 0 .4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  
  & :first-child {
    font-weight: 500;
  }

  & :nth-child(2) {
    font-weight: 500;
    color: ${theme.colors.primaryDark}
  }

  & :nth-child(3) {
    font-weight: 300;
    color: ${theme.colors.secondaryDark}
  }
`;

export const TrashIcon = styled(TrashSVG)`
  fill: ${theme.colors.danger};
  height: 24px;
  width: 24px;
  cursor: pointer;
`;