
import CardList from '../category-item/category-item.component.jsx'
import './category-menu.styles.scss';
const CategoryMenu = ({categories}) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => <CardList key={category.id} category={category} />)}
    </div>
  )
}

export default CategoryMenu;