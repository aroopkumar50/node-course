const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (address == undefined) return console.log("No address provided!");

geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
        return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }

        console.log(location);
        console.log(forecastData);
    });
});
