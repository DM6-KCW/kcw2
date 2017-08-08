const nodemailer = require('nodemailer');
// const config = require('./config');
module.exports = {
	transporter: nodemailer.createTransport({
	    service: 'gmail',
	    auth: {
	        user: process.env.EMAIL,
	        pass: process.env.PASS
	    }
	})
};
