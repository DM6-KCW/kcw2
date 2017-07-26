import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../Utilities/utils';


import "./Contact.css";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit() {
        console.log('HIT');
        axios.get(baseurl + '/tacos').then(function(response) {
            console.log(response);
        });
    }
    render() {
        return (
            <div className="contact-form col-md-6">

                <h4>Connect</h4>
                <div className="social-buttons">
                    <div className="col-md-4">F</div>
                    <div className="col-md-4">T</div>
                    <div className="col-md-4">I</div>
                </div>
                <hr/>

                <h4>Get In Contact</h4>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email"  />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject"  />
                </div>
                <div className="form-group">
                  <textarea id="contact-form-message" type="text" className="form-control" rows="5" placeholder="Message"  />
                </div>
                <button type="button" className="btn" onClick={this.onSubmit}>Submit</button>
                <hr/>

                <h4>Other Way</h4>
                <div>Email</div>
                <div>Phone</div>
            </div>
        )
    }
}

export default Contact;
