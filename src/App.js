import './categories.styles.scss'

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'Jackets'
    },
    {
      id: 3,
      title: 'Shoes'
    },
    {
      id: 4,
      title: 'Women'
    },
    {
      id: 5,
      title: 'Men'
    },
  ]

  return (
    <div className="categories__container">
      {categories.map(({title, id}) => (
        <div key={id} className="category__container">
          <div className="category__img" />
          <div className="category__body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
      </div>
      ))}
    </div>
  );
}

export default App;
