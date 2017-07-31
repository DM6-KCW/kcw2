import React, {Component} from 'react';

class PriceRequest extends Component {
	render(){
		console.log(this.props.match.params.dress_id);
		return(
			<div>
				hello
			</div>
		)
	}
}

export default PriceRequest;
