const router = require('express').Router();
const { User } = require('../../Models'); 

router.post('/', async (req, res) => { // need to redo this 
   try {
    const dbUserData = await User.create ({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    });

    req.session.save(() => {
        req.session.loggedIn = true;

        res.status(200).json(dbUserData);
    }); 
   } catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
});


router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            return res.status(400).json({ alert: 'Incorrect email or password!' });
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            return res.status(400).json({ alert: 'Incorrect email or password' });
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            return res.status(200).json({ user: dbUserData, message: 'Welcome!' });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
});

module.exports = router;
