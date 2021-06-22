import React from 'react';
import './Header.css';
import logo from '../../assets/images/coverclearsmall.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateVale } from '../../Provider/StateProvider';
import { auth } from '../../firebase';

function Header() {

    const [{basket, user}, dispatch] = useStateVale();

    const handleAuthentication = () => {
        if (user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src={logo} alt=""/>
            </Link>
            
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" />
                {/* Logo*/ }
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>                           
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header__option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>
             
                <div className="header__option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>

                </Link>
                
            </div>
        </div>
    )
}

export default Header
