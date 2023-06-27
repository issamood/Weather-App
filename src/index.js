//Imports
import './style.css'
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

/*
Figure out Weather API

How to get data for today
What kind of data to get
The day, temperature, the weather condition, high/low temps,
humidity, wind not as important but just extra data if needed

Search city function bar

Default location set to ip address location.

To do list
-----------
1.Figure out how to call the API and get data (finished)

No specific order
 -Take user city/zipcode/address
 -Get lat, lon from address
 -Create HTML elements

 CURRENTLY WORKING ON
 --------------------
Fixing undefined issue, really really annoying.
*/

//-------------------------
//Functions
//-------------------------
//Create mainWeatherContainer
async function createMainContainer(latitude, longitude) {
    let url = "https://api.pirateweather.net/forecast/2076VPUwHo5rFjS0/";
    url = url.concat(latitude + "%2C");
    url = url.concat(longitude + "?units=us");

    //Fetch API url response
    const response = await fetch(url, { mode: 'cors' })
    //Convert from JSON
    const weather = await response.json();

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
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = '';
    if (hours >= 12) {
        if (hours > 12) {
            hours -= 12;
        }
        ampm = 'p.m.'
    }
    else {
        ampm = 'a.m';
    }
    let currentTime = hours + ':' + minutes + ' ' + ampm;

    //Creating the HTML element
    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add('mainWeatherContainer');

    const summaryElement = document.createElement('h2');
    summaryElement.innerHTML = weather.currently.summary;
    weatherContainer.appendChild(summaryElement);

    const locationElement = document.createElement('h1');
    locationElement.innerHTML = "New York City"
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

    //Return HTML element
    container.appendChild(weatherContainer);
};

//Trying to convert address to lat lon
//Check if geolocation API exists in browser

//-------------------------
//Logic Application
//-------------------------
//Body Container
const container = document.createElement('div');
container.id = "container";

//Setting background image
document.body.style.backgroundImage = `url(${Wallpaper})`;

//Creating Main Weather Window Container
createMainContainer(40.7128, -74.0060);

//Finally adding main container to body
document.body.appendChild(container);
