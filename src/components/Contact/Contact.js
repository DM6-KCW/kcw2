import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../Utilities/utils';

import "./Contact.css";

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			subject: "",
			message: "",
			sender_name: "",
            imageUrl: ""
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	onSubmit() {
        axios.post(baseurl + '/api/contact', this.state).then(function(response) {
            console.log(response);
        });
		this.setState({email: "", subject: "", message: "", sender_name: ""})
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({[name]: value});
	}

	render() {
		return (
            <div className="contact-container">

			<div className="contact-form col-md-6">

				<h4>Connect</h4>
				<div className="social-buttons">
					<div className="col-md-4"><a href="https://www.facebook.com/MithikalraFashion/"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a></div>
					<div className="col-md-4"><a href="https://twitter.com/mithikalra?lang=en"><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a></div>
					<div className="col-md-4"><a href="https://www.instagram.com/mithikalra/"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a></div>
				</div>
				<hr/>

				<h4>Get In Contact</h4>
				<div className="form-group">
					<input
                        name="sender_name"
                        type="text"
                        className="form-control"
                        value={this.state.sender_name}
                        onChange={this.handleInputChange}
                        placeholder="Name"/>
				</div>
				<div className="form-group">
					<input
                        name="email"
                        type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder="Email"/>
				</div>
				<div className="form-group">
					<input
                        name="subject"
                        type="text"
                        className="form-control"
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                        placeholder="Subject"/>
				</div>
				<div className="form-group">
					<textarea
                        name="message"
                        type="text"
                        id="contact-form-message"
                        className="form-control"
                        rows="5"
                        value={this.state.message}
                        onChange={this.handleInputChange}
                        placeholder="Message"/>
				</div>
				<button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onSubmit}
                    data-toggle="modal"
                    data-target=".bs-example-modal-sm">
					Submit
				</button>
				<hr/>

				<h4>Or call us at</h4>

				<div id="phonenumber">1-555-555-5555</div>

				<div className="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
					<div className="modal-dialog modal-sm" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h4 className="modal-title" id="exampleModalLabel">Thanks for your feedback!</h4>
							</div>
							<div className="modal-body">
								<p id="we-will-contact">We will be in contact with you.</p>
							</div>
						</div>
					</div>
				</div>

			</div>
            </div>
		)
	}
}

export default Contact;
