import React from 'react';
import Header from '../header';
import Footer from '../footer';
const Blogs = props =>{
    return (

        <div>
            <Header/>


            <div className="blogs">

                <h1 className="blogs__page-title">Blogs</h1> 

                <div className="blogs__content">
                    <div className="blogs__left">
                        <h2 className="blogs__title">Coming Soon</h2>
                        <p className="blogs__text"></p>
                    </div>
                    <div className="blogs__right">
                        <div className="blogs__image">
                        
                        </div>
                        <div className="blogs__write-comment">
                        
                        </div>
                        <div className="blogs__comment">
                        
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Blogs;
