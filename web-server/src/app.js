const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello express!<h1>");
});

app.get("/help", (req, res) => {
    res.send({
        name: "Weather App",
        title: "Help Page",
    });
});

app.get("/about", (req, res) => {
    res.send("<h2>About Page</h2>");
});

app.get("/show-weather", (req, res) => {
    res.send({
        location: "Pune",
        forecast: "Mild rain, 20 degrees."
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});
