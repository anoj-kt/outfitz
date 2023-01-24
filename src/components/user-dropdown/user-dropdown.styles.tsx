import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 140px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const UserDropdownLink = styled(Link)`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid black;
`;
