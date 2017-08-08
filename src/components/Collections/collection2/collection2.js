import React, {Component} from 'react';

import disneyImg from './disney.JPG'
import "./collection2.css";


class Collection2 extends Component {
    render() {
        return (
            <div>
                <div id="collection-box">
                    <div id="disney-date-and-text-box">
                        <div id="disney-text">
                            Indian Disney Story
                        </div>
                        <div id="disney-date">
                            2016
                        </div>
                    </div>
                    <img id="disney-collection-img" src={disneyImg}>
                    </img>
                </div>
            </div>
        )
    }
}

export default Collection2;
