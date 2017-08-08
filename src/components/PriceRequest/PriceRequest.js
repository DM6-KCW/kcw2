import React, {Component} from 'react';
import axios from 'axios';

import './PriceRequest.css';
import options from './countries.js';

class PriceRequest extends Component {

	constructor(){
		super();

		this.state = {
			dress: "",
			standardSize: "us0uk4",
			bust: null,
			chest: null,
			hip: null,
			shoulder: null,
			underbust: null,
			upperarm: null,
			waist: null,
			shouldertobust: null,
			shouldertowaist: null,
			shouldertoknee: null,
			shouldertoground: null,
			height: 46,
			country: null,
			name: null,
			email: null,
			phoneNumber: null,
			age: null,
			formDisabled: true
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentWillMount(){

		var self = this;
		axios.get('/api/getDress', {
	         params: {
	           dress_id: self.props.match.params.dress_id
	         }
		 }).then(function(response){
			 self.setState({'dress': response.data[0].img_url})
		 });
	}

	componentDidMount() {
		this.setState({'dress_id':this.props.match.params.dress_id});
		var select = document.getElementById('countryInput');
		for(var i = 0; i < options.length; i++) {
		    select.options[i] = new Option(options[i].name, options[i].value);
		}
	}


	onSubmit(e) {
		e.preventDefault();
		if (this.state.name && this.state.email && this.state.country) {
			axios.post('/api/placeOrder', this.state).then(function(response){
				console.log(response);
			})
			this.props.history.push('/thank-you'); 
			return
		}
		if (!this.state.name) {
			window.$('.form-group-name').addClass('has-error').children('label').removeClass('hidden')
		} else {
			window.$('.form-group-name').removeClass('has-error').children('label').addClass('hidden')
		}
		if (!this.state.email) {
			window.$('.form-group-email').addClass('has-error').children('label').removeClass('hidden')
		} else {
			window.$('.form-group-email').removeClass('has-error').children('label').addClass('hidden')
		}
		if (!this.state.country) {
			window.$('.form-group-country').addClass('has-error').children('label').removeClass('hidden')
		} else {
			window.$('.form-group-country').removeClass('has-error').children('label').addClass('hidden')
		}
		console.log(this.state);
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({[name]: value});
	}

	render(){
		return(
			<div className="contact-form col-md-6">

				<h1 className="chosen-header">Chosen Item: </h1>
				<img className="chosen-dress" src={this.state.dress} alt=""/>
				<form className="login-login-form">
				<h2 className="order-header">Step 1: What's your size</h2>
					<h3><b>Choose from Standard Sizes:</b> </h3>
					<select name="standardSize" value={this.state.standardSize} onChange={this.handleInputChange} className="form-control">
						<optgroup label="Select Size...">
						  <option value="us0uk4">US 0 / UK 4</option>
						  <option value="us2uk6">US 2 / UK 6</option>
						  <option value="us4uk8">US 4 / UK 8</option>
						  <option value="us6uk10">US 6 / UK 10</option>
						  <option value="us8uk12">US 8 / UK 12</option>
						  <option value="us10uk14">US 10 / UK 14</option>
						  <option value="us12uk16">US 12 / UK 16</option>
						  <option value="us14uk18">US 14 / UK 18</option>
						  <option value="us16uk20">US 16 / UK 20</option>
				  		</optgroup>
					</select>
					<h3><i><b>or</b></i></h3>
					<h3><b>Create a Custom Size:</b> </h3>
					<br/>
					<p id="create-custom-size">Go with a custom size and give us your body measurements in inches:</p>
					<br/>
					<div id="custom-size-container" className="row">
							<div className="col-xs-12 col-lg-6 number-input-box">
								<label htmlFor="bust">Bust: </label>
								<input value={this.state.bust} onChange={this.handleInputChange} name="bust" type="number" min="20" max="100" />
							</div>
							<div className="col-xs-12 col-lg-6 number-input-box">
								<label htmlFor="chest">Chest: </label>
								<input value={this.state.chest} onChange={this.handleInputChange} name="chest" type="number" min="20" max="100" />
							</div>
							<div className="col-xs-12 col-lg-6 number-input-box">
								<label htmlFor="hip">Hip: </label>
								<input value={this.state.hip} onChange={this.handleInputChange} name="hip" type="number" min="20" max="100" />
							</div>
							<div className="col-xs-12 col-lg-6 number-input-box">
								<label htmlFor="shoulder">Shoulder: </label>
								<input value={this.state.shoulder} onChange={this.handleInputChange} name="shoulder" type="number" min="20" max="100" />
							</div>
							<div className="col-xs-12 col-lg-6 number-input-box">
								<label htmlFor="underbust">Under Bust: </label>
								<input value={this.state.underbust} onChange={this.handleInputChange} name="underbust" type="number" min="20" max="100" />
							</div>
							<div className="col-xs-12 col-lg-6 number-input-box">
								<label htmlFor="upperarm">Upper Arm: </label>
								<input value={this.state.upperarm} onChange={this.handleInputChange} name="upperarm" type="number" min="20" max="100" />
							</div>
							<div className="col-xs-12 col-lg-6 number-input-box">
								<label htmlFor="waist">Waist: </label>
								<input value={this.state.waist} onChange={this.handleInputChange} name="waist" type="number" min="20" max="100" />
							</div>
							<div className="col-xs-12 col-lg-6 number-input-box">
								<label htmlFor="shouldertobust">High Point Shoulder to Bust Point: </label>
								<input value={this.state.shouldertobust} onChange={this.handleInputChange} name="shouldertobust" type="number" min="20" max="100" />
							</div>
							<div className="col-xs-12 col-lg-6 number-input-box">
								<label htmlFor="shouldertowaist">High Point Shoulder to Waist: </label>
								<input value={this.state.shouldertowaist} onChange={this.handleInputChange} name="shouldertowaist" type="number" min="20" max="100" />
							</div>
							<div className="col-xs-12 col-lg-6 number-input-box">
								<label htmlFor="shouldertoknee">High Point Shoulder to Knee: </label>
								<input value={this.state.shouldertoknee} onChange={this.handleInputChange} name="shouldertoknee" type="number" min="20" max="100" />
							</div>
							<div className="col-xs-12 col-lg-6 number-input-box">
								<label htmlFor="shouldertoground">High Point Shoulder to Ground: </label>
								<input value={this.state.shouldertoground} onChange={this.handleInputChange} name="shouldertoground" type="number" min="20" max="100" />
							</div>
					</div>
				<h2 className="order-header">Step 2: What's your height</h2>
					<select name="height" value={this.state.height} onChange={this.handleInputChange} className="form-control">
						<optgroup label="Select Height...">
						  <option value="46">4'6"</option>
						  <option value="47">4'7"</option>
						  <option value="48">4'8"</option>
						  <option value="49">4'9"</option>
						  <option value="410">4'10"</option>
						  <option value="411">4'11"</option>
						  <option value="50">5'0"</option>
						  <option value="51">5'1"</option>
						  <option value="52">5'2"</option>
						  <option value="53">5'3"</option>
						  <option value="54">5'4"</option>
						  <option value="55">5'5"</option>
						  <option value="56">5'6"</option>
						  <option value="57">5'7"</option>
						  <option value="58">5'8"</option>
						  <option value="59">5'9"</option>
						  <option value="510">5'10"</option>
						  <option value="511">5'11"</option>
						  <option value="60">6'0"</option>
						  <option value="61">6'1"</option>
						  <option value="62">6'2"</option>
						  <option value="63">6'3"</option>
						  <option value="64">6'4"</option>
						  <option value="65">6'5"</option>
						  <option value="66">6'6"</option>
						  <option value="67">6'7"</option>
						  <option value="68">6'8"</option>
						  <option value="69">6'9"</option>
						  <option value="610">6'10"</option>
						  <option value="611">6'11"</option>
						</optgroup>
					</select>

				<h2 className="order-header">Step 3: Contact Info</h2>

				<div className="form-group form-group-country">
					<label className="hidden control-label" htmlFor="country">Please select a country</label>
					<select
						value={this.state.country}
						onChange={this.handleInputChange}
						name="country"
						id="countryInput"
						className="form-control"
						placeholder="Country" ></select>
				</div>

				<div className="form-group form-group-name">
					<label className="hidden control-label" htmlFor="name">Please enter your name</label>
					<input
						name="name"
						value={this.state.name}
						onChange={this.handleInputChange}
						type="text"
						className="form-control"
						placeholder="Name"
						required/>
				</div>
				<div className="form-group form-group-email">
					<label className="hidden control-label" htmlFor="email">Please enter your email</label>
					<input
						name="email"
						value={this.state.email}
						onChange={this.handleInputChange}
						type="email"
						className="form-control"
						placeholder="Email"
						required/>
				</div>
				<div className="form-group">
					<input
						name="phoneNumber"
						value={this.state.phoneNumber}
						onChange={this.handleInputChange}
						type="tel"
						className="form-control"
						placeholder="Phone No." aria-required="true"/>
				</div>
				<div className="form-group">
					<input
						name="age"
						value={this.state.age}
						onChange={this.handleInputChange}
						type="number"
						className="form-control"
						placeholder="Age" aria-required="true"/>
				</div>

				<button
					type="button"
					className="btn btn-primary"
					onClick={this.onSubmit}>
					Submit Order
				</button>
				</form>
			</div>
		)
	}
}

export default PriceRequest;
