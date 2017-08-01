module.exports =  {
	getDisneyCollection: function(req, res, next){
		db = req.app.get('db');
		db.getDisneyCollection().then(function(response){
			res.status(200).json(response);
		})
	},

	getMoonlightCollection: function(req, res, next) {
		db = req.app.get('db');
		db.getMoonlightCollection().then(function(response) {
			res.status(200).json(response);
		})
	},

	getDress: function (req, res, next) {
		db = req.app.get('db');
		db.getDress([req.query.dress_id]).then(function (response) {
			res.status(200).json(response);
		})
	}
}
