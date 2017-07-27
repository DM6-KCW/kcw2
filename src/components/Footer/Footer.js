import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            
            <div className="container-fluid footer-container">
                <div id="first-media" className="footer-margin">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="text-center inv-spacer padder-right">
                                SUBSCRIBE TO OUR NEWSLETTER
                            </div>
                        </div>

                        <div className="col-md-3 spacer text-center">
                            <div>WORK WITH US</div>
                        </div>

                        <div className="col-md-3">

                            <div className="row">
                                    
                                        <div className="col-md-3">
                                            <div className="text-center spacer padder-right">FOLLOW:</div>
                                        </div>
                                        


                                        <div className="footer-margin-v2">
                                            <div className="col-md-3">
                                                <div className="inv-spacer text-center ">
                                                    <a href="https://www.facebook.com/MithikalraFashion/"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="inv-spacer text-center ">
                                                    <a href="https://twitter.com/mithikalra?lang=en"><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="inv-spacer text-center">
                                                    <a href="https://www.instagram.com/mithikalra/"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                            
                                </div>
                            </div>

                        <div className="col-md-3">
                            <div className="text-center spacer">
                                <a href="mailto:mithi.kalra@gmail.com?Subject=Hello%20again" target="_top">mithi.kalra@gmail.com</a>/ <a href="tel:999-984-1847">999-984-1847</a>
                            </div>
                        </div>
                    </div>
                </div>


                {/*media*/}


                 <div id="sec-media">
                    <div className="row">
                        <div className="col-md-2">
                            <div>
                                SUBSCRIBE TO OUR NEWSLETTER
                            </div>
                        </div>

                        <div className="col-md-4">
                            <ul className="footer-ul">
                                <li className="footer-li">FOLLOW:</li>
                                <li className="footer-li"><a href="https://www.facebook.com/MithikalraFashion/"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                                <li className="footer-li"><a href="https://twitter.com/mithikalra?lang=en"><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a></li>
                                <li className="footer-li"><a href="https://www.instagram.com/mithikalra/"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <div>
                                WORK WITH US
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        )
    }
}

export default Footer;
