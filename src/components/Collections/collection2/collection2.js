import React, {Component} from 'react';


import "./collection2.css";

class Collection2 extends Component {
    render() {
        return (
            <div id='right-part'>
                <div id="disney-text">
                    Indian Disney Story
                </div>
                <div id="disney-date">
                    2016
                </div>
                <div className="collectionstack">
                    <div className="disneytop">
                        <div className="disneytopleft">MITHI KALRA</div>
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

export default Collection2;
