import './style.css'

//Setup Background



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
1.Figure out how to call the API and get data
Incorporate async


*/

async function getWeatherData(lat,lon){
    let url = "https://api.pirateweather.net/forecast/2076VPUwHo5rFjS0/";
    url = url.concat(lat + "%2C");
    url = url.concat(lon + "?units=us");

    const response = await fetch(url,{mode:'cors'})
    const weather = await response.json();

    console.log(weather.currently.temperature);
}

getWeatherData(40.7128,-74.0060);
