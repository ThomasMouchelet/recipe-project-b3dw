const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
    signup: async (req, res) => {
        const user = req.body
        const hashPassword = await bcrypt.hash(user.password, 10)
        user.password = hashPassword
        const newUser = await User.create(user)
        delete newUser.password
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.send({
            accessToken: token
        })
    },
    signin: async (req, res) => {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        
        if(!user) {
            res.status(401).send({ message: "User not found" })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid) {
            res.status(401).send({ message: "Wrong password" })
        } else {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })
            res.send({
                accessToken: token
            })
        }
    }
}

module.exports = authController;