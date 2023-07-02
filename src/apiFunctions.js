//Get form input
function getFormInput(){
    //Get input data
    const input = document.querySelector('.formInput');
    const location = input.value;

    //Format location name for api call
    if (location){
      return location
      .replace(/(\s+$|^\s+)/g, '')
      .replace(/(,\s+)/g, ',')
      .replace(/(\s+,)/g, ',')
      .replace(/\s+/g, '+'); 
    }
    return '';
}

async function getCoordinate(location){
    let url = "https://api.api-ninjas.com/v1/geocoding?city="
    url.concat(location);

    const response = await fetch(url, {mode: "cors"});
    const geocodeData = await response.json();

    const coordinate = {
        latitude: geocodeData.latitude,
        longitude: geocodeData.longitude
    }

    return coordinate;
}