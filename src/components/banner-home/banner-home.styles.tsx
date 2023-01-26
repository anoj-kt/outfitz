import styled from 'styled-components';

import { HashLink } from 'react-router-hash-link';

import bannerImage from '../../assets/banner-home8.jpg';
import { ReactComponent as DownArrowSvg } from '../../assets/down-arrow.svg';

export const BannerContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
`;

export const BannerContent = styled.div`
  max-width: 1440px;
  margin: 30vh auto 0 10vw;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

export const BannerText = styled.div`
  & > p {
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 0.5rem;
    color: white;
    text-transform: uppercase;
  }
`;

export const BannerButtons = styled.div`
  width: 25rem;
  display: flex;
  gap: 1rem;
  flex-grow: 1;

  & > button {
    width: calc((100% - 1rem) / 2);
  }
`;

export const BannerHashLink = styled(HashLink)`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 600;
  padding: 0.25rem 0;
  margin: 1rem 0;

  & > span {
    padding: 2px 0;
    border-bottom: 2px solid white;
  }
`;

export const DownArrowIcon = styled(DownArrowSvg)`
  height: 32px;
  width: 32px;
  fill: white;
`;
