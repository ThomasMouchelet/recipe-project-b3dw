const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const authController = {
    signup: async (req, res) => {
        const user = req.body
        const hashPassword = await bcrypt.hash(user.password, 10)
        user.password = hashPassword
        const newUser = await User.create(user)
        delete newUser.password
        res.send(user)
    },
    signin: async (req, res) => {
        // find user by email
        // if user exists
            // bcrypt compare password
            // if password matches
            // send hello
        // else
            // send error
    }
}

module.exports = authController;