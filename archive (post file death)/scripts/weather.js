const weatherData = [
    { city: "New York", temperature: 75, condition: "Sunny" },
    { city: "Los Angeles", temperature: 85, condition: "Sunny" },
    { city: "Chicago", temperature: 60, condition: "Cloudy" },
    { city: "Houston", temperature: 90, condition: "Rainy" },
    { city: "Phoenix", temperature: 100, condition: "Sunny" }
];

function getWeather(city) {
    for (let i = 0; i < weatherData.length; i++) {
        if (weatherData[i].city === city) {
            return `The weather in ${city} is ${weatherData[i].temperature}°F and ${weatherData[i].condition}.`;
        }
    }
    return `weather data for ${city} is not available.`;
}

const citiesToCheck = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Miami"];

for (let j = 0; j < citiesToCheck.length; j++) {
    console.log(getWeather(citiesToCheck[j]));
}