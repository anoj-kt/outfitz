import { useNavigate } from 'react-router-dom';

import { 
    BannerContainer,
    BannerContent,
    BannerText,
    BannerButtons,
    BannerHashLink,
    DownArrowIcon, 
    BannerImage
} from './banner-home.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const BannerHome = () => {
    const navigate = useNavigate();

    const goToCategory = (categoryType: string) => {
        navigate(`/shop/${categoryType}`)
    };

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
            <BannerHashLink smooth to='#exploreCategories'>
                 <span>Explore more categories</span>
                 <DownArrowIcon />
            </BannerHashLink>
        </BannerContent>
      </BannerContainer>
  );
}

export default BannerHome;
