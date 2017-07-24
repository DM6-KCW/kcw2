import React, {Component} from 'react';
// import { Link } from 'react-router-dom';


import "./Media.css";

class Media extends Component {
    render() {
        return (
            <div>
                <div id="title">
                    <h3 id="press">
                        PRESS
                    </h3>
                </div>
                <div className="row">

                    <figure id="figOne" className="col-sm-6">
                        <img src="" alt=""/>
                        <br/>
                        <figurecaption>
                            first column

                            {/*{}*/}
                        </figurecaption>
                    </figure>


                    <figure id="figTwo" className="col-sm-6">
                            <img src="" alt=""/>
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
