import styled from 'styled-components';
import { theme } from '../../styles/theme.styles';
import { Link } from 'react-router-dom';

export const UserDropdownContainer = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  border: 2px solid ${theme.colors.secondaryDark};
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.background};
  top: 52.5px;
  right: 0;
  z-index: 5;
`;

export const UserDropdownLink = styled(Link)`
  padding: 0.5rem 1rem;
  margin: 0.5rem 0.25rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
