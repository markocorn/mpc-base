//Connect to the database
const mongoose = require('mongoose');
const config = require('./config.json');

mongoose.connect("mongodb://" + config.db.host);

//On connection
mongoose.connection.on('connected', () => {

});

const servicePrediction = require('./services/prediction');

servicePrediction.fetchWeatherForecast().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});