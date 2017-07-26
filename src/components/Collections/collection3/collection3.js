import React, {Component} from 'react';


import "./collection3.css";

class Collection3 extends Component {
    render() {
        return (
            <div>
                <div id="third-text">
                    Third collection
                </div>
                <div id="third-date">
                    2016
                </div>
                <div className="collectionstack">
                    <div className="threetop">
                        <div className="threetopleft"></div>
                        <div className="threetopright">
                            <div className="threetoprightupper">
                                <div className="threetoprightupperleft"></div>
                                <div className="threetoprightupperright"></div>
                            </div>
                            <div className="threetoprightlower"></div>
                        </div>
                    </div>
                    <div className="threebigmid"></div>
                    <div className="threemidleft"></div>
                    <div className="threemidright"></div>
                    <div className="threebottomleft"></div>
                    <div className="threebottomright"></div>
                </div>
            </div>
        )
    }
}

export default Collection3;
