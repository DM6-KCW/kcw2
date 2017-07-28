const nodemailer_config = require('../../nodemailer_config')
const contact = require('../../contact');
module.exports = function(app) {

    app.post('/api/contact', contact.sendContactEmail);

}
