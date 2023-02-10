import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ShopCategoryCardContainer } from './shop-category-card.styles';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

type ShopCategoryProps = {
  imageUrl: string;
  categoryUrl: string;
  categoryName: string;
};

const ShopCategoryCard: FC<ShopCategoryProps> = ({
  imageUrl,
  categoryName,
  categoryUrl,
}) => {
  const navigate = useNavigate();
  const goToCategory = () => navigate(categoryUrl);

  return (
    <ShopCategoryCardContainer imageUrl={imageUrl}>
      <Button buttonType={BUTTON_TYPE_CLASSES.primary} onClick={goToCategory}>
        {categoryName}
      </Button>
    </ShopCategoryCardContainer>
  );
};

export default ShopCategoryCard;
