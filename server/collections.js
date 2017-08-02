const config = require('./config');
const nodemailer = require('nodemailer');
const nodemailer_config = require('./nodemailer_config');

module.exports =  {
	getDisneyCollection: function(req, res, next){
		db = req.app.get('db');
		db.getDisneyCollection().then(function(response){
			res.status(200).json(response);
		})
	},

	getMoonlightCollection: function(req, res, next) {
		db = req.app.get('db');
		db.getMoonlightCollection().then(function(response) {
			res.status(200).json(response);
		})
	},

	getDress: function (req, res, next) {
		db = req.app.get('db');
		db.getDress([req.query.dress_id]).then(function (response) {
			res.status(200).json(response);
		})
	},

	placeOrder: function(req, res, next){
		console.log(req.body);
		let order_email = {
			from: 'Mithi Kalra Admin',
			to: config.email,
			subject: "New Order.",
			html: '<ul><li>Dress ID: ' + req.body.dress_id + '</li>' +
					'<li>Standard Size: ' + req.body.standardSize + '</li>'+
					'<ul>Custom Size: ' +
						'<li>Bust: '+req.body.bust + '</li>' +
						'<li>Chest: '+req.body.chest + '</li>' +
						'<li>Hip: '+req.body.hip + '</li>' +
						'<li>Shoulder: '+req.body.shoulder + '</li>' +
						'<li>Under Bust: '+req.body.underbust + '</li>' +
						'<li>Upper Arm: '+req.body.upperarm + '</li>' +
						'<li>Waist: '+req.body.waist + '</li>' +
						'<li>Shoulder to Bust: '+req.body.shouldertobust + '</li>' +
						'<li>Shoulder to Waist: '+req.body.shouldertowaist + '</li>' +
						'<li>Shoulder to Knee: '+req.body.shouldertoknee + '</li>' +
						'<li>Shoulder to Ground: '+req.body.shouldertoground + '</li>' +
					'</ul>' +
					'<li>Height: ' + req.body.height + '</li>' +
					'<li>Country: ' + req.body.country + '</li>' +
					'<li>Name: ' + req.body.name + '</li>' +
					'<li>Email: ' + req.body.email + '</li>' +
					'<li>Phone Number: ' + req.body.phone_number + '</li>' +
					'<li>Age: ' + req.body.age + '</li>' +
					'</ul>'
		}
		nodemailer_config.transporter.sendMail(order_email, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message %s sent: %s', info.messageId, info.response);
		});
		res.status(200).send('hello');
	}
}
