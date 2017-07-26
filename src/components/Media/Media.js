import React, {Component} from 'react';
// import { Link } from 'react-router-dom';


import "./Media.css";
import image from "../../images/FB_IMG_1500476060183[125].jpg";
import imageTwo from "../../images/FB_IMG_1500476073426[124].jpg";
import imageThree from "../../images/FB_IMG_1500475775897[120].jpg";

class Media extends Component {

    constructor() {
        super()
    }


    render() {

        return (
            <div id="media">
                <div id="title">
                    <h2 id="press">
                        PRESS
                    </h2>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                            <img src={image} alt="article" className="img-responsive" height="500px" width="500px" id="image"/>

                                {/*{}*/}
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                            <div id="figTwo">
                                    <img src={imageTwo} alt="artile" className="img-responsive" height="500px" width="500px" id="image" />

                            </div>
                    </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div id="figThree">
                            <img src={imageThree} alt="article" className="img-responsive" id="image" />

                        </div>
                    </div>
                </div>
                </div>
            </div>

        )
    }
}

export default Media;
