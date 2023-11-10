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
            phone: req.body.phone,
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