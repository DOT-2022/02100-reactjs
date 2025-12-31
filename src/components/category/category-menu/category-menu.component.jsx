
import CardList from '../category-item/category-item.component.jsx'
import './category-menu.styles.scss';
const CategoryMenu = () => {
    const categories = [
    {
      id:1,
      title:"Hat",
      backgroundImage: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id:2,
      title:"Jacket",
      backgroundImage: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id:3,
      title:"Sneakers",
      backgroundImage: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id:4,
      title:"Womens",
      backgroundImage: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id:5,
      title:"Mens",
      backgroundImage: "https://i.ibb.co/R70vBrQ/men.png"
    }
  ];

  return (
    <div className='categories-container'>
      {categories.map((category) => <CardList key={category.id} category={category} />)}
    </div>
  )
}

export default CategoryMenu;