import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';

import NewCategory from './pages/NewCategory';
import NewProduct from './pages/NewProduct';
import NewCatego from './pages/Catego';




export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Logon}/>
        <Route path="/register" component={Register}/>

        <Route path="/profile" component={ Profile }/>
        <Route path="/products/new" component={ NewProduct}/>
        <Route path="/categorys/new" component={ NewCategory }/>
        <Route path="/catego" component={ NewCatego }/>
        
       



    </Switch>
        </BrowserRouter>
    );
}