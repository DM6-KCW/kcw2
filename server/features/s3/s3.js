const aws = require('aws-sdk');
const config = require('../../config');

// Configure the library with your API keys and info
aws.config.update({
   accessKeyId: config.accessKeyId,
   secretAccessKey: config.secretAccessKey,
   region: config.region,
   signatureVersion: config.signatureVersion
})

module.exports = function(app){
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
}
