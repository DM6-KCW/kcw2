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



    //endpoint for adding blogs

    // app.post('/api/addblog', function(req, res){
    //     const db = app.get('db');
    //     db.addBlog([id, title, moment().format('MMMM/DD/YY h:mm:ss A'), imgurl, text])
    //     .then(function(response){
    //         // db.addBlog([2, "Hello!", moment().format('MMMM/DD/YY h:mm:ss A'), "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/image.png", "Heres some neat birds"])
    //
    //         res.status(200).json(response);
    //     })
    // })


}
