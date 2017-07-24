import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Brand from './components/Brand/Brand';
import Designer from './components/Designer/Designer';
import Collections from './components/Collections/Collections';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Media from './components/Media/Media';



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
