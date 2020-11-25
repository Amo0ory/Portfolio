import React from 'react';

const Header = props =>{

    return(
        <header className="header">
        <div className="header__logo">
          Logo
        </div>
        
        <div className='header__items'>
          <a href="#" className="header header__title">Home</a>
          <a href="#" className="header header__title">Why Me</a>
          <a href="#" className="header header__title">Blogs</a>
          <a href="#" className="header header__title">Portfolio</a>
          <a href="#" className="header header__title">Contact Me</a> 
        </div>
      </header>
    )
}

export default Header;
