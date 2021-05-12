const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');


const auth = async (req, res, next) => {
    try {

        // get token
        const { authorization } = await req.headers;

        // verifying token
        const token = await jwt.verify(authorization, process.env.SECRET_KEY);

        // checking if token is valid
        if (!token) {
            return res.status(401).json({ error: 'Please login.' });
        }

        // checking token and user in db
        const rootUser = await UserModel.findOne({ _id: token._id, "tokens.token": authorization }, { tokens: 0, password: 0 });

        if (!rootUser) {
            return res.status(401).json({ error: 'Please login.' });
        }

        // transfering credientials
        req.rootUser = rootUser;
        req.token = authorization;

        next();



    } catch (error) {
        return res.status(404).json({ error: 'Please login.' })
    }
};


module.exports = auth;