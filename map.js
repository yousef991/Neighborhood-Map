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

    
 var markers = [
    
    {
		position: {lat: 24.771113, lng: 46.73771},
		title: "park",
		search: "park",
        Area: "Almalqa"
	},
	{
		position: {lat: 24.774021, lng: 46.758016},
		title: "Water Splash",
		search: "Water Splash",
        Area: "Almalqa"
	},
	{
		position: {lat: 24.7680175, lng: 46.71460457},
		title: "Granada center mall",
		search: "Granada center mall",
        Area: "Almalqa"
	},
	{
		position: {lat: 24.774501, lng: 46.709206},
		title: "Al Nakheel Mall",
		search: "Al Nakheel Mall",
        Area: "Almalqa"
	},
	{
		position: {lat: 24.774113, lng: 46.738902},
		title: "Water Splash",
		search: "Water Splash",
        Area: "Almalqa"
	}
];

                    


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
                infowindow.setContent('<div>' + marker.title + marker.Area + '</div>');
               
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





/*



// arrays to hold copies of the markers and html used by the side_bar 
// because the function closure trick doesnt work there 
var gmarkers = [];
var map = null;

function initialize() {
    // create the map
    var myOptions = {
        zoom: 11,
        center: new google.maps.LatLng(51.519243, -0.126661),
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map-canvas-big"),
    myOptions);
    google.maps.event.addListener(map, 'click', function () {
        infowindow.close();
    });
    var point = new google.maps.LatLng(51.5608308012934, -0.0540925428914196);
    var marker = createMarker(point, " Clapton ", "<div class='scrittafumetto' id='proprieta_4940'><strong><div class='titolo'> Title</div></strong><br /><a class='mostra_vedi'>Vedi</a></span></div>");
    var point2 = new google.maps.LatLng(51.56, -0.05);

    var marker2 = createMarker(point2, " somewhere ", "<div class='scrittafumetto' id='proprieta_4941'><strong><div class='titolo'> Title</div></strong><br /><a class='mostra_mardi'>Mardi</a></span></div>");

}
google.maps.event.addDomListener(window, 'load', initialize);
var infowindow = new google.maps.InfoWindow({
    size: new google.maps.Size(150, 50)
});


function createMarker(latlng, name, html) {
    var contentString = html;
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: 'https://www.google.com/mapfiles/marker.png',
        zIndex: Math.round(latlng.lat() * -100000) << 5
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
    });
    // save the info we need to use later for the side_bar
    gmarkers.push(marker);
    // add a line to the side_bar html
    google.maps.event.addListener(marker, 'click', function (marker, i) {
        for (var i = 0; i < gmarkers.length; i++) {
            gmarkers[i].setIcon('https://www.google.com/mapfiles/marker.png'); // set back to default
        }
        this.setIcon('https://www.google.com/mapfiles/marker_green.png');
        var marker_id = marker.id;


        if ($('#new-overview-main_' + marker_id).css('display') == 'block') {
            $('#new-overview-main_' + marker_id).css('display', 'none');
        } else {
            $('#new-overview-main_' + marker_id).css('display', 'block');
        }

    });

}*/