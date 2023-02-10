import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ShopCategoryContainer } from './shop-category.styles';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

type ShopCategoryProps = {
  imageUrl: string;
  categoryUrl: string;
  categoryName: string;
};

const ShopCategory: FC<ShopCategoryProps> = ({
  imageUrl,
  categoryName,
  categoryUrl,
}) => {
  const navigate = useNavigate();
  const goToCategory = () => navigate(categoryUrl);

  return (
    <ShopCategoryContainer imageUrl={imageUrl}>
      <Button buttonType={BUTTON_TYPE_CLASSES.primary} onClick={goToCategory}>
        {categoryName}
      </Button>
    </ShopCategoryContainer>
  );
};

export default ShopCategory;
