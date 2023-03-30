import Snow from './Images/blizzards-min.jpg';
import ClearSky from './Images/clearsky-min.jpg';
import Clouds from './Images/cloudy-min.jpg';
import Drizzle from './Images/Drizzle-min.jpg';
import Fog from './Images/foggy-min.jpg';
import Rain from './Images/Rain-min.jpg';
import ThunderStorm from './Images/Thunderstorm-min.jpg';

//Icon switch function
const body = document.querySelector('body');

export function switchIcon(rangeId) {
    const weatherIconDiv = document.querySelector('i');
    
    weatherIconDiv.className = "";
    body.style.backgroundPosition = "";
    body.style.backgroundSize = "";
    body.style.backgroundImage = "";
    

    switch (true) {
        case rangeId >= 200 && rangeId <= 232:
            weatherIconDiv.setAttribute("class", "wi wi-thunderstorm")
            changeBackgroundImage("center", "cover", ThunderStorm)
            break;

        case rangeId >= 300 && rangeId <= 321:
            weatherIconDiv.setAttribute("class", "wi wi-sprinkle")
            changeBackgroundImage("center", "cover", Drizzle)
            break;

        case rangeId >= 500 && rangeId <= 531:
            weatherIconDiv.setAttribute("class", "wi wi-rain")
            changeBackgroundImage("center", "cover", Rain)
            break;

        case rangeId >= 600 && rangeId <= 622:
            weatherIconDiv.setAttribute("class", "wi wi-snow")
            changeBackgroundImage("center", "cover", Snow)
            break;

        case rangeId >= 701 && rangeId <= 781:
            weatherIconDiv.setAttribute("class", "wi wi-fog")
            changeBackgroundImage("center", "cover", Fog)
            break;

        case rangeId === 800:
            weatherIconDiv.setAttribute("class", "wi wi-day-sunny")
            changeBackgroundImage("center", "cover", ClearSky)
            break;

        case rangeId >= 801 && rangeId <= 804:
            weatherIconDiv.setAttribute("class", "wi wi-cloudy")
            changeBackgroundImage("center", "100vw auto", Clouds)
            break;

    }
}

//Change Background elements
export function changeBackgroundImage(position, size, imageUrl) {
    body.style.backgroundPosition = position;
    body.style.backgroundSize = size;
    body.style.backgroundImage = `url(${imageUrl})`;
}