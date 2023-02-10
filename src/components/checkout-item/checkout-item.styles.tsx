import styled from 'styled-components';

import { ReactComponent as MinusSVG } from '../../assets/icons/minus-square-full.svg';
import { ReactComponent as PlusSVG } from '../../assets/icons/plus-square.svg';
import { ReactComponent as TrashSVG } from '../../assets/icons/trash.svg';
import { theme } from '../../styles/theme.styles';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  font-size: 1.25rem;
  min-height: 100px;
  border-bottom: 1px solid ${theme.colors.grey};
  padding: 15px 0;
`;

export const ImageContainer = styled.div`
  width: 25%;
  padding-right: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4{
    margin: 0 0 .5rem 0;
    font-size: 1.25rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
`;

export const MinusIcon = styled(MinusSVG)`
  height: 24px;
  width: 24px;
  margin-left: .25rem;
  fill: ${theme.colors.secondaryLight};
  cursor: pointer;
`;

export const PlusIcon = styled(PlusSVG)`
  height: 24px;
  width: 24px;
  fill: ${theme.colors.secondaryLight};
  cursor: pointer;
`;

export const Price = styled.span`
  color: ${theme.colors.primaryDark};
  font-weight: 600;
  font-size: 1.75rem;
  margin-top: 1.5rem;
`;

export const TrashIcon = styled(TrashSVG)`
  fill: ${theme.colors.danger};
  height: 24px;
  width: 24px;
  cursor: pointer;
`;