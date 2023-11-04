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
app.use(express.static(path.join(__dirname, 'View/layouts')));

// Use express-session middleware
app.use(
  session({
    secret: 'super-secret', // Replace with a secure secret key for session management
    resave: false,
    saveUninitialized: true,
  })
);

// Define your routes here
app.get('/', (req, res) => {
  res.render('index', { layout: 'login'});
});

// Other middleware and routes can be added here

Sequelize.sync({ force: false }).then(() => {
  // Server is listening
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
});
