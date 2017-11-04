var ViewModel = function() {
  var self = this;
  
  self.filterInput = ko.observable('');
  self.obsLocations = ko.observableArray(locations);

  self.openWindow = function(location) {
    console.log(location)
    google.maps.event.trigger(location.marker,'click');
      
  }
  
  self.filterLocations = ko.computed(function() {
     var filter = self.filterInput().toLowerCase();
     console.log(filter);
     // make the filter work.
    return ko.utils.arrayFilter(self.obsLocations(), function(location) {
      var match = location.title.toLowerCase().indexOf(filter) !== -1;
      location.marker.setVisible(match)
      // filter markers
      return match;
    });
  })
  

}