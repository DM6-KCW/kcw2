import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Brand from './components/brand/brand';
import Designer from './components/designer/designer';
import Collections from './components/collections/collections';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';
import Media from './components/media/Media';



export default (
    <Switch>
        <Route component={Home} exact path="/"/>
        <Route component={Brand} path = "/brand"/>
        <Route component={Collections} path = "/collections"/>
        <Route component={Blog} path = "/blog"/>
        <Route component={Contact} path = "/contact"/>
        <Route component={Media} path = "/media"/>
    </Switch>

)
