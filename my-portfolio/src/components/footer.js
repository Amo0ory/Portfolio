import React from 'react';
import {ReactComponent as Phone} from '../asset/icons/phone.svg';
import {ReactComponent as Gmail} from '../asset/icons/mail4.svg';

const Footer = props =>{
    return (
        <footer className="footer">

           
            <div className="footer__content">
                <div className="footer__navigation">
                    <div className="footer__icons">
                        <Phone fill="#1B3140" height={20}/>
                        <p>0226775507</p>
                    </div>
                    <div className="footer__icons">
                        <Gmail fill="#1B3140" height={20}/>
                        <p>shbh2010.aa@gmail.com</p>
                    </div>
                </div>
            </div>
      </footer>
  
    )
}

export default Footer;
