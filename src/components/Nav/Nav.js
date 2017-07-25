import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./Nav.css";

class Nav extends Component {
	addScroll(nav) {
		console.log(nav);
		document.addEventListener('scroll', e => {
			console.log(document.body.scrollTop);
			
			if(document.body.scrollTop > 50){
				nav.style.backgroundColor = "white"
			}
			else{
				nav.style.backgroundColor = '#0A0C26'
			}
		})
	}
	render() {
		return (
			<div>
				<nav id="nav" ref={nav => {this.addScroll(nav)}} className="navbar navbar-inverse navbar-fixed-top">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<Link to="/" className="navbar-brand">Mithi Kalra</Link>
						</div>

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
								<li>
									<Link to="/brand">The Brand</Link>
								</li>
								<li>
									<Link to="/designer">The Designer</Link>
								</li>
								<li>
									<Link to="/collections">Collections</Link>
								</li>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
								<li>
									<Link to="/media">Media</Link>
								</li>
								<li>
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
