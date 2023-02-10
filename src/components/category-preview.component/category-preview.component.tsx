import { FC } from 'react';

import { ShopContainer } from './category-preview.styles';

import { CategoryItem } from '../../store/categories/category.types';

import { shopCategoryData } from './shopCategoriesData';
import ShopCategoryCard from '../shop-category-card/shop-category-card.component';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};


const CategoryPreview = () => {
  return (
    <ShopContainer>
      {shopCategoryData.map((category) => {
        console.log(category)
        return (
        <ShopCategoryCard
          key={category.id}
          imageUrl={category.imageUrl}
          categoryName={category.category}
          categoryUrl={category.categoryUrl}
        />
      )})}

      {/* <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview> */}
    </ShopContainer>
  );
};

export default CategoryPreview;
