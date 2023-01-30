import styled from 'styled-components';

import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemCount = styled.span`
  position: absolute;
  right: 3px;
  top: 2px;
  height: 20px;
  width: 20px;
  line-height: 20px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  color: white;
  background-color: #FCA502;
`;
