import { useNavigate } from 'react-router-dom';

import { 
    BannerContainer,
    BannerContent,
    BannerText,
    BannerButtons,
    BannerImage
} from './banner-home.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const BannerHome = () => {
    const navigate = useNavigate();

    const goToCategory = (categoryType: string) => {
        navigate(`/shop/${categoryType}`)
    };

    const goToShop = () => navigate('/shop');

  return (
      <BannerContainer>
        <BannerImage/>
        <BannerContent>
            <BannerText>
                <p>New Collection.</p>
                <p>Great Prices.</p>
                <p>Shop now!</p>
            </BannerText>
            <BannerButtons>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => goToCategory('womens')}>For Women</Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => goToCategory('mens')}>For Men</Button>
            </BannerButtons>
            <span onClick={goToShop}>Explore more categories</span>
        </BannerContent>
      </BannerContainer>
  );
}

export default BannerHome;
