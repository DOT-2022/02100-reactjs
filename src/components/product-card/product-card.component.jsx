import Button from '../buttons/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="product-card-footer">
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <div className='product-card-buttons'>
                <Button buttonType='inverted' otherProps={{
                    style: {
                        textAlign: 'center',
                    }
                }}>Add to Cart</Button>
                <Button buttonType='inverted' otherProps={{
                    style: {
                        textAlign: 'center',
                    }
                }}>View</Button>
            </div>
        </div>
    );
};

export default ProductCard;