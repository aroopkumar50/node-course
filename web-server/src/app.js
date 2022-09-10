const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handelebars engine and views locations
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "Aroop Kumar",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Aroop Kumar",
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help Page",
        name: "Aroop Kumar",
        message: "Ask for help with app usage",
    });
});

app.get("/weather", (req, res) => {
    res.send("<h1>Weather Forecast</h1>");
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Aroop Kumar",
        errorMessage: "Help article not found!",
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Aroop Kumar",
        errorMessage: "404 Page!",
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});
