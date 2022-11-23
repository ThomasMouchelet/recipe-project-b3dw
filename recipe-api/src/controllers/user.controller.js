const User = require('../models/user.model');

const userController = {
    getAll: async (req, res) => {
        const users = await User.find()
        res.send(users)
    },
    getOne: async (req, res) => {
        const user = await User.findById(req.params.id)
        res.send(user)
    },
    create: async (req, res) => {
        const user = await User.create(req.body)
        res.send(user)
    },
    update: async (req, res) => {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.send(user)
    },
    remove: async (req, res) => {
        const user = await User.findByIdAndRemove(req.params.id)
        res.send(user)
    }
}

module.exports = userController;