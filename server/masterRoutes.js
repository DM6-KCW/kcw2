//require the routes here
//const exampleRoute = require(./features/example/exampleRoutes.js)
const nodemailerRoute = require('./features/nodemailer/nodemailerRoute');
const dbManageRoute = require('./features/dbManage/dbManageRoute');
const s3Route = require('./features/s3/s3');
module.exports = function(app){
//export the routes here
//exampleRoute(app);
nodemailerRoute(app);
dbManageRoute(app);
s3Route(app);
}
