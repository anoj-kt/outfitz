import styled from 'styled-components';
import { theme } from '../../styles/theme.styles';

import { HashLink } from 'react-router-hash-link';

import bannerImage from '../../assets/banner-home8.jpg';
import { ReactComponent as DownArrowSvg }from '../../assets/down-arrow.svg';

export const BannerContainer = styled.div`
    height: calc(100vh - 60px);
    background-image: url(${bannerImage});
    background-size: cover;
    background-position: top;
    position: relative;
`;

export const BannerContent = styled.div`
    width: fit-content;
    position: absolute;
    top: 30%;
    left: 10%;
`;

export const BannerText = styled.div`
    & > p {
        font-weight: 600;
        font-size: 2rem;
        letter-spacing: .5rem;
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
