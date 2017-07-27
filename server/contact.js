const config = require('./config');
const nodemailer = require('nodemailer');
const nodemailer_config = require('./nodemailer_config');

module.exports = {
	sendContactEmail: function(req, res, next){
	    let contact_email = {
	        from: req.body.sender_name + ' <' + req.body.email + '>',
	        to: config.email,
	        subject: req.body.subject,
	        text: req.body.message,
	        html: '<b>REPLY-TO: ' + req.body.email +'</b> <br/><br/>' + req.body.message
	    }
	    nodemailer_config.transporter.sendMail(contact_email, (error, info) => {
	        if (error) {
	            return console.log(error);
	        }
	        console.log('Message %s sent: %s', info.messageId, info.response);
	    });
	    res.json('nice');
	}
}
