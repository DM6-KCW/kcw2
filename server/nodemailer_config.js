const nodemailer = require('nodemailer');
const config = require('./config')
module.exports = {
	transporter: nodemailer.createTransport({
	    service: 'gmail',
	    auth: {
	        user: config.email,
	        pass: config.pass
	    }
	})
}
