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

        city.innerHTML =   weatherData.name + ', ' + weatherData.sys.country;
        temperature.innerHTML =  + convertToCelsius(weatherData.main.temp) + "°";
        minTemperature.innerHTML =  + convertToCelsius(weatherData.main.temp_min) + "°";
        maxTemperature.innerHTML =  + convertToCelsius(weatherData.main.temp_max) + "°";
        weatherDescription.innerHTML = ""
            + weatherData.weather[0].description.charAt(0).toUpperCase()
            + weatherData.weather[0].description.slice(1);
        
        switchIcon(weatherData.weather[0].id);
        

    } catch (error) {
        console.error(error);
    }
}

//`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`

// Kelvin -> Celsius
function convertToCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
}

//
const weatherContainer = document.querySelector('div');

//Weather Div
const weatherDiv = document.createElement('div');
weatherDiv.classList.add("weatherDiv")

//Which City
const city = document.createElement('div');
city.classList.add('city')
//city.innerHTML = "City:";
weatherDiv.appendChild(city);
weatherContainer.appendChild(weatherDiv);

//Current Temperature
const temperature = document.createElement('div');
temperature.classList.add('temperatureCurrent')
//temperature.innerHTML = "Current Temperature: ";
weatherDiv.appendChild(temperature);

//Min Temperature
const minTemperature = document.createElement('div');
minTemperature.classList.add('temperatureMin')
//minTemperature.innerHTML = "Min Temperature: ";
weatherDiv.appendChild(minTemperature);

//Max Temperature
const maxTemperature = document.createElement('div');
maxTemperature.classList.add('temperatureMax')
//maxTemperature.innerHTML = "Max Temperature: ";
weatherDiv.appendChild(maxTemperature);

//Weather Description
const weatherDescription = document.createElement('div');
weatherDescription.classList.add('weatherDescription')
//weatherDescription.innerHTML = "Weather Description: ";
weatherDiv.appendChild(weatherDescription);

//User Input
const cityInput = document.getElementById('city');

//Get Weather Button
const weatherButton = document.querySelector('button');
weatherButton.addEventListener('click', getWeatherData);

//Icon div
const weatherIconDiv = document.createElement('i');
weatherIconDiv.setAttribute("id","weatherIcon")
//weatherIconDiv.classList.add('weatherIcon');

weatherDiv.appendChild(weatherIconDiv);

//Icon switch function
function switchIcon(rangeId) {
    weatherIconDiv.className = "";
    switch(true) {
        case rangeId >= 200 && rangeId <= 232:            
            weatherIconDiv.setAttribute("class", "wi wi-thunderstorm")
            break;

        case rangeId >= 300 && rangeId <= 321:            
            weatherIconDiv.setAttribute("class", "wi wi-sprinkle")
            break;

        case rangeId >= 500 && rangeId <= 531:            
            weatherIconDiv.setAttribute("class", "wi wi-rain")
            break;

        case rangeId >= 600 && rangeId <= 622:            
            weatherIconDiv.setAttribute("class", "wi wi-snow")
            break;

        case rangeId >= 701 && rangeId <= 781:            
            weatherIconDiv.setAttribute("class", "wi wi-fog")
            break;

        case rangeId === 800:            
            weatherIconDiv.setAttribute("class", "wi wi-day-sunny")
            break;

        case rangeId >= 801 && rangeId <= 804:            
            weatherIconDiv.setAttribute("class", "wi wi-cloudy")
            break;
        
    }
}

//Weather Background Images
const weatherBackgrounds = [
    { name: "BaseWeather" , src: "../Images/BaseWeather2.jpg"},
    { name: "Snow" , src: "../Images/blizzards.jpg"},
    { name: "Clear" , src: "../Images/clearsky.jpg"},
    { name: "Clouds" , src: "../Images/cloudy.jpg"},
    { name: "Drizzle" , src: "../Images/Drizzle.jpg"},
    { name: "Fog" , src: "../Images/foggy.jpg"},
    { name: "Rain" , src: "../Images/Rain.jpg"},
    { name: "Thunderstorm" , src: "../Images/Thunderstorm.jpg"}
]


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