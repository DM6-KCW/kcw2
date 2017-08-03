module.exports = function(app) {
    app.get('/api/login', function(req,res) {
        console.log(req.query);
        const db = app.get('db');
        db.getAdmin().then(function(response) {
            // console.log(response);
            if( req.query.username === response[0].admin
                &&
                req.query.password === response[0].password
            )

            {
                req.session.loggedIn = true;
                res.status(200).json({answer:true});
            } else {
                res.json({answer: false});
            }
        })
        .catch( err =>  {
            res.json(err);
        })
    });

    app.get('/api/auth/', (req,res)=>{
        // console.log(req.session);
        res.status(200).json(req.session.loggedIn);
    })
};