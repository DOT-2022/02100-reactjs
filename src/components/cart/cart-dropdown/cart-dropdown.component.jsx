


import Button from '../../buttons/button.component';
import './cart-dropdown.styles.scss';
const CartDropdown = () => {

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {/* [].map((item) => (
                    <div key={item.id}>{item.name}</div>
                )) */}
            </div>
            <div className='cart-dropdown-footer'>
                <Button >GO TO CHECKOUT</Button>
            </div>
        </div>
    );
};

export default CartDropdown;