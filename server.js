const express = require('express');
const path = require('path');
const session = require('express-session');
const Sequelize = require('./Connection/config');
const exphbs = require('express-handlebars');
const helpers = require('./Utils/helpers');
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;


// Set up Handlebars view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Serve static files
app.use(express.static(path.join(__dirname,'/Public')));

// Use express-session middleware
app.use(
  session({
    secret: 'super-secret', // Replace with a secure secret key for session management
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.render('main', {layout: 'index'});
});
app.get('/resuME/Public/login.js', (req, res) => {
  res.setHeader('Content-Type', 'text/javascript');
  // Serve the JavaScript file here
});




Sequelize.sync({ force: false }).then(() => {
  // Server is listening
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
});





