var connection = require('./connection.js');

var orm = {
	all: function(cb){
		var queryString = 'SELECT * FROM burgers'; 
		connection.query(queryString, cb)
	}
}

module.exports = orm; 