import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import './ThankYou.css'
class ThankYou extends Component {
	render() {
		return (
			<div className="text-center thank-you">
				<h1 className="collection-name">Thanks for your order!</h1>
				<button className="btn btn-primary">View more Collections</button>
			</div>
		)
	}
}
export default ThankYou;
