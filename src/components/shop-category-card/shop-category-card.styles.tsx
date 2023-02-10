import styled from 'styled-components';

type BackgroundImageProps = {
  imageUrl: string;
};

export const ShopCategoryCardContainer = styled.div<BackgroundImageProps>`
  height: 35em;
  width: 100%;
  margin: 0 .25rem;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-size: cover;
  background-position:top center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  button {
    margin-bottom: 2rem;
  }
`;


