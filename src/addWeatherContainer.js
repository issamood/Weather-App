export default function addWeatherContainer(weatherObject){
    const container = document.createElement('div');

    container.classList.add('mainWeatherContainer');
    container.innerHTML = weatherObject.date;

    return container;
}