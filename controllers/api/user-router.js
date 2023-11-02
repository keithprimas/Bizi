const router = require('express').Router();
const { User } = require('../../Models'); 

router.post('/', async (req, res) => {
    try {
        // Create a new user
        const newUser = await User.create({
            email: req.body.email, 
            password: req.body.password,
        });

        // Store user data in the session
        req.session.email = newUser.email; 
        req.session.logIn = true;

        res.json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
