angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope) {



/*

  L.mapbox.accessToken = 'pk.eyJ1Ijoic3luY2FkZC1rcmlzIiwiYSI6IlUwc2kwM2MifQ.jWhx9OKyfi0h7llHzxug1g';

var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/examples.map-i87786ca/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
    attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'


       var map = L.map('map', {
         center: [38.87827, -77.07111],
         zoom: 15,
         layers: [mapboxTiles]
       });

       map.attributionControl.setPrefix('');

       var locationIcon = L.icon({
         iconUrl: 'img/LocationDisplay@2x.png',

         iconSize: [27, 27],
         iconAnchor: [13.5, 13.5]
       });


       function onSuccess(position) {
         var pos = L.latLng(position.coords.latitude, position.coords.longitude);

         if($scope.currentLocationMarker){
           map.removeLayer($scope.currentLocationMarker);
         }

         $scope.currentLocationMarker = L.marker(pos,{icon: locationIcon});
         $scope.currentLocationMarker.addTo(map).bindPopup("You are here.");
       }

       function onError(error) {
         //clear the current marker
         if($scope.currentLocationMarker){
           map.removeLayer($scope.currentLocationMarker);
         }
       }

       var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { maximumAge: 3000, timeout: 15000, enableHighAccuracy: true });
*/

})



.controller('CheckinCtrl', function($scope) {

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
