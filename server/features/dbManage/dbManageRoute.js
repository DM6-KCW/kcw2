 module.exports = function(app) {


    app.get('/api/blogs', function(req, res){
        const db = app.get('db');
        db.getBlogs().then(function(response){
            res.status(200).json(response);
        })
    })

}
