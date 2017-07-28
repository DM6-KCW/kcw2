const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');
const nodemailer = require('nodemailer');
const massive = require('massive');

const port = 4000;
const config = require('./server/config');

const masterRoutes = require('./server/masterRoutes');
/*
config file setup:

var config = {};

config.email = '';
config.pass = '';

config.bucketName = '';
config.accessKeyId = '';
config.secretAccessKey = '';
config.region = '';
config.signatureVersion = '';

config.postgres = '';

module.exports = config;
*/

// Configure the library with your API keys and info


const app = express();

massive(config.postgres).then(function(db){
    app.set('db', db);
})

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(json());

app.get('/api/disneyCollection', collections.getDisneyCollection);
app.get('/api/moonlightCollection', collections.getMoonlightCollection); 

masterRoutes(app);


app.listen(port, function(){
    console.log('listening on port ' + port);
});
