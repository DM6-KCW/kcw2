import React, {Component} from 'react';


import "./collection1.css";

class Collection1 extends Component {
    render() {
        return (
            <div>
                <div id="moonlight-text">
                    Moonlight Collection
                </div>
                <div id="moonlight-date">
                    Spring Summer 2017
                </div>
                <div className="collectionstack">
                    <div className="toplefttext"> The moonlight collection
                        is inspired from diﬀerent phases of moon
                        structured in cotton chanderi fabric.
                    </div>
                    <div className="imgtopright"> img thats right here now
                    </div>
                    <div className="imgundertext"> img
                    </div>
                    <div className="rightimg">
                        img
                    </div>
                    <div className="middletxt">
                        text
                    </div>
                    <div className="rightrightimg">
                        img
                    </div>
                    <div className="bottomimg">
                        img
                    </div>
                </div>
            </div>
        )
    }
}

export default Collection1;
