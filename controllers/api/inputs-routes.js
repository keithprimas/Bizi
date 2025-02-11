const router = require('express').Router();
const Input = require('../../Models/input');

// route to create a card - this is fine
router.post('/', async (req, res) => {
  try {
    const inputData = await Input.create({
      user_name: req.body.user_name,
      email_address: req.body.email_address,
      phone_number: req.body.phone_number,
      user_location: req.body.user_location,
      personal: req.body.personal,
      title: req.body.title,
      company: req.body.company,
      userId: req.body.userId,
    });
    res.status(200).json(inputData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
    // sending the data to the Model so user info can be updated with new data in the database.
    try {
      const input = await Input.update(
        {
            user_name: req.body.user_name,
            email_address: req.body.email_address,
            phone_number: req.body.phone_number,
            user_location: req.body.user_location,
            personal: req.body.personal,
            title: req.body.title,
            company: req.body.company,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
     
      res.status(200).json(input);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;

/*
 * This file defines the routes for handling input-related operations using Express.js.
 * 
 * - The first route is a POST request to create a new input record in the database.
 *   It expects the request body to contain user_name, email_address, phone_number, 
 *   user_location, personal, title, company, and userId fields. If the creation is 
 *   successful, it responds with a 200 status and the created input data. If there 
 *   is an error, it responds with a 400 status and the error message.
 * 
 * - The second route is a PUT request to update an existing input record in the database 
 *   based on the provided id parameter. It expects the request body to contain user_name, 
 *   email_address, phone_number, user_location, personal, title, and company fields. If 
 *   the update is successful, it responds with a 200 status and the updated input data. 
 *   If there is an error, it responds with a 500 status and the error message.
 * 
 * Both routes interact with the Input model to perform the necessary database operations.
 */