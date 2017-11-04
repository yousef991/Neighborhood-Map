var map;

var locations = [{
    id: 0,
    title: 'park',
    address: 'Al-Malaz Area (Al-Ahsa St.)  12836',
    location: {
        lat: 24.771113,
        lng: 46.73771
    }
}, {
    id: 1,
    title: 'Water Splash',
    address: 'King Abdullah Rd (Turki Bin Ahmad Al Sadairi St)',
    location: {
    lat: 24.774021,
    lng: 46.758016
    }
}, {
    id: 2,
    title: 'Granada center mall',
    address: 'Eastern Ring Rd. (at Al Imam Saud Ibn Abdul Aziz Branch Rd)',
    location: {
        lat: 24.774501,
        lng: 46.709206
    }
}, {
    id: 3,
    title: ' Al Nakheel Mall ',
    address: 'Othman Bin Affan Rd (Imam Saud Ibn Abdul Aziz Rd.) ',
    location: {
     lat: 24.7680175,
     lng: 46.7146045
    }   
}, {
    id: 4,
    title: 'Al Hamra District Walk  ',
    address: 'Prince Mogrin ibn Abdulaziz St (Eastern Ring Rd)	',
    location: {
        lat: 24.774113,
        lng: 46.738902
    },
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
            var address = locations[i].address;
            var marker = new google.maps.Marker({
                position: position,
                title: title,
                animation: google.maps.Animation.DROP,
                id: i,
                map: map,
                address: address
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
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
              marker.setAnimation(null);
            }, 2100)
            if (infowindow.marker != marker) {
                 infowindow.marker = marker;
               // ADD API REQUEST
               // setcontent and open infowindow in done or success of 
               // AJAX request
              
                infowindow.setContent('<div>' + marker.title + marker.address + '</div>');
               
                infowindow.open(map, marker);
                // Make sure the marker property is cleared if the infowindow is closed.
                infowindow.addListener('closeclick', function() {
                    infowindow.marker = null;
                });
            }
        }
}
            //onerror
        function googleError() {
            alert("404 Page Not Found!");
            
        }

