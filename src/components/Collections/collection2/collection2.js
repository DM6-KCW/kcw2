import React, {Component} from 'react';


import "./collection2.css";

class Collection2 extends Component {
    render() {
        return (
            <div>
                <div id="disney-text">
                    Indian Disney Story
                </div>
                <div id="disney-date">
                    2016
                </div>
                <div className="collectionstack">
                    <div className="disneytop">
                        <div className="disneytopleft"></div>
                    </div>
                    <div className="disneymid">
                        <div className="disneymidupleft"></div>
                        <div className="disneymidupright"></div>
                        <div className="disneymiddown"></div>
                        <div className="disneymidmid"></div>
                    </div>
                    <div className="disneybottom4square">
                        <div className="disney4squaretopleft"></div>
                        <div className="disney4squaretopright"></div>
                        <div className="disney4squarebottomleft"></div>
                        <div className="disney4squarebottomright"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collection2;
