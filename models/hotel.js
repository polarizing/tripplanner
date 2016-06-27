var Sequelize = require('sequelize');
var Place = require('./place');
var db = require('./index');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	num_stars: {
		type: Sequelize.INTEGER,
	},
	amenities: {
		type: Sequelize.TEXT
	}
});

Hotel.belongsTo(Place);

module.exports = Hotel;