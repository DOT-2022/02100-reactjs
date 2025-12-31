import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { ReactComponent as AppLogo } from '../../asssets/logo/logo.svg';
import './navigation.styles.scss';
const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className="logo-container" to='/'>
            <AppLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
            <Link className="nav-link" to='/shop'>
            Shop
            </Link>
            <Link className="nav-link" to='/signIn'>
            Sign In
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;