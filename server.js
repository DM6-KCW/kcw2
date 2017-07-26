const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');

const port = 4000;
const config = require('./server/config');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(json());

app.use('/', express.static(__dirname + '/public'));

app.get('/tacos', function(req, res) {
    res.json('Fish Taco');
});

app.listen(port, function(){
    console.log('listening on port ' + port);
});
