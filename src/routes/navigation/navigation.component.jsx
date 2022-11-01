import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
        <div className='navigation'>
            <Link className="logo-container" to='/'>
                <Logo className='logo' />
            </Link>
            <div className="nav__links-container">
                <Link className="nav__link" to='/shop'>
                    SHOP
                </Link>
                <Link className="nav__link" to='/sign-in'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Navigation