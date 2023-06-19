export default function geocode(){
  //This is only needed to get user's lat and lon on first visit.
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr);
    } else {
        alert("Geolocation API not available")
    }
    
    //If api works, then get user lati and long.
    function getPosSuccess(pos){
        var geoLat = pos.coords.latitude.toFixed(5);
        var geoLng = pos.coords.longitude.toFixed(5);
        var geoAcc = pos.coords.accuracy.toFixed(1);
    }
    
    //Handle error cases
    function getPosErr(err){
        switch (err.code) {
            case err.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
            case err.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
            case err.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
            default:
              alert("An unknown error occurred.");
          }
    }
}