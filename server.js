require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');
const nodemailer = require('nodemailer');
const massive = require('massive');
const moment = require('moment');
const port = process.env.PORT;
// const config = require('./server/config');
const collections = require('./server/collections')
const session = require('express-session');

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

massive(process.env.DATABASE_URL).then(function(db){
    app.set('db', db);
    console.log(db.tables)
    //do at start every time
    //creates the tables if they dont exist
    // db.createTables();
    //(blog_id, title, posttime, img_url, posttext)
    // db.addBlog([1, "hi there", moment().format('MMMM/DD/YY h:mm:ss A'), "http://i.stack.imgur.com/WCveg.jpg", "i like to see people without clothes"])
    // db.addBlog([2, "Hello!", moment().format('MMMM/DD/YY h:mm:ss A'), "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/image.png", "Heres some neat birds"])


});

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false
}));

app.use(json());

app.get('/api/disneyCollection', collections.getDisneyCollection);
app.get('/api/moonlightCollection', collections.getMoonlightCollection);
app.get('/api/getDress', collections.getDress);
app.post('/api/placeOrder', collections.placeOrder);

masterRoutes(app);


app.listen(port, function(){
    console.log('listening on port ' + port);
});
