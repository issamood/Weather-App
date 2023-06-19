//Imports
import './style.css'
import Wallpaper from './images/wallpaperalt.jpg'
import addWeatherContainer from './addWeatherContainer';
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
 Adding date value in correct format to weather object.
*/

//-------------------------
//Functions
//-------------------------
//getWeatherData takes latitude and longitude and returns weather data for that location
async function getWeatherData(lat,lon){
    //We take the lat and lon parameters and concat it into the url string, so we can change locations instead having have one only.
    let url = "https://api.pirateweather.net/forecast/2076VPUwHo5rFjS0/";
    url = url.concat(lat + "%2C");
    url = url.concat(lon + "?units=us");

    //Fetch API url response
    const response = await fetch(url,{mode:'cors'})
    //Convert from JSON
    const weather = await response.json();

    //Get date and format it correctly *CURRENTLY WORKING ON*
    const date = "";
    const dateInfo = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const today = days[date.getDay()]

    date.concat(today + ", ");
    
    const weatherObject = {
        summary: weather.currently.summary,
        temperature: weather.currently.temperature,
        location: "New York City",
        date: ""
    }

    //Return an object with all the data extract from API into it, because trying to pass promises through functions is no fun.
}

//Get current weather temperature
async function getTemperature(lat, lon){
    let weather = await getWeatherData(lat, lon);
    console.log(weather.currently.temperature);
}


//Trying to convert address to lat lon
//Check if geolocation API exists in browser

//-------------------------
//Logic Application
//-------------------------

//Global Variables
const weatherData = getWeatherData(40.7128,-74.0060);

const container = document.createElement('div');
container.id = "container";

const backgroundCover = new Image();
backgroundCover.classList.add("backgroundCover");
backgroundCover.src = Wallpaper;
document.body.appendChild(backgroundCover);

//Create mainWeatherContainer
addWeatherContainer(weatherData);
