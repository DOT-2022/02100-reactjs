import './cart-item.styles.scss';
import { ReactComponent as DeleteIcon } from '../../../asssets/logo/delete.svg';
import { useContext } from 'react';
import { CartDropdownContext } from '../../../context/cart-dropdown.context';
const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { deleteItemFromCart } = useContext(CartDropdownContext);
    const deleteProductFromCard = () => deleteItemFromCart(cartItem);

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>

            <div className='delete-container'>
                <DeleteIcon onClick={deleteProductFromCard} className='delete-icon' />
            </div>
        </div>
    );

};

export default CartItem;