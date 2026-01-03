import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context';

import Button from '../buttons/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartDropdownContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="product-card-footer">
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <div className='product-card-buttons'>
                <Button buttonType='inverted' otherProps={
                    {
                        onClick: addProductToCart
                    }
                }>ADD TO CART</Button>
                <Button buttonType='inverted' otherProps={{
                    style: {
                        textAlign: 'center',
                    }
                }}>VIEW</Button>
            </div>
        </div>
    );
};

export default ProductCard;