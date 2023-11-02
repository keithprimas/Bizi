const express = require ('express');
const path = require ('path');
const sequelize = require ('./Connection/config');
const session = require ('express-session'); // need to call session 
 // need connect sequelize session npm 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded ({ extended: true}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
    // Tells us we're in the server 
    app.listen(PORT, () => console.log("You're logged in"));
});