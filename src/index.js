console.log("running")

const Api_Key = "214d6c547f73c737ca58bf19a465d50f";

async function getWeatherData() {
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=Sofia,BG&appid=${Api_Key}`, {mode: 'cors'}
    );
    const weatherData = await response.json();
    console.log(weatherData);
}

getWeatherData();