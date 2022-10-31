import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;

    return (
        <div className="category__container">
            <div className="category__img" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="category__body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem