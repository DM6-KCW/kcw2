import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./Footer.css";
class Footer extends Component {
	render() {
		return (
			<div className="container-fluid footer-container">
				<div id="first-media" className="footer-margin">
					<div className="row">

						<div className="col-md-4 text-center footer-section">
						    <div><Link id="contact-us-footer" to="/contact">CONTACT US</Link></div>
						</div>
						<div id="social-icons" className="col-md-4 footer-section">
							<div className="row middle-section">

								<div className="col-md-4">
									<div className=" text-center ">
										<a href="https://www.facebook.com/MithikalraFashion/">
											<i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
										</a>
									</div>
								</div>
								<div className="col-md-4">
									<div className=" text-center ">
										<a href="https://twitter.com/mithikalra?lang=en">
											<i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
										</a>
									</div>
								</div>
								<div className="col-md-4">
									<div className=" text-center">
										<a href="https://www.instagram.com/mithikalra/">
											<i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 footer-section">
							<div className="text-center">
								<a href="mailto:mithi.kalra@gmail.com?Subject=Hello%20again" target="_top">mithi.kalra@gmail.com</a>/
								<a href="tel:999-984-1847">999-984-1847</a>
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}
export default Footer;
