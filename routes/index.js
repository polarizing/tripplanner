var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

// var Place = require('./models/place')
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Hotel = require('../models/hotel');

router.get('/', function(req, res, next) {
	
	var data = {};
	Hotel.findAll()
	.then(function (dbHotels) {
	  data.dbHotels = dbHotels;
	  return Restaurant.findAll();
	})
	.then(function (dbRestaurants) {
	  data.dbRestaurants = dbRestaurants;
	  return Activity.findAll();
	})
	.then(function (dbActivities) {
	  res.render('index', {
	    hotels: data.dbHotels,
	    restaurants: data.dbRestaurants,
	    activities: dbActivities
	  });
	})
	.catch(next);

})

module.exports = router;