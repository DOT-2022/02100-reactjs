import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../../asssets/logo/shopping-bag.svg';
import { CartDropdownContext } from '../../../context/cart-dropdown.context';
import './cart-icon.styles.scss';
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartDropdownContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;