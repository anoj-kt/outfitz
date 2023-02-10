import { useSelector } from 'react-redux';

import { selectCategoriesIsLoading } from '../../store/categories/category.selector';

import { ShopContainer } from './shop-categories.styles';
import { shopCategoryData } from './shopCategoriesData';

import ShopCategoryCard from '../../components/shop-category-card/shop-category-card.component';
import Spinner from '../../components/spinner/spinner.component';

const ShopCategories = () => {
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ShopContainer>
          {shopCategoryData.map((category) => {
            console.log(category);
            return (
              <ShopCategoryCard
                key={category.id}
                imageUrl={category.imageUrl}
                categoryName={category.category}
                categoryUrl={category.categoryUrl}
              />
            );
          })}
        </ShopContainer>
      )}
    </>
  );
};

export default ShopCategories;
