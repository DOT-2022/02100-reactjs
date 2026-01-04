
import { useContext } from 'react';
import { CartDropdownContext } from '../../../context/cart-dropdown.context';
import './checkout-item.styles.scss';

const CheckOutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { deleteItemFromCart, addItemToCart } = useContext(CartDropdownContext);
    const deleteProductFromCard = () => deleteItemFromCart(cartItem, true);
    const removeProductFromCard = () => deleteItemFromCart(cartItem, false);
    const addItemHandler = () => addItemToCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={removeProductFromCard}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </div>
            <span className='price'>${price}</span>
            <div onClick={deleteProductFromCard} className='remove-button'>&#10005;</div>
        </div>
    )
};

export default CheckOutItem;