const router = require('express').Router();
const Input = require('../../Models'); 

// route to create a card
router.post('/', async (req, res) => {
  try {
    const inputData = await Input.create({
      user_name: req.body.user_name,
      email_address: req.body.email_address,
      phone_number: req.body.phone_number,
      location: req.body.location,
      personal: req.body.personal,
      title: req.body.title,
      company: req.body.company,
    });
    res.status(200).json(inputData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Need to finish this - Alejandro 
router.get('/', async (req, res) =>{
  res.render('inputs', {layout: 'main' })
});
console.log('Please redirect to home page please ')



router.put('/:id', async (req, res) => {
    // sending the data to the Model so user info can be updated with new data in the database.
    try {
      const input = await Input.update(
        {
            user_name: req.body.user_name,
            email_address: req.body.email_address,
            phone_number: req.body.phone_number,
            location: req.body.location,
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