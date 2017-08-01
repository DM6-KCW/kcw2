module.exports = function(app) {


    app.get('/api/blogs', function(req, res){
        const db = app.get('db');
        db.get5Blogs([0]).then(function(response){
            res.status(200).json(response);
        })
    })

    app.get('/api/blogs/:blog_id', function(req, res){
        const db = app.get('db');
        db.get1Blogs([req.params.blog_id]).then(function(response){
            res.status(200).json(response);
        })
    })

    app.get('/api/allblogs', function(req, res){
        const db = app.get('db');
        db.getallblogs().then(function(response){
            res.status(200).json(response);
        })
    })


}
