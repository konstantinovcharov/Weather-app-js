import 'weather-icons/css/weather-icons.css'

const Api_Key = "214d6c547f73c737ca58bf19a465d50f";

async function getWeatherData(e) {
    e.preventDefault();

    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${Api_Key}`, { mode: 'cors' }
        );
        const weatherData = await response.json();
        console.log(weatherData);

        city.innerHTML = "City: " + weatherData.name + ', ' + weatherData.sys.country;
        temperature.innerHTML = "Current Temperature: " + convertToCelsius(weatherData.main.temp) + "°";
        minTemperature.innerHTML = "Min Temperature: " + convertToCelsius(weatherData.main.temp_min) + "°";
        maxTemperature.innerHTML = "Max Temperature: " + convertToCelsius(weatherData.main.temp_max) + "°";
        weatherDescription.innerHTML = "Weather Description: "
            + weatherData.weather[0].description.charAt(0).toUpperCase()
            + weatherData.weather[0].description.slice(1);

    } catch (error) {
        console.error(error);
    }
}

// Kelvin -> Celsius
function convertToCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
}

//
const weatherContainer = document.querySelector('div');

//Weather Div
const weatherDiv = document.createElement('div');

//Which City
const city = document.createElement('div');
city.classList.add('city')
city.innerHTML = "City:";
weatherDiv.appendChild(city);
weatherContainer.appendChild(weatherDiv);

//Current Temperature
const temperature = document.createElement('div');
temperature.classList.add('temperatureCurrent')
temperature.innerHTML = "Current Temperature: ";
weatherDiv.appendChild(temperature);

//Min Temperature
const minTemperature = document.createElement('div');
minTemperature.classList.add('temperatureMin')
minTemperature.innerHTML = "Min Temperature: ";
weatherDiv.appendChild(minTemperature);

//Max Temperature
const maxTemperature = document.createElement('div');
maxTemperature.classList.add('temperatureMax')
maxTemperature.innerHTML = "Max Temperature: ";
weatherDiv.appendChild(maxTemperature);

//Weather Description
const weatherDescription = document.createElement('div');
weatherDescription.classList.add('weatherDescription')
weatherDescription.innerHTML = "Weather Description: ";
weatherDiv.appendChild(weatherDescription);

//User Input
const cityInput = document.getElementById('city');

//Get Weather Button
const weatherButton = document.querySelector('button');
weatherButton.addEventListener('click', getWeatherData);


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