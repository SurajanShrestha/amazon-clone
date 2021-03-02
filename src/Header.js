import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import {useStateValue} from './StateProvider';
import {Link} from 'react-router-dom';
import {auth} from './firebase';

function Header() {  
    const [{basket,user},dispatch]=useStateValue();
    const handleAuthentication=()=>{
      if(user){
        auth.signOut();
      }
    };
    return (
      <div className="header">
        
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
  
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          {/* Same as: <Link to={user===null && '/login'}>. !user means that if user does not exist is true
          or not. If user=null then, !user will return true otherwise false.
          Similarly, '/login' also means to check if '/login' endpoint exists or not. As '/login' endpoint
          has already been declared in <Route path="/login"><Login /></Route> in App.js, it will return true.*/}
          <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header__option">
              {/*<span className="header__optionLineOne">Hello Guest</span>*/}
              <span className="header__optionLineOne">Hello {user?user.email:'Guest'}</span>
              {console.log(user?user.email:user)}
              <span className="header__optionLineTwo">{user?'Sign Out':'Sign In'}</span>
            </div>
          </Link>
          
          <Link to='/orders'>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
  
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
  
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link> 

        </div>
      </div>
    );
  }

export default Header;

