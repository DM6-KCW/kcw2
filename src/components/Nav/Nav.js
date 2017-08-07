import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./Nav.css";
import logo from "./logo.png"


class Nav extends Component {
	constructor() {
		super()
		// this.addScroll = this.addScroll.bind(this)
		// this.scrollListener = this.scrollListener.bind(this)
		this.handleScroll = this.handleScroll.bind(this);
	}
	// addScroll() {
	// 	document.onscroll = this.scrollListener
	// }
	// scrollListener(e) {
	// 	if(document.body.scrollTop > 50){
	// 		this.nav.style.backgroundColor = "white"
	// 	}
	// 	else{
	// 		this.nav.style.backgroundColor = '#0A0C26'
	// 	}

	// }
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(e){
		if(document.body.scrollTop > 50){
			this.nav.style.backgroundColor = "white"
		}
		else{
			this.nav.style.backgroundColor = '#0A0C26'
		}

	}
	render() {
		return (
			<div>
				<nav id="nav" ref={nav => {this.nav = nav}} className="navbar navbar-inverse navbar-fixed-top">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<Link to="/"><img className="navbar-brand" src={logo} alt="logo" /></Link>
						</div>

						<div className="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
								<li data-toggle="collapse" data-target=".navbar-collapse.in">
									<Link to="/brand">The Brand</Link>
								</li>
								<li data-toggle="collapse" data-target=".navbar-collapse.in">
									<Link to="/brand?designer">The Designer</Link>
								</li>
								<li data-toggle="collapse" data-target=".navbar-collapse.in">
									<Link to="/collections">Collections</Link>
								</li>
								<li data-toggle="collapse" data-target=".navbar-collapse.in">
									<Link to="/blog">Blog</Link>
								</li>
								<li data-toggle="collapse" data-target=".navbar-collapse.in">
									<Link to="/media">Media</Link>
								</li>
								<li data-toggle="collapse" data-target=".navbar-collapse.in">
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default Nav;
