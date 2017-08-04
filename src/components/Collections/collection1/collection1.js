import React, {Component} from 'react';


import "./collection1.css";

class Collection1 extends Component {
    render() {
        return (
            <div id="left-part">
                <div id="moonlight-text">
                    Moonlight Collection
                </div>
                <div id="moonlight-date">
                    Spring Summer 2017
                </div>
                <div id="collection-stuff" className="collectionstack">
                    <div className="toplefttext"> The moonlight collection
                        is inspired from diﬀerent phases of moon
                        structured in cotton chanderi fabric.
                    </div>
                    <ul id='banner'>
                      <li id="slide-1"></li>
                      <li id="slide-2"></li>
                      <li id="slide-3"></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Collection1;
