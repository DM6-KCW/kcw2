import React, {Component} from 'react';
import "./Designer.css";
import fullLogo from '../../images/full-logo.png';
import designerImg from '../../images/designer.JPG';

class Designer extends Component {
	render() {
		return (
			<div>
				<div className="designer-container text-center">
					<div id="designer">
						<h1>THE DESIGNER</h1>
					</div>
					<div className="img-logo-designer">
						<img className="full-logo" src={fullLogo} alt=""/>
					</div>
					<div className="designer-img-container">
						<img className="designer-img" src={designerImg} alt=""/>
					</div>
					<div>
						<p>Mithi Kalra, an MBA from IIPM and a pass out from NIFT Delhi 2015 with her label name 'Mithi'. Following her dream and passion to create beautiful apparels for every age group.
						</p>
					</div>
				</div>
			</div>
		)
	}
}
export default Designer;
