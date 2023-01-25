import styled from 'styled-components';

export const UserCircleContainer = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const UserCircleWithImage = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  outline: 1px solid black;
`;

export const UserCircleWithInitial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  outline: 1px solid black;
  background-color: lightgray;
`;