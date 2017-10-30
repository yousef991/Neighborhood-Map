var map;

var locations = [{
    id: 0,
    title: 'park',
    location: {
        lat: 24.771113,
        lng: 46.73771
    }
}, {
    id: 1,
    title: 'Water Splash',
    location: {
        lat: 24.774021,
        lng: 46.758016
    }
}, {
    id: 2,
    title: 'Granada center mall',
    location: {
        lat: 24.7680175,
        lng: 46.7146045
    }
}, {
    id: 3,
    title: ' Al Nakheel Mall ',
    location: {
        lat: 24.774501,
        lng: 46.709206
    }
}, {
    id: 4,
    title: 'Water Splash ',
    location: {
        lat: 24.774113,
        lng: 46.738902
    }
}, ];
var markers = [];

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 24.774265,
                lng: 46.738586
            },
            zoom: 13,
            mapTypeControl: false
        });
            function clc(){
              populateInfoWindow(this, Infowindow);
			}
        var bounds = new google.maps.LatLngBounds();
        var Infowindow = new google.maps.InfoWindow();
        for (var i = 0; i < locations.length; i++) {
            var position = locations[i].location;
            var title = locations[i].title;
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
            marker.addListener('click', clc);

        }
			
        map.fitBounds(bounds);
        ko.applyBindings(new ViewModel());

        function populateInfoWindow(marker, infowindow) {
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
}
