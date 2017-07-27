const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');
const nodemailer = require('nodemailer');

const port = 4000;
const config = require('./server/config');
const contact = require('./server/contact');
const nodemailer_config = require('./server/nodemailer_config')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(json());

app.use('/', express.static(__dirname + '/public'));

app.post('/api/contact', contact.sendContactEmail);

app.listen(port, function(){
    console.log('listening on port ' + port);
});
