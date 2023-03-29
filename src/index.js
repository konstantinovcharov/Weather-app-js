import 'weather-icons/css/weather-icons.css';
import { switchIcon } from './changeBgIcon';


async function getWeatherData(e) {
    e.preventDefault();

    const Api_Key = "214d6c547f73c737ca58bf19a465d50f";

    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${Api_Key}`, { mode: 'cors' }
        );
        const weatherData = await response.json();
        console.log(weatherData);

        city.innerHTML = weatherData.name + ', ' + weatherData.sys.country;
        temperature.innerHTML = convertToCelsiusFromKelvin(weatherData.main.temp);
        minTemperature.innerHTML = convertToCelsiusFromKelvin(weatherData.main.temp_min);
        maxTemperature.innerHTML = convertToCelsiusFromKelvin(weatherData.main.temp_max);
        weatherDescription.innerHTML = ""
            + weatherData.weather[0].description.charAt(0).toUpperCase()
            + weatherData.weather[0].description.slice(1);

        switchIcon(weatherData.weather[0].id);
        cityInput.value = "";
        isFahrenheit = false;
        convertButton.textContent = "Convert to Fahrenheit";
//"°"
    } catch (error) {
        console.error(error);
    }
}


// Kelvin -> Celsius
export function convertToCelsiusFromKelvin(tempK) {
    let tempC = Math.floor(tempK - 273.15);
    return tempC;
}


const weatherContainer = document.querySelector('div');

const cityInput = document.getElementById('city');

//Weather Div
const weatherDiv = document.createElement('div');
weatherDiv.classList.add("weatherDiv");

//Which City
const city = document.createElement('div');
city.classList.add('city')
//city.innerHTML = "City:";
weatherDiv.appendChild(city);

//Current Temperature
const temperature = document.createElement('div');
temperature.classList.add('temperatureCurrent', 'temperature')
//temperature.innerHTML = "Current Temperature: ";
weatherDiv.appendChild(temperature);

//Min Max Div
const minMaxDiv = document.createElement('div');
minMaxDiv.classList.add("minMaxDiv");

//Min Temperature
const minTemperature = document.createElement('span');
minTemperature.classList.add('temperatureMin', 'temperature')
//minTemperature.innerHTML = "Min Temperature: ";
minMaxDiv.appendChild(minTemperature);

//Max Temperature
const maxTemperature = document.createElement('span');
maxTemperature.classList.add('temperatureMax', 'temperature')
//maxTemperature.innerHTML = "Max Temperature: ";
minMaxDiv.appendChild(maxTemperature);

weatherDiv.appendChild(minMaxDiv);

//Weather Description
const weatherDescription = document.createElement('div');
weatherDescription.classList.add('weatherDescription')
//weatherDescription.innerHTML = "Weather Description: ";
weatherDiv.appendChild(weatherDescription);

//Get Weather Button
const weatherButton = document.querySelector('button');
weatherButton.addEventListener('click', getWeatherData);

//Icon div
const weatherIconDiv = document.createElement('i');
weatherIconDiv.setAttribute("id", "weatherIcon")
//weatherIconDiv.classList.add('weatherIcon');
weatherDiv.appendChild(weatherIconDiv);

weatherContainer.appendChild(weatherDiv);

const body = document.querySelector('body');


//Convert C <-> F Button
const convertButton = document.createElement('button');
convertButton.classList.add("convertBtn");
convertButton.textContent = "Convert to Fahrenheit";
weatherDiv.appendChild(convertButton);

convertButton.addEventListener('click', () => {
    const temperatureElements = document.querySelectorAll('.temperature');

    temperatureElements.forEach(temperature => {
        const temperatureValue = parseFloat(temperature.textContent);

        if (isFahrenheit) {
            const celsiusValue = (temperatureValue - 32) * (5 / 9);
            temperature.textContent = celsiusValue.toFixed(0);
            convertButton.textContent = 'Convert to Fahrenheit';
        } else {
            const fahrenheitValue = temperatureValue * (9 / 5) + 32;
            temperature.textContent = fahrenheitValue.toFixed(0);
            convertButton.textContent = 'Convert to Celsius';
        }
    });

    isFahrenheit = !isFahrenheit;
})




let isFahrenheit;




//Weather Background Images
// const weatherBackgrounds = [
//     { name: "BaseWeather" , src: "../Images/BaseWeather2.jpg"},
//     { name: "Snow" , src: "../Images/blizzards.jpg"},
//     { name: "Clear" , src: "../Images/clearsky.jpg"},
//     { name: "Clouds" , src: "../Images/cloudy.jpg"},
//     { name: "Drizzle" , src: "../Images/Drizzle.jpg"},
//     { name: "Fog" , src: "../Images/foggy.jpg"},
//     { name: "Rain" , src: "../Images/Rain.jpg"},
//     { name: "Thunderstorm" , src: "../Images/Thunderstorm.jpg"}
// ]




// const weatherIcon = document.createElement('i');
// weatherIcon.classList.add("wi", "wi-day-sunny")
// weatherDiv.appendChild(weatherIcon);
// const countryCode = document.createElement('h1');

// function getWeatherIcon(weatherId) {
//     switch (true) {
//         case weatherId >= 801 && weatherId <= 804:
//     }
// }

// const weatherData = {
        //     city: weatherDataJSON.name,
        //     country: weatherDataJSON.sys.country,
        //     temperature: convertToCelsius(weatherDataJSON.main.temp) + "°",
        //     temperatureMin: convertToCelsius(weatherDataJSON.main.temp_min),
        //     temperatureMax: convertToCelsius(weatherDataJSON.main.temp_max),
        //     weatherDescription: weatherDataJSON.weather[0].description
        // }