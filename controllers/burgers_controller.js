var burger = require('./../models/burger.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		burger.all(function(data) {
			res.render('index', {
				burgers: data
			});
		})
				
	})

	app.post('/', function(req, res) {
		res.redirect('/');
	})
}
