import React, {Component} from 'react';

import Designer from '../Designer/Designer';
import "./Brand.css";
import fullLogo from '../../images/full-logo.png';

class Brand extends Component {
	constructor(){
		super();
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
		if(this.props.location.search){
			document.body.scrollTop = (window.$(document).height() - window.$(window).height()) * 1;
		}
		else{
			document.body.scrollTop = 0;
		}
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(e){
		var scrollPercent = (window.$(window).scrollTop()) / (window.$(document).height() - window.$(window).height());
		console.log(scrollPercent);
	}
	componentDidUpdate(){
		if(this.props.location.search){
			document.body.scrollTop = (window.$(document).height() - window.$(window).height()) * 1;
		}
		else{
			document.body.scrollTop = 0;
		}
	}
	render() {
		return (
			<div>
				<div className="brand-container">
					<div className="text-center brand-section">
						<div className="m-d">
							<h1>THE BRAND</h1>
						</div>
						<div className="img-logo">
							<img className="full-logo" src={fullLogo} alt=""/>
						</div>
						<div className="pinch-margin">
							<p>In spite of being young in the industry the designer has worked
								on her areas of epertise.</p>
							<p>Increasingly known for eloquent designs which represent impeccable
								style and femininity, they are self-confessed works of quality.</p>
							<p>Pure fabrics, neutral colors, surprising embellishments and passionate
								attention to detail defines the label 'Mithi Kalra'.</p>
							<p>Keenly focused on comfort and style gently tailored and handcrafted, making the
								garments extremely graceful. </p>
							<p>Also in spite of being young and new to the fashion industry, Kalra has been
								nominated for 'Best Indowestern Creative Designer' with ravishing wedding magazine awards.</p>
							<p>Featured in almost all top magazines and newspapers in the country, the
								'Mith Kalra' label is making its mark in the market.</p>
						</div>
					</div>
				<Designer/>
			</div>
		</div>
		)
	}
}
export default Brand;
