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
                <div className="pressContain">
                    <div className="pressBox">
                        <div className="para">
                                <div>
                                    <img src={image} alt="article" className="img-responsive" height="500px" width="500px" id="image"/>
                                </div>
                                <div >
                                    <div id="mediap">you mama is so fat adfasdf asdf asdfa sdf asdf sad fasd fas asdfasdf adfasdf asd fa dsfa sdfasdf asdfasdfad fasdfasdfa sdf</div>
                                </div>

                        {/*{}*/}

                        </div>
                    </div>

                    <div className="pressBox">
                        <div className="para">
                                <div>
                                    <img src={imageTwo} alt="artile" className="img-responsive" height="500px" width="500px" id="image" />
                                </div>
                                <div>
                                    <div id="mediap">your sister is in shape adsfa dsfasdf asdfasdfasdf sdfadfadfsdf asdfasdfasdfsdfdsadfasdf sdasdfasdfasdfasdf sdfasd fasd fadfasdfa dsfasdfa sdfasdfadffasdf adfasdf sdf</div>
                                </div>
                        </div>
                    </div>



                    <div className="pressBox">
                        <div className="para">
                                <div>
                                    <img src={imageThree} alt="article" className="img-responsive" height="500px" width="500px" id="image" />
                                </div>
                                <div >
                                    <div id="mediap">you sister is damn fine adfasdfasd fasdfasdfasdfadfa sdfasdfa sdfadfasd fasdfasdfaafdasfadadfadfdsfas asdfad fasdfa dfsdfa sdfsdfasdfsdsdfasdfsdfa fda</div>
                                </div>
                        </div>
                    </div>
                </div>
                </div>

        )
    }
}

export default Media;
