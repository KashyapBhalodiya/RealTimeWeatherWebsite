// nodemon src/app.js -e js, hbs
// -e: extension , we are running js and hbs all the files

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

// public static path and templates template path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials")

// whenever we are working with hbs we are create a folder and the folder name is views
app.set('view engine', 'hbs');

// partials
app.set('views', template_path);
hbs.registerPartials(partials_path);

// We can use the static website
app.use(express.static(static_path));

// Routing
app.get("", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render('404error', {
        errorMsg: 'Oops! page not found...'
    });
});

app.listen(8080, () => {
    console.log("Server is running on port number 8080.");
});