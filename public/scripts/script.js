// GOOGLE MAPS API PLUGIN

var isScrollable;
var map;

function initialize_gmaps() {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
    var isDraggable = $(document).width() > 768 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false
    isScrollable = $(document).width() > 768 ? true : false;
    var minty = [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"off"},{"color":"#e7f7ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"lightness":"0"},{"saturation":"0"},{"color":"#e7f7ef"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#5cf1b9"},{"lightness":"0"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#5cf1b9"}]},{"featureType":"poi.attraction","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#54dfab"},{"lightness":"25"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#a688e6"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"weight":"0.01"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"},{"color":"#54dfab"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#a688e6"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.text.fill","stylers":[{"color":"#54dfab"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"color":"#54dfab"},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"lightness":"45"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"57"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"lightness":"73"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"lightness":"33"},{"hue":"#3e00ff"}]},{"featureType":"transit.line","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.bus","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.rail","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#becef0"}]}]
    var apple = [{"featureType":"landscape.man_made","elementType":"all","stylers":[{"color":"#faf5ed"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5a6"}]},{"featureType":"road","elementType":"all","stylers":[{"weight":"1.00"},{"gamma":"1.8"},{"saturation":"0"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ffb200"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"0"},{"gamma":"1"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"hue":"#b000ff"},{"saturation":"23"},{"lightness":"-4"},{"gamma":"0.80"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a0daf2"}]}]
 // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggable: isDraggable,
        scrollwheel: isScrollable,
        styles: apple
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");
    // initialize a new Google Map with the options
    map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });
    // Add the marker to the map by calling setMap()
    marker.setMap(map);

}

$(window).resize(function() {
    isScrollable = $(document).width() > 768 ? true : false;
    map.set('scrollwheel', isScrollable);
})

$(document).ready(function() {
    initialize_gmaps();
});

// CUSTOM JS


// INITIALIZE SEMANTIC-UI ELEMENTS
$('.ui.dropdown')
          .dropdown()
        ;

$('.ui.rating')
  .rating('disable')
;

        var tripOptionHotel = $('.trip-option-hotel');
        var tripOptionRestaurant = $('.trip-option-restaurant');
        var tripOptionActivities = $('.trip-option-activities');
        var menuOptionHotel = $('.menu-option-hotel');
        var menuOptionRestaurant = $('.menu-option-restaurant');
        var menuOptionActivities = $('.menu-option-activities');

        menuOptionRestaurant.click(function() {
            tripOptionHotel.hide();
            tripOptionRestaurant.show();
            tripOptionActivities.hide();
            removeFocusClass();
            menuOptionRestaurant.children('a').addClass('focus');
        })

        menuOptionActivities.click(function() {
            tripOptionHotel.hide();
            tripOptionRestaurant.hide();
            tripOptionActivities.show();
            removeFocusClass();
            menuOptionActivities.children('a').addClass('focus');
        })

        menuOptionHotel.click(function() {
            tripOptionHotel.show();
            tripOptionRestaurant.hide();
            tripOptionActivities.hide();
            removeFocusClass();
            menuOptionHotel.children('a').addClass('focus');
        })


        function removeFocusClass() {
            menuOptionHotel.children('a').removeClass('focus');
            menuOptionRestaurant.children('a').removeClass('focus');
            menuOptionActivities.children('a').removeClass('focus');
        }
