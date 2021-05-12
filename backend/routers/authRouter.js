const express = require('express');
const validator = require('validator');
const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt');
const auth = require('../middlewares/auth');
const authRouter = express.Router();

// signup
authRouter.post('/signup', async (req, res) => {
    try {

        // get user credientials
        const { name, email, password, cpassword } = req.body;

        // check every fields
        if (!name || !email || !password || !cpassword) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // check passwords are same or not
        if (password !== cpassword) {
            return res.status(400).json({ error: 'Passwords are not the same' });
        }

        // validat email
        const isValidEmail = validator.isEmail(email);

        if (!isValidEmail) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        // check user already exists
        const isExist = await UserModel.findOne({ email });

        if (isExist) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // register user to DB
        const registerUser = await UserModel({
            name, email, password
        });

        const saveUser = await registerUser.save();

        // check register or not
        if (!saveUser) {
            return res.status(404).json({ error: 'User not registerd!' })
        }

        res.json({ message: 'Signup successfull.' })

    } catch (error) {
        res.status(404).json({ error: 'Something went wrong. please try again later.' });
    }

});


// signin
authRouter.post('/signin', async (req, res) => {
    try {

        const { email, password } = req.body;

        // check fields
        if (!email || !password) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        // validat email
        const isValidEmail = validator.isEmail(email);

        if (!isValidEmail) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        const userInfo = await UserModel.findOne({ email });

        if (!userInfo) {
            return res.status(404).json({ error: 'Invalid credientials' })
        }

        // match password
        const isMatch = await bcrypt.compare(password, userInfo.password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credientials' })
        }

        const token = await userInfo.generateLoginToken();

        // remove password and token
        userInfo.password = undefined;
        userInfo.tokens = undefined;

        res.json({ message: 'Login successfull.', token, userInfo })


    } catch (error) {
        res.status(404).json({ error: 'Something went wrong. please try again later.' });
    }
});


// logout
authRouter.delete('/logout', auth, async (req, res) => {
    try {
        const logoutUser = await UserModel.findByIdAndUpdate({ _id: req.rootUser?._id }, { $pull: { tokens: { token: req.token } } });

        if (!logoutUser) {
            return res.status(404).json({ error: 'Invalid request' });
        }

        res.status(201).json({ message: 'Logout successfull.' });

    } catch (error) {
        res.status(404).json({ error: 'Something went wrong. please try again later.' });
    }
});


// Logout all
authRouter.put('/logoutall', auth, async (req, res) => {
    try {

        const logoutUser = await UserModel.findByIdAndUpdate({ _id: req.rootUser?._id }, { $set: { tokens: [] } });

        if (!logoutUser) {
            return res.status(404).json({ error: 'Invalid request' });
        }

        res.status(201).json({ message: 'Logout all devices successfull.' });

    } catch (error) {
        res.status(404).json({ error: 'Something went wrong. please try again later.' });
    }
});

module.exports = authRouter;