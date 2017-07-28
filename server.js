const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');
const nodemailer = require('nodemailer');
const aws = require('aws-sdk');
const massive = require('massive');

const port = 4000;
const config = require('./server/config');
const contact = require('./server/contact');
const nodemailer_config = require('./server/nodemailer_config')

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
aws.config.update({
   accessKeyId: config.accessKeyId,
   secretAccessKey: config.secretAccessKey,
   region: config.region,
   signatureVersion: config.signatureVersion
})

const app = express();

massive(config.postgres).then(function(db){
    app.set('db', db);
})

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(json());
app.use('/', express.static(__dirname + '/public'));


app.post('/api/contact', contact.sendContactEmail);

app.get('/api/s3', function(req, res, next) {
    console.log(req.query);
   const s3 = new aws.S3()
   const s3Config = {
      Bucket: config.bucketName,
      Key: req.query.file_name,
      Expires: 60,
      ContentType: req.query.file_type,
      ACL: 'public-read'
   }
   s3.getSignedUrl('putObject', s3Config, function(err, response) {
      if (err) {
         return next(err)
      }
      const data = {
         signed_request: response,
         url: `https://s3.${config.region}.amazonaws.com/${config.bucketName}/${req.query.file_name}.${req.query.file_type}`
      }
      console.log(data);
      return res.status(200).json(data)
   })

})

app.listen(port, function(){
    console.log('listening on port ' + port);
});
