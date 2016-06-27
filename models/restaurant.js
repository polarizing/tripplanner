var Sequelize = require('sequelize');
var Place = require('./place');
var db = require('./index');

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cuisine: {
		type: Sequelize.STRING,
	},
	price: {
		type: Sequelize.INTEGER
	}
});

Restaurant.belongsTo(Place);

module.exports = Restaurant;