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
                            <div className="spacer text-center padder-right">
                                SUBSCRIBE TO OUR NEWSLETTER
                            </div>
                        </div>

                        <div className="col-md-3 text-center">
                            <div className="spacer">WORK WITH US</div>
                        </div>

                        <div className="col-md-3">

                            <div className="row">
                                <div className="footer-media">
                                    <div className="col-md-6">
                                        <div className="inv-spacer text-center padder-right">FOLLOW:</div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="inv-spacer text-center padder">
                                            <a href="https://www.facebook.com/MithikalraFashion/"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="inv-spacer text-center padder-right">
                                            <a href=""><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="spacer text-center padder-right">
                                            <a href="https://www.instagram.com/mithikalra/"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                        <div className="col-md-3">
                            <div className="text-center inv-spacer">
                                info@shantanunikhil.com / 555-555-5555
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

        )
    }
}

export default Footer;
