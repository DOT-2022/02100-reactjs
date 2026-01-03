import { useContext, useEffect, useState } from 'react';
import { ReactComponent as ShoppingIcon } from '../../../asssets/logo/shopping-bag.svg';
import { CartDropdownContext } from '../../../context/cart-dropdown.context';
import './cart-icon.styles.scss';
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartDropdownContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((total, cur) => total + cur.quantity, 0);
        setCartCount(total);
    }, [cartItems]);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;