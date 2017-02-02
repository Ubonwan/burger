var orm = require('../config/orm.js');

module.exports = {
	all: function(cb) {
		orm.all(function (err, result)
		{
			if (err) throw err;
			cb(result)
		})
	}	
}