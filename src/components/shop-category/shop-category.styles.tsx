import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme.styles';

type BackgroundImageProps = {
  imageUrl: string;
};

export const ShopCategoryContainer = styled.div<BackgroundImageProps>`
  height: 500px;
  width: 20rem;
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


