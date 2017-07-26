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
                    <div className="col-xs-12 col-sm-6 col-md-6 border">
                            <img src={image} alt="article" className="img-responsive" height="500px" width="500px" id="image"/>
                            <p id="mediap">you mama is so fat adfasdf asdf asdfa sdf asdf sad fasd fas asdfasdf adfasdf asd fa dsfa sdfasdf asdfasdfad fasdfasdfa sdf</p>

                        {/*{}*/}
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 border">

                                    <img src={imageTwo} alt="artile" className="img-responsive" height="500px" width="500px" id="image" />
                                    <p id="mediap">your sister is in shape adsfa dsfasdf asdfasdfasdf sdfadfadfsdf asdfasdfasdfsdfdsadfasdf sdasdfasdfasdfasdf sdfasd fasd fadfasdfa dsfasdfa sdfasdfadffasdf adfasdf sdf</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 border">

                            <img src={imageThree} alt="article" className="img-responsive" height="500px" width="500px" id="image" />
                            <p id="mediap">you sister is damn fine adfasdfasd fasdfasdfasdfadfa sdfasdfa sdfadfasd fasdfasdfaafdasfadadfadfdsfas asdfad fasdfa dfsdfa sdfsdfasdfsdsdfasdfsdfa fda</p>

                    </div>
                </div>
                </div>

        )
    }
}

export default Media;
