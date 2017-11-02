var ViewModel = function() {
  var self = this;
  self.obsLocations = ko.observableArray(locations);

  self.openWindow = function(location) {
    console.log(location)
    google.maps.event.trigger(location.marker,'click');
      
  }

}