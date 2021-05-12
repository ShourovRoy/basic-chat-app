const express = require('express');
const publicRouter = express.Router();

publicRouter.get('/', async (req, res) => {
    try {
        res.json({ data: "Hello I am from backend" });
    } catch (error) {
        console.error(error);
    }
});

module.exports = publicRouter;