import styled from 'styled-components';
import bannerImage from '../../assets/banner-home8.jpg'

export const BannerContainer = styled.div`
    height: calc(100vh - 80px);
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
