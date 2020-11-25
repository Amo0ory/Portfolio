import React from 'react';

const Footer = props =>{
    return (
        <footer className="footer">

            <div className="footer__logo-box">
                <img src="img/logo.png" alt="logo" className="footer__logo"/>
            </div>

            <div className="footer__content">
                <div className="footer__navigation">
                    <ul className="footer__list">
                    <li className="footer_item"><a href="#" className="footer__link">Name</a></li>
                    <li className="footer_item"><a href="#" className="footer__link">Name</a></li>
                    <li className="footer_item"><a href="#" className="footer__link">name</a></li>
                    </ul>
                </div>
  
                <p className="footer__copy-right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laudantium esse quam accusantium amet animi laboriosam repellendus dolore, 
                    id eos unde in corrupti,
                    alias ullam rerum eveniet excepturi at voluptatibus exercitationem.
                </p>
            </div>
      </footer>
  
    )
}

export default Footer;
