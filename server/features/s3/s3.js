const aws = require('aws-sdk');
// const config = require('../../config');

// Configure the library with your API keys and info
aws.config.update({
   accessKeyId: process.env.ACCESSKEYID,
   secretAccessKey: process.env.SECRETACCESSKEY,
   region: process.env.REGION,
   signatureVersion: process.env.SIGNATUREVERSION
})

module.exports = function(app){
    app.get('/api/s3', function(req, res, next) {
        const s3 = new aws.S3()
        const s3Config = {
            Bucket: process.env.BUCKETNAME,
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
                url: `https://s3.${process.env.REGION}.amazonaws.com/${process.env.BUCKETNAME}/${req.query.file_name}`
            }
            return res.status(200).json(data)
        })

    })
}
