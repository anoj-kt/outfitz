import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  border: 1px solid grey;
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
  color: #FCA502;
  font-weight: 600;
`;