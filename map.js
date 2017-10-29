var map;

var locations = [
  {id: 0, title: 'park', location: {lat: 24.771113, lng: 46.73771}},
  {id: 1, title: 'Water Splash', location: {lat: 24.774021, lng: 46.758016}},
  {id: 2, title: 'Granada center mall', location: {lat: 24.7680175, lng: 46.7146045}},
  {id: 3, title: ' Al Nakheel Mall ', location: {lat: 24.774501, lng: 46.709206}},
  {id: 4, title: 'Water Splash ', location: {lat: 24.774113, lng: 46.738902}},
];
      // Create a new blank array for all the listing markers.
var markers = [];
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 24.774265, lng: 46.738586},
    zoom: 13,
    mapTypeControl: false
  });
  // These are the real estate listings that will be shown to the user.
  // Normally we'd have these in a database instead.
  var bounds = new google.maps.LatLngBounds();
  var Infowindow = new google.maps.InfoWindow();
  // The following group uses the location array to create an array of markers on initialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    // Create a marker per location, and put into markers array.
     var marker = new google.maps.Marker({
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i,
      map: map
    });
    
     bounds.extend(marker.position);
    //console.log(marker)
    // Push the marker to our array of markers.
   // markers.push(marker);
   
   locations[i].marker = marker;
    // Create an onclick event to open an infowindow at each marker.
    marker.addListener('click', function() {
      populateInfoWindow(this, Infowindow);
    });

  }
  map.fitBounds(bounds);
  ko.applyBindings( new ViewModel());
/*        document.getElementById('show-listings').addEventListener('click', showListings);
        document.getElementById('Penthouse').addEventListener('Penthouse', Penthouse);
        document.getElementById('Water Splash').addEventListener('click', Chelsea);
        document.getElementById('Union').addEventListener('click', Union);
        document.getElementById('Village').addEventListener('click', Village);
        document.getElementById('Village').addEventListener('click', TriBeCa);
          */
}
      // This function populates the infowindow when the marker is clicked. We'll only allow
      // one infowindow which will open at the marker that is clicked, and populate based
      // on that markers position.
function populateInfoWindow(marker, infowindow) {
// Check to make sure the infowindow is not already opened on this marker.
if (infowindow.marker != marker) {
  infowindow.marker = marker;
  infowindow.setContent('<div>' + marker.title + '</div>');
  infowindow.open(map, marker);
  // Make sure the marker property is cleared if the infowindow is closed.
  infowindow.addListener('closeclick', function() {
  infowindow.marker = null;
  });
}
}
 /*       
      // This function will loop through the markers array and display them all.
      function showListings() {
       
        // Extend the boundaries of the map for each marker and display the marker
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }
      // This function will loop through the listings and hide them all.
*/
      /*
      function Penthouse() {
        for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[0].position);
        locations[0].title;
        }
      }
        
        
             function Chelsea() {
        for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[1].position);
        locations[1].title;
                 }
                           }
        
              function Union() {
        for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[2].position);
        locations[2].title;
        }
      }
        
        
              function Village() {
        for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[3].position);
        locations[3].title;
        }
      }
        
              function TriBeCa() {
        for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[4].position);
        locations[4].title;
        }
      }
*/