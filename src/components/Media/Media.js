import React, {Component} from 'react';
// import { Link } from 'react-router-dom';


import "./Media.css";
import image from "../../images/FB_IMG_1500476060183[125].jpg";
import imageTwo from "../../images/FB_IMG_1500476073426[124].jpg";

class Media extends Component {

    constructor() {
        super()
    }


    render() {

        return (
            <div id="media">
                <div id="title">
                    <h3 id="press">
                        PRESS
                    </h3>
                </div>
                <div className="row">

                    <figure id="figOne" className="col-sm-6">
                        <img src={image} alt="article" height="500px" width="500px" id="image"/>
                        <br/>
                        <figurecaption>
                            first column

                            {/*{}*/}
                        </figurecaption>
                    </figure>


                    <figure id="figTwo" className="col-sm-6">
                            <img src={imageTwo} alt="artile" height="500px" width="500px" img="imageTwo"/>
                            <br/>
                            <figurecaption>
                                second column

                                {/*{}*/}
                            </figurecaption>
                    </figure>

                </div>
            </div>

        )
    }
}

export default Media;
