import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            
            <div className="container-fluid footer-container">
                <div className="footer-margin">
                    <div className="row">
                        <div className="col-md-3">
                            SUBSCRIBE TO OUR NEWSLETTER
                        </div>

                        <div className="col-md-3">
                            WORK WITH US
                        </div>

                        <div className="col-md-3">

                            <div className="row">
                                <div className="footer-media">
                                    <div className="col-md-3">
                                        <div>
                                            FOLLOW
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div>
                                            <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div>
                                            <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div>
                                            <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                        <div className="col-md-3 footer-mid-text">
                            info@shantanunikhil.com / 555-555-5555
                        </div>
                    </div>
                </div>    
            </div>

        )
    }
}

export default Footer;
