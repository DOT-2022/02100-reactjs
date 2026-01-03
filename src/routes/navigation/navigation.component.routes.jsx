import { useContext } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as AppLogo } from '../../asssets/logo/logo.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartDropdown from '../../components/cart/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart/cart-icon/cart-icon.component';
import { CartDropdownContext } from '../../context/cart-dropdown.context';

import './navigation.styles.scss';
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartDropdownContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className="logo-container" to='/'>
                    <AppLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    {/* <span>{currentUser ? `Welcome, ${currentUser.displayName}` : ''}</span> */}

                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>

                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>{' '} SIGN OUT {' '}</span>
                        ) : (
                            <Link className="nav-link" to='/auth'>
                                Sign In
                            </Link>
                        )
                    }

                    <CartIcon />
                </div>

                {isCartOpen && <CartDropdown />}

            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;