import React from 'react';
import {Link} from "react-router-dom";

const Header = props =>{

    return(
        <header className="header">
        <div className="header__logo">
          Logo
        </div>
        
        <div className='header__items'>
          
          <Link to="/" className="header header__title">Home</Link>
         
          <Link to="/blogs" className="header header__title">Blogs</Link>
       
          <a href="#connect" className="header header__title">Contact Me</a> 
         
        </div>
      </header>
    )
}

export default Header;
