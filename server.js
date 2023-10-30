const express = require ('express');
const sequelize = require ('./Connection/config');
 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded ({ extended: true}));

sequelize.sync({ force: false }).then(() => {
    // Tells us we're in the server 
    app.listen(PORT, () => console.log("You're logged in"));
});