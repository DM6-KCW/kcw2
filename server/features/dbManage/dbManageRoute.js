const moment = require('moment');


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
    app.delete('/api/blogs/delete/:blog_id', function(req, res){
        const db = app.get('db');
        db.deleteBlog([req.params.blog_id]).then(function(response){
            res.status(200).json(response);
        })
    })



    //endpoint for adding blogs

    app.post('/api/addblog', function(req, res){
        console.log(req.query);
        const db = app.get('db');

        db.addBlog([req.query.title, moment().format('MMMM/DD/YY h:mm:ss A'), req.query.image, req.query.description])
        .then(function(response){
            // db.addBlog(["Hello!", moment().format('MMMM/DD/YY h:mm:ss A'), "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/image.png", "Heres some neat birds"])
            console.log(response);
            res.status(200).json(response);
        })
    })

    app.get('/api/getOrders', function(req, res, next){
        const db = app.get('db');
        db.getOrders().then(function (response){
            res.status(200).json(response);
        })
    })

    app.delete('/api/deleteOrder/:order_id', function (req, res, next) {
        const db = app.get('db'); 
        console.log(req.params.order_id);
        db.deleteOrder([req.params.order_id]).then(function(response){
            res.status(200).json(response)
        })
    })


}
