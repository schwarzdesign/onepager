

$(document).ready(function() {
  
  // the location we want to GeoCode
  var location = '';

  var street = $( "#street" ).text();
  var city = $( "#city" ).text();


  // we are using MapQuest's Nominatim service
  var geocode = 'https://nominatim.openstreetmap.org/search?format=json&q=' + street + '+' + city;

  // use jQuery to call the API and get the JSON results
  $.getJSON(geocode, function(data) {
    // get lat + lon from first match
    var latlng = [data[0].lat, data[0].lon]
    //console.log(latlng);

    // let's stringify it
    var latlngAsString = latlng.join(',');
    //console.log(latlngAsString);

    // the full results JSON
    console.log(data);
    
    var lat = data[0]['lat'];
    var lon = data[0]['lon'];
    var bbox = data[0]['boundingbox'];

    console.log(bbox);
    console.log("lat: " + lat + " lng: " + lon);
    //////////////////////////////////////////////////////////  2 /////////////////////  0 //////////////// 3 ///////////////// 1
    //https://www.openstreetmap.org/export/embed.html?bbox=6.950402855873109%2C50.94062801382923%2C6.953042149543763%2C50.942084881272606&layer=hot&marker=50.941356453257136%2C6.951722502708435

    var map_request = "https://www.openstreetmap.org/export/embed.html?bbox=" + bbox[2] + "%2C" + bbox[0] + "%2C" + bbox[3] + "%2C" + bbox[1] + "&layer=hot&marker=" + lat + "%2C" + lon;
    $("#osm_map").attr("src", map_request);
  });
  

});