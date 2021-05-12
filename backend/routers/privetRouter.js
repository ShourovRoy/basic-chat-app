const express = require('express');
const auth = require('../middlewares/auth');
const privetRouter = express.Router();

// Check route
privetRouter.get('/authenticate', auth, async (req, res) => {
    try {
        res.json({ message: 'Authenticated' });
    } catch (error) {
        res.status(404).json({ error: 'Something went wrong. please try again later.' });
    }
});

module.exports = privetRouter;