import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContext } from '../../../context/cart-dropdown.context';

import Button from '../../buttons/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
const CartDropdown = () => {

    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartDropdownContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map((item) => {
                        return <CartItem key={item.id} cartItem={item} />
                    })
                }
            </div>
            <Button buttonType='button' otherProps={{
                onClick: goToCheckoutHandler
            }}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;