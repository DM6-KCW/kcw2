import React, {Component} from 'react';

import moonlightImg from './moonlight.JPG';
import "./collection1.css";

class Collection1 extends Component {
    render() {
        return (
            <div>
                <div id="collection-box">
                    <div id="moonlight-date-and-text-box">
                        <div id="moonlight-text">
                            Moonlight Collection
                        </div>
                        <div id="moonlight-date">
                            2017
                        </div>
                    </div>
                    <img id="moonlight-collection-img" src={moonlightImg}>
                    </img>
                </div>
            </div>
        )
    }
}

export default Collection1;
