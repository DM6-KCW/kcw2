const moment = require('moment');


module.exports = function(app) {

//BLOGS START--------------------------------//
    //get 5 blogs
    app.get('/api/blogs', function(req, res){
        const db = app.get('db');
        db.get5Blogs([0]).then(function(response){
            res.status(200).json(response);
        })
    })

    //get a blog
    app.get('/api/blogs/:blog_id', function(req, res){
        const db = app.get('db');
        db.get1Blogs([req.params.blog_id]).then(function(response){
            res.status(200).json(response);
        })
    })

    //get all blogs
    app.get('/api/allblogs', function(req, res){
        const db = app.get('db');
        db.getallblogs().then(function(response){
            res.status(200).json(response);
        })
    })

    //deleting a blog
    app.delete('/api/blogs/delete/:blog_id', function(req, res){
        const db = app.get('db');
        db.deleteBlog([req.params.blog_id]).then(function(response){
            res.status(200).json(response);
        })
    })


    //endpoint for adding blogs

    app.post('/api/addblog', function(req, res){
        const db = app.get('db');

        db.addBlog([req.query.title, moment().format('MMMM/DD/YY h:mm:ss A'), req.query.image, req.query.description])
        .then(function(response){
            // db.addBlog(["Hello!", moment().format('MMMM/DD/YY h:mm:ss A'), "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/image.png", "Heres some neat birds"])
            // console.log(response);
            res.status(200).json(response);
        })
    })
//BLOGS END------------------------------------//


//ORDERS START----------------------------------//
    app.get('/api/getOrders', function(req, res, next){
        const db = app.get('db');
        db.getOrders().then(function (response){
            res.status(200).json(response);
        })
    })

    app.delete('/api/deleteOrder/:order_id', function (req, res, next) {
        const db = app.get('db');
        db.deleteOrder([req.params.order_id]).then(function(response){
            res.status(200).json(response)
        })
    })
//ORDERS END--------------------------------//



    app.post('/api/addmedia',  function(req, res) {
    //add a media

        const db = app.get('db');
        db.addMedia([req.query.imgurl, req.query.description, req.query.url])
            .then(response => {
                res.status(200).json(response);
            })

    })

    //delete media by id
    app.delete('/api/media/delete/:media_id', function(req, res){
        const db = app.get('db');
        db.deleteMedia([req.params.media_id]).then(function(response){
            res.status(200).json(response);
        })
    })

    //get all the medias
    app.get('/api/allmedia', function(req, res){
        const db = app.get('db');
        db.getallmedia().then(function(response){
            res.status(200).json(response);
        })
    })
//MEDIA END-------------------------------------//

};
