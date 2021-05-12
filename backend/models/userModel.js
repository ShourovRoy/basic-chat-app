const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [{ token: { type: String, required: true } }]
});

// hsah the password
userSchema.pre('save', async function (next) {
    try {

        if (this.isModified("password")) {
            this.password = await bcrypt.hash(this.password, 13);
        }

        next();

    } catch (error) {
        return res.status(500).json({ error: 'Something went wrong. Please try again!' });
    }
});


// generate login Token
userSchema.methods.generateLoginToken = async function () {
    
    const token = await jwt.sign({ _id: this._id }, process.env.SECRET_KEY, {
        expiresIn: "1h"
    });

    this.tokens = await this.tokens.concat({ token });
    await this.save();

    return token
}


const UserModel = mongoose.model('user', userSchema);


module.exports = UserModel;