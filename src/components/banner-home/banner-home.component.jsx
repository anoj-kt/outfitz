import { useNavigate, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { 
    BannerContainer,
    BannerContent,
    BannerText,
    BannerButtons 
} from './banner-home.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const BannerHome = () => {
    const navigate = useNavigate();

    const goToCategory = (categoryType) => {
        navigate(`/shop/${categoryType}`)
    };

  return (
      <BannerContainer>
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
                <HashLink smooth to='#exploreCategories'>Explore categories</HashLink>
        </BannerContent>
      </BannerContainer>
  );
}

export default BannerHome;
