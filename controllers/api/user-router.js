const router = require('express').Router();
const { User } = require('../../Models'); 

router.post('/', async (req, res) => {
    try {
        // Create a new user
        const newPerson = await User.create({
            email: req.body.email, 
            password: req.body.password,
        });

        // Store user data in the session
        req.session.email = newPerson.email; 
        req.session.logIn = true;

        // need to add res.session.save() => {} using a res.status(200).json

        res.json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
    // need to add vaildpassword to check password
    // need a way to log the user out of the hompage by using a redirect 
});

module.exports = router;
