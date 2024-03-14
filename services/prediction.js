const axios = require('axios');
const config = require('../config.json');

exports.fetchWeatherForecast = () => {
    return new Promise((resolve, reject) => {
        //https://api.open-meteo.com/v1/forecast?latitude=46.1293&longitude=14.4908&hourly=temperature_2m&start_date=2024-03-14&end_date=2024-03-15
        axios.get(config.WeatherForecast.url, {
            params: {
                latitude: config.WeatherForecast.location.latitude,
                longitude: config.WeatherForecast.location.longitude,
                hourly: "temperature_2m",
                //Start day is 1 day back from today
                start_date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0],
                //End day is today plus 7 days
                end_date: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0]
            }
        })
            .then(response => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
