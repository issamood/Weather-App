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
    url = url.concat(location);

    const response = await fetch(url, {mode: "cors", headers: { 'X-Api-Key': 'SKQddcY0gwMgsYsXyZgHjw==LXqrkdAui3lta99z'}});
    const geocodeData = await response.json();

    console.log(geocodeData);
    const coordinate = {
        latitude: geocodeData[0].latitude,
        longitude: geocodeData[0].longitude
    }
    return coordinate;
}

export {
    getFormInput,
    getCoordinate
}