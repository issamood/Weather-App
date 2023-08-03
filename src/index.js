//Imports
import './style.css'
import * as apiFunc from './apiFunctions';
import Wallpaper from './images/wallpaperalt.jpg'
import clearday from './images/clear-day.svg'
import clearnight from './images/clear-night.svg'
import cloudy from './images/cloudy.svg'
import fog from './images/fog.svg'
import partlycloudyday from './images/partly-cloudy-day.svg'
import partlycloudynight from './images/partly-cloudy-night.svg'
import rain from './images/rain.svg'
import sleet from './images/sleet.svg'
import snow from './images/snow.svg'
import wind from './images/wind.svg'
import search from './images/search.svg'
import humidity from './images/humidity.svg'
import rainchance from './images/rainchance.svg'


/*
To do list
-----------
Create daily foreast chart container

*/

//-------------------------
//Functions
//-------------------------
//Create mainWeatherContainer
async function createMainContainer(latitude, longitude) {
    //If container already exists, wipe it out
    if (document.querySelector('#mainWeatherContainer')){
        const mainWeatherContainer = document.querySelector('#mainWeatherContainer');
        mainWeatherContainer.textContent = '';
        mainWeatherContainer.remove();
    }

    const weather = await apiFunc.getWeatherPromise(latitude,longitude); //THIS IS HOW YOU TAKE API INFO

    //Get date and format it correctly 
    const date = new Date(weather.currently.time * 1000);

    //We % 100 because I only want the last two digits of the year.
    let year = date.getFullYear() % 100;
    let dayDate = date.getDate();

    //Gets the 'st, nd, rd, th' end for numbers
    const day = function (d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    //Get day and month name.
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dayName = days[date.getDay()];
    let month = months[date.getMonth()];

    //Format current date and put into object
    let currentDate = `${dayName}, ${dayDate}${day(dayDate)} ${month} '${year}`;

    //Format time
    let currentTime = date.toLocaleTimeString('en-US', {timeZone : `${weather.timezone}`});
    if (currentTime.length == 11){
        currentTime = currentTime.slice(0,5) + ' ' + currentTime.slice(8,11);
    }
    else {
        currentTime = currentTime.slice(0,4) + ' ' + currentTime.slice(7,10);
    }

    //Get location name
    let reverseGeocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDbXcxX3nPlmvxH1PGA5fEL1qKLweQmkEY`
    const reverseResponse = await fetch(reverseGeocodeUrl, {mode: "cors"})
    const addressData = await reverseResponse.json();
    console.log(addressData);
    const address = await addressData.results[0].address_components[2].long_name;

    //Creating the HTML element
    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'mainWeatherContainer';

    const summaryElement = document.createElement('h2');
    summaryElement.innerHTML = weather.currently.summary;
    weatherContainer.appendChild(summaryElement);

    const locationElement = document.createElement('h1');
    locationElement.innerHTML = address;
    weatherContainer.appendChild(locationElement);

    const dateElement = document.createElement('p');
    dateElement.innerHTML = currentDate;
    weatherContainer.appendChild(dateElement);

    const timeElement = document.createElement('p');
    timeElement.innerHTML = currentTime;
    weatherContainer.appendChild(timeElement);

    const temperatureElement = document.createElement('h3');
    temperatureElement.innerHTML = weather.currently.temperature + "°F";
    weatherContainer.appendChild(temperatureElement);

    const weatherIconElement = document.createElement('img');
    const icon = `${weather.currently.icon}`;
    if (icon == 'clear-day') {
        weatherIconElement.src = clearday;
    } else if (icon == 'clear-night') {
        weatherIconElement.src = clearnight;
    } else if (icon == 'cloudy') {
        weatherIconElement.src = cloudy;
    } else if (icon == 'fog') {
        weatherIconElement.src = fog;
    } else if (icon == 'partly-cloudy-day') {
        weatherIconElement.src = partlycloudyday;
    } else if (icon == 'partly-cloudy-night') {
        weatherIconElement.src = partlycloudynight;
    } else if (icon == 'rain') {
        weatherIconElement.src = rain;
    } else if (icon == 'sleet') {
        weatherIconElement.src = sleet;
    } else if (icon == 'snow') {
        weatherIconElement.src = snow;
    } else if (icon == 'wind') {
        weatherIconElement.src = wind;
    }
    weatherContainer.appendChild(weatherIconElement);

    if(!document.querySelector('#form')){
        weatherContainer.appendChild(createForm());
    }

    //Return HTML element
    container.appendChild(weatherContainer);
};

async function createSecondContainer(latitude, longitude) {
    //Get weather API data
    const weather = await apiFunc.getWeatherPromise(latitude, longitude);

    //Create a container that displays humidity, chance of rain and wind speed
    const secondContainer = document.createElement('div');
    secondContainer.className = 'secondContainer';

    const humidityContainer = document.createElement('div');
    humidityContainer.className = 'humidityContainer';
    const humidityIcon = document.createElement('img');
    humidityIcon.src = humidity;
    const humidityInfo = document.createElement('div');
    humidityInfo.className = 'info';
    const humidityLabel = document.createElement('h1');
    humidityLabel.innerHTML = 'Humidity';
    const humidityValue = document.createElement('h1');
    humidityValue.innerHTML = weather.currently.humidity * 100 + '%';
    
    humidityInfo.appendChild(humidityLabel);
    humidityInfo.appendChild(humidityValue);
    humidityContainer.appendChild(humidityInfo);
    humidityContainer.appendChild(humidityIcon);
    
    const rainContainer = document.createElement('div');
    rainContainer.className = 'rainContainer';
    const rainIcon = document.createElement('img');
    rainIcon.src = rainchance;
    const rainInfo = document.createElement('div');
    rainInfo.className = 'info';
    const rainLabel = document.createElement('h1');
    rainLabel.innerHTML = 'Chance of Rain';
    const rainValue = document.createElement('h1');
    rainValue.innerHTML = weather.currently.precipProbability * 100 + '%';

    rainInfo.appendChild(rainLabel);
    rainInfo.appendChild(rainValue);
    rainContainer.appendChild(rainInfo);
    rainContainer.appendChild(rainIcon);

    const windContainer = document.createElement('div');
    windContainer.className = 'windContainer';
    const windIcon = document.createElement('img');
    windIcon.src = wind;
    const windInfo = document.createElement('div');
    windInfo.className = 'info';
    const windLabel = document.createElement('h1');
    windLabel.innerHTML = 'Wind Speed';
    const windValue = document.createElement('h1');
    windValue.innerHTML = weather.currently.windSpeed + ' m/h';

    windInfo.appendChild(windLabel);
    windInfo.appendChild(windValue);
    windContainer.appendChild(windIcon);
    windContainer.appendChild(windInfo);

    //Put into second container
    secondContainer.appendChild(humidityContainer);
    secondContainer.appendChild(rainContainer);
    secondContainer.appendChild(windContainer);

    container.appendChild(secondContainer);
}

//Create form for location input
function createForm(){
    //Search Location Bar
    const formContainer = document.createElement('form');
    formContainer.id = 'form';
    const formLabel = document.createElement('label');
    formLabel.setAttribute('for','location');

    const formInput = document.createElement('input');
    formInput.className = "formInput";
    formInput.setAttribute('type','text');
    formInput.id = "location";
    formInput.setAttribute('name','location');

    const formButton = document.createElement('button');
    const buttonIcon = document.createElement('img');

    buttonIcon.src = search;
    formButton.appendChild(buttonIcon);
    formButton.setAttribute('type','button');
    formButton.addEventListener('click', async () => {
        const location = apiFunc.getFormInput();

        const coordinate = await apiFunc.getCoordinate(location)

        createMainContainer(coordinate.latitude, coordinate.longitude);
    });
    formContainer.appendChild(formLabel);
    formContainer.appendChild(formInput);
    formContainer.appendChild(formButton);

    return formContainer;
}

async function getUserLocation(){
    async function success(pos){
        const crd = pos.coords;

        createMainContainer(crd.latitude, crd.longitude);
        createSecondContainer(crd.latitude, crd.longitude);
    }
    
    navigator.geolocation.getCurrentPosition(success);
    
}

//-------------------------
//Logic Application
//-------------------------
//Body Container
const container = document.createElement('div');
container.id = "container";

//Setting background image
document.body.style.backgroundImage = `url(${Wallpaper})`;

//Creating initial Main Weather Window Container
getUserLocation();

//Finally adding main container to body
document.body.appendChild(container);
