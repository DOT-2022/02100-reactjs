import CardList from '../../components/category/category-item/category-item.component';
import '../../components/category/category-menu/category-menu.styles.scss';

const Home = ({categories}) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => <CardList key={category.id} category={category} />)}
    </div>
  )
}

export default Home;