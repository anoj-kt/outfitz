import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Category from '../../routes/category/category.component';
import { fetchCategoriesStart} from '../../store/categories/category.action';
import ShopCategories from '../../routes/shop-categories/shop-categories.component';


const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, []);

    return (
        <Routes>
            <Route index element={< ShopCategories/>}></Route>
            <Route path=':category' element={<Category />}></Route>
        </Routes>
    )
}

export default Shop