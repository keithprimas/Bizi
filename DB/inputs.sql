CREATE DATABASE IF NOT EXISTS inputs_db;

USE inputs_db;

CREATE TABLE IF NOT EXISTS inputs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(255),
  email_address VARCHAR(255),
  phone_number VARCHAR(255),
  user_location VARCHAR(255),
  personal VARCHAR(255),
  title VARCHAR(255),
  company VARCHAR(255),
  userId INT,
  FOREIGN KEY (userId) REFERENCES user(id)
);