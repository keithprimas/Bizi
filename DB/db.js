const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// Create a Sequelize instance and specify the database connection parameters
const sequelize = new Sequelize('login_db', 'root', '5ZAkQ*ob&', {
    host: 'localhost',
    dialect: 'mysql',
  });

// Define the 'User' model with hashed password field
const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      set(value) {
        // Hash the password before saving it
        const saltRounds = 10; // Adjust the number of salt rounds as needed for your security requirements
        const hashedPassword = bcrypt.hashSync(value, saltRounds);
        this.setDataValue('password', hashedPassword);
      },
    },
  });

  // Synchronize the model with the database to create the 'users' table if it doesn't exist
sequelize.sync()
.then(() => {
  console.log('Database and tables have been created.');
})
.catch((err) => {
  console.error('Error creating the database and tables: ' + err);
});

User.create({
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
    password: 'user_password', // This password will be hashed automatically
  })
    .then((user) => {
      console.log('User created with ID:', user.id);
    })
    .catch((err) => {
      console.error('Error creating user:', err);
    });
  

module.exports = { User };