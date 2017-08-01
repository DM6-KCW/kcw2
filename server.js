const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');
const nodemailer = require('nodemailer');
const massive = require('massive');

const port = 4000;
const config = require('./server/config');
const collections = require('./server/collections')

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
    //do at start every time
    //creates the tables if they dont exist
    // db.createTables();
    //(blog_id, title, posttime, img_url, posttext)
    // db.addBlog([1, "hi there", new Date(), "http://i.stack.imgur.com/WCveg.jpg", "i like to see people without clothes"])
    // db.addBlog([2, "Hello!", new Date(), "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/image.png", "Heres some neat birds"])

});

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(json());

app.get('/api/disneyCollection', collections.getDisneyCollection);
app.get('/api/moonlightCollection', collections.getMoonlightCollection);
app.get('/api/getDress', collections.getDress); 

masterRoutes(app);


app.listen(port, function(){
    console.log('listening on port ' + port);
});
