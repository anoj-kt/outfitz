import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/card-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

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
                    {currentUser ? (
                        <span className="nav__link" onClick={signOutUser}>SIGN OUT</span>
                    ) : (
                        <Link className="nav__link" to='/auth'>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet/>
        </>
  )
}

export default Navigation