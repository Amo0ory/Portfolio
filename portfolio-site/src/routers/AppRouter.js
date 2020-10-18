import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';    
import NotFoundPage from '../components/NotFoundPage';    
import Contact from '../components/Contact';
import Portfilio from '../components/Portfolio';
import PortfilioItemPage from '../components/PortfolioItemPage';
import Home from '../components/Home';   
const AppRouter = () =>(
        <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={Home}  exact={true} />
            <Route path="/portfolio" component={Portfilio} exact={true}/>
            <Route path="/portfolio/:id" component={PortfilioItemPage} />
            <Route path="/contact" component={Contact}/>
            <Route component={NotFoundPage} />
        </Switch>
        </div>    
        </BrowserRouter>

    );
export default AppRouter;