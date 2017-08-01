import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Brand from './components/Brand/Brand';
import Collections from './components/Collections/Collections';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Media from './components/Media/Media';
import Admin from './components/Admin/Admin';
import DisneyCollection from './components/Collections/Actualviews/Disney/disney'
import MoonlightCollection from './components/Collections/Actualviews/Moonlight/moonlight'
import Collection3 from './components/Collections/Actualviews/Collection3/collection3'
import PriceRequest from './components/PriceRequest/PriceRequest'



export default (
    <div>
    <Switch>
        <Route component={Home} exact path="/"/>
        <Route component={Brand} path = "/brand"/>
        <Route component={Collections} path = "/collections"/>
        <Route component={Blog} path = "/blog"/>
        <Route component={Contact} path = "/contact"/>
        <Route component={Media} path = "/media"/>
        <Route component={Admin} path= "/admin"/>
        <Route component={DisneyCollection} exact path= "/disney"/>
        <Route component={PriceRequest} path= "/disney/:dress_id"/>
        <Route component={MoonlightCollection} exact path= "/moonlight"/>
        <Route component={PriceRequest} path= "/moonlight/:dress_id"/>
        <Route component={Collection3} path= "/collection3"/>
    </Switch>

    </div>

)
