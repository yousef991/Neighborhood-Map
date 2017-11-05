var map;
var locations = [{
	id: 0,
	title: 'Howard University',
	address: '2400 Sixth St NW, Washington, DC 20059, USA',
	location: {
		lat: 38.919662988,
		lng: -77.018666592
	}
}, {
	id: 1,
	title: 'Meridian Hill Park',
	address: '16th St NW & W Street NW, Washington, DC 20009, USA',
	location: {
		lat: 38.920822,
		lng: -77.035713
	}
}, {
	id: 2,
	title: 'Lincoln Memorial',
	address: '2 Lincoln Memorial Cir NW, Washington, DC 20037, USA',
	location: {
		lat: 38.8564,
		lng: -76.94592
	}
}, {
	id: 3,
	title: ' Washington National Opera',
	address: '2700 F St NW, Washington, DC 20566, USA ',
	location: {
		lat: 38.9737439,
		lng: -77.0162238
	}
}, {
	id: 4,
	title: 'Atlas Performing Arts Center ',
	address: '1333 H St NE, Washington, DC 20002, USA',
	location: {
		lat: 38.9000309,
		lng: -76.9896469
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

	function clc() {
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
		}, 2100);
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			// ADD API REQUEST
			// setcontent and open infowindow in done or success of 
			// AJAX request
			var query = marker.title,
				dt = 'jsonp',
				wikiBase = 'https://en.wikipedia.org/w/api.php',
				wikiUrl = wikiBase + '?action=opensearch&search=' + query + '&format=json&callback=wikiCallback';
			var wikiRequestTimeout = setTimeout(function() {
				$wikiElem.text('failed to get Wikipedia resources');
			}, 8000);
			$.ajax({
				url: wikiUrl,
				dataType: dt,
				success: function(locations) {
					console.log(locations);
					// set the info window content
					infowindow.setContent(title + address + locations);
					// open the info window
					infowindow.open(map, marker);
					clearTimeout(wikiRequestTimeout);
				}
			});
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