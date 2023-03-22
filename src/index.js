import 'weather-icons/css/weather-icons.css'

console.log("running")

const Api_Key = "214d6c547f73c737ca58bf19a465d50f";

async function getWeatherData(e) {
    e.preventDefault();

    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${Api_Key}`, { mode: 'cors' }
        );
        const weatherData = await response.json();
        console.log(weatherData);
        // const weatherData = {
        //     city: weatherDataJSON.name,
        //     country: weatherDataJSON.sys.country,
        //     temperature: convertToCelsius(weatherDataJSON.main.temp) + "°",
        //     temperatureMin: convertToCelsius(weatherDataJSON.main.temp_min),
        //     temperatureMax: convertToCelsius(weatherDataJSON.main.temp_max),
        //     weatherDescription: weatherDataJSON.weather[0].description
        // }

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



function convertToCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
}

// function getWeatherIcon(weatherId) {
//     switch (true) {
//         case weatherId >= 801 && weatherId <= 804:
//     }
// }


const weatherDiv = document.createElement('div');

const city = document.createElement('h1');
city.innerHTML = "City:";
weatherDiv.appendChild(city);
document.body.appendChild(weatherDiv);
// const weatherIcon = document.createElement('i');
// weatherIcon.classList.add("wi", "wi-day-sunny")
// weatherDiv.appendChild(weatherIcon);
// const countryCode = document.createElement('h1');

const temperature = document.createElement('h2');
temperature.innerHTML = "Current Temperature: ";
weatherDiv.appendChild(temperature);

const minTemperature = document.createElement('h2');
minTemperature.innerHTML = "Min Temperature: ";
weatherDiv.appendChild(minTemperature);

const maxTemperature = document.createElement('h2');
maxTemperature.innerHTML = "Max Temperature: ";
weatherDiv.appendChild(maxTemperature);

const weatherDescription = document.createElement('h3');
weatherDescription.innerHTML = "Weather Description: ";
weatherDiv.appendChild(weatherDescription);

//User Input
const cityInput = document.getElementById('city');

//Get Weather Button
const weatherButton = document.querySelector('button');
weatherButton.addEventListener('click', getWeatherData);




